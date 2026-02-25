"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "@/lib/pageTransitions";
import Navigation from "@/components/Navigation";
import PageNavigation from "@/components/PageNavigation";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollHint from "@/components/ScrollHint";
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
  const [normalizedScrollProgress, setNormalizedScrollProgress] = useState(0);

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

  // Mouse wheel navigation for desktop (horizontal swipe only)
  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const SCROLL_THRESHOLD = 150; // Increased from 50 to reduce sensitivity
    const SCROLL_COOLDOWN = 600; // Increased from 400ms to prevent rapid navigation
    let lastScrollTime = 0;
    let accumulator = 0;

    const handleWheel = (e: WheelEvent) => {
      // Only use horizontal scroll (trackpad swipe or shift+scroll)
      // Ignore vertical scroll completely
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && Math.abs(e.deltaY) > 0) {
        return;
      }
      
      const scrollDelta = e.deltaX;
      if (scrollDelta === 0) return;
      
      if (isTransitioning) return;

      const now = Date.now();
      if (now - lastScrollTime < SCROLL_COOLDOWN) return;

      accumulator += scrollDelta;
      const progress = Math.max(0, Math.min(1, Math.abs(accumulator) / SCROLL_THRESHOLD));
      setNormalizedScrollProgress(scrollDelta > 0 ? progress : 1 - progress);
      
      if (accumulator > SCROLL_THRESHOLD) {
        lastScrollTime = now;
        goToPage(currentPage + 1);
        accumulator = 0;
        setNormalizedScrollProgress(0);
      }
      
      if (accumulator < -SCROLL_THRESHOLD) {
        lastScrollTime = now;
        goToPage(currentPage - 1);
        accumulator = 0;
        setNormalizedScrollProgress(0);
      }
    };

    // Reset accumulator when page changes
    if (isTransitioning) {
      accumulator = 0;
      setNormalizedScrollProgress(0);
    }

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isTransitioning, goToPage]);

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

      <ScrollProgress
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        scrollProgress={normalizedScrollProgress}
      />

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

      <ScrollHint />
    </>
  );
}
