"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ease } from "@/lib/motion";
import { Menu, Close } from "@/components/Icons";

interface NavigationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const links = [
  { page: 0, label: "Home" },
  { page: 1, label: "About" },
  { page: 2, label: "Experience" },
  { page: 3, label: "Skills" },
  { page: 4, label: "Projects" },
  { page: 5, label: "Contact" },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Keyboard escape for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(0);
          }}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/pfp.png"
            alt="Bambam"
            width={32}
            height={32}
            priority
            className="rounded-full object-cover ring-1 ring-accent/30"
          />
          <span className="font-mono text-sm tracking-tight text-foreground">
            Bambam.
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => onPageChange(link.page)}
                className={`text-sm transition-colors ${
                  currentPage === link.page
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle — 44px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-muted hover:text-foreground transition-colors rounded-lg active:scale-95"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <Close size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease }}
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-border ${
          mobileOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => {
                  onPageChange(link.page);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm transition-colors ${
                  currentPage === link.page
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
