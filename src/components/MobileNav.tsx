"use client";

import { ChevronDown, ChevronUp } from "@/components/Icons";

interface MobileNavProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function MobileNav({
  currentPage,
  totalPages,
  onPageChange,
}: MobileNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-background/90 backdrop-blur-xl border-t border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <button
            onClick={() => onPageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card-hover"
            aria-label="Previous page"
          >
            <ChevronUp size={16} className="rotate-[-90deg]" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === i
                    ? "bg-accent w-6"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={currentPage === i ? "page" : undefined}
              />
            ))}
          </div>

          <button
            onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card-hover"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronDown size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}
