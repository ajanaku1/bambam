"use client";

import { motion } from "framer-motion";
import { pageTransitionUp } from "@/lib/pageTransitions";
import { GitHub, LinkedIn, XIcon, Mail, ArrowRight } from "@/components/Icons";

interface HeroPageProps {
  isActive: boolean;
}

export default function HeroPage({ isActive }: HeroPageProps) {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pb-16 sm:pb-0">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center w-full">
        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          className="mb-6"
        >
          <p className="font-mono text-sm text-accent tracking-wide text-center">
            AI + Crypto + Full-Stack
          </p>
        </motion.div>

        <motion.h1
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          transition={{ ...pageTransitionUp.transition, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6 text-center"
        >
          I build AI-powered products
          <br />
          <span className="text-muted">that ship.</span>
        </motion.h1>

        <motion.p
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          transition={{ ...pageTransitionUp.transition, delay: 0.2 }}
          className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center"
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
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          transition={{ ...pageTransitionUp.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12 md:mb-16 w-full"
        >
          <a
            href="mailto:mykdahunsi@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-foreground text-background font-medium text-sm rounded-lg hover:bg-foreground/90 active:scale-[0.97] transition-colors"
          >
            Get in touch
            <Mail size={16} aria-hidden="true" />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const event = new CustomEvent('navigate-to-projects');
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors"
          >
            View my work
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-muted"
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
    </section>
  );
}
