"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "@/lib/pageTransitions";
import Navigation from "@/components/Navigation";
import PageNavigation from "@/components/PageNavigation";
import MobileNav from "@/components/MobileNav";
import PageArrows from "@/components/PageArrows";
import HeroPage from "@/page-components/HeroPage";
import AboutPage from "@/page-components/AboutPage";
import ExperiencePage from "@/page-components/ExperiencePage";
import SkillsPage from "@/page-components/SkillsPage";
import ProjectsPage from "@/page-components/ProjectsPage";
import ContactPage from "@/page-components/ContactPage";

const pages = [
  { id: "home", component: HeroPage, label: "Home" },
  { id: "about", component: AboutPage, label: "About" },
  { id: "experience", component: ExperiencePage, label: "Experience" },
  { id: "skills", component: SkillsPage, label: "Skills" },
  { id: "projects", component: ProjectsPage, label: "Projects" },
  { id: "contact", component: ContactPage, label: "Contact" },
];

const TOTAL_PAGES = pages.length;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPage = useCallback((newPage: number) => {
    if (newPage < 0 || newPage >= TOTAL_PAGES || isTransitioning) return;
    
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
    setIsTransitioning(true);
    
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentPage, isTransitioning]);

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          nextPage();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevPage();
          break;
        case "Home":
          e.preventDefault();
          goToPage(0);
          break;
        case "End":
          e.preventDefault();
          goToPage(TOTAL_PAGES - 1);
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
          e.preventDefault();
          goToPage(parseInt(e.key) - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, prevPage, goToPage]);

  // Listen for navigation events from Hero page buttons
  useEffect(() => {
    const handleNavigateToProjects = () => goToPage(4); // Projects is page index 4
    
    window.addEventListener('navigate-to-projects', handleNavigateToProjects);
    return () => window.removeEventListener('navigate-to-projects', handleNavigateToProjects);
  }, [goToPage]);

  // Update URL hash without scrolling
  useEffect(() => {
    const pageId = pages[currentPage].id;
    window.history.replaceState(null, "", `#${pageId}`);
  }, [currentPage]);

  // Handle hash navigation on mount only
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const pageIndex = pages.findIndex(p => p.id === hash);
    if (pageIndex !== -1 && pageIndex !== currentPage) {
      // Use requestAnimationFrame to avoid setState in effect warning
      requestAnimationFrame(() => {
        setCurrentPage(pageIndex);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <>
      <Navigation currentPage={currentPage} onPageChange={goToPage} />

      <main className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={pageTransition.transition}
            className="absolute inset-0"
          >
            <CurrentPageComponent isActive={true} />
          </motion.div>
        </AnimatePresence>
      </main>

      <PageArrows
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={goToPage}
      />

      <PageNavigation
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={goToPage}
      />

      <MobileNav
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={goToPage}
      />
    </>
  );
}
