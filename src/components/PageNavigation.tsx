"use client";

import { getPageLabel } from "@/lib/pageTransitions";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PageNavigation({
  currentPage,
  totalPages,
  onPageChange,
}: PageNavigationProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`group relative flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === i
              ? "bg-accent scale-125"
              : "bg-border hover:bg-accent/50"
          }`}
          aria-label={`Go to page ${i + 1}`}
          aria-current={currentPage === i ? "page" : undefined}
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {getPageLabel(i)}
          </span>
        </button>
      ))}
    </div>
  );
}
