"use client";

import { motion } from "framer-motion";

interface ScrollProgressProps {
  currentPage: number;
  totalPages: number;
  scrollProgress: number;
}

export default function ScrollProgress({
  currentPage,
  totalPages,
  scrollProgress,
}: ScrollProgressProps) {
  const progressPercentage = ((currentPage + scrollProgress) / totalPages) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-border hidden lg:block">
      <motion.div
        className="h-full bg-accent"
        style={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
