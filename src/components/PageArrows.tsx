"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/pageTransitions";

interface PageArrowsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PageArrows({
  currentPage,
  totalPages,
  onPageChange,
}: PageArrowsProps) {
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  return (
    <>
      {/* Left Arrow */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: canGoPrev ? 1 : 0.3, x: 0 }}
        transition={{ duration: 0.3, ease }}
        onClick={() => canGoPrev && onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-accent hover:border-accent hover:text-background transition-all duration-200 disabled:cursor-not-allowed disabled:hover:bg-card/80 disabled:hover:text-foreground"
        aria-label="Previous page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: canGoNext ? 1 : 0.3, x: 0 }}
        transition={{ duration: 0.3, ease }}
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-accent hover:border-accent hover:text-background transition-all duration-200 disabled:cursor-not-allowed disabled:hover:bg-card/80 disabled:hover:text-foreground"
        aria-label="Next page"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </>
  );
}
