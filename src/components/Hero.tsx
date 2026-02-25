"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { GitHub, LinkedIn, XIcon, Mail, ArrowRight, ChevronDown } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono text-sm text-accent mb-6 tracking-wide">
            AI + Crypto + Full-Stack
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          I build AI-powered products
          <br />
          <span className="text-muted">that ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          From multimodal AI systems to on-chain privacy analysis — I architect
          and ship products at the intersection of AI and crypto. I also drive
          growth through community strategy. Previously helped Truthbounty
          secure{" "}
          <span className="text-foreground font-medium">
            2nd place at Seedify Hackathon
          </span>{" "}
          through strategic community mobilization and enabled a{" "}
          <span className="text-foreground font-medium">$750K raise</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-foreground text-background font-medium text-sm rounded-lg hover:bg-foreground/90 active:scale-[0.97] transition-colors"
          >
            View my work
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-muted"
        >
          <a
            href="https://github.com/ajanaku1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:text-foreground hover:bg-card-hover active:scale-95 transition-colors"
            aria-label="GitHub"
          >
            <GitHub size={20} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/dahunsijajanaku"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:text-foreground hover:bg-card-hover active:scale-95 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedIn size={20} aria-hidden="true" />
          </a>
          <a
            href="https://x.com/curioswhispers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:text-foreground hover:bg-card-hover active:scale-95 transition-colors"
            aria-label="X (Twitter)"
          >
            <XIcon size={18} aria-hidden="true" />
          </a>
          <a
            href="mailto:mykdahunsi@gmail.com"
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:text-foreground hover:bg-card-hover active:scale-95 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
