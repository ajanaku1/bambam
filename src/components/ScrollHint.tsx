"use client";

import { motion } from "framer-motion";

export default function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-3 text-muted/60"
    >
      <motion.div
        animate={{ x: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <span className="text-[10px] uppercase tracking-widest">Swipe</span>
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
