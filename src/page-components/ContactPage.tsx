"use client";

import { motion } from "framer-motion";
import { pageTransitionUp } from "@/lib/pageTransitions";
import { Mail, GitHub, LinkedIn, XIcon } from "@/components/Icons";

interface ContactPageProps {
  isActive: boolean;
}

export default function ContactPage({ isActive }: ContactPageProps) {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pb-16 sm:pb-0">
      <div className="max-w-3xl mx-auto text-center w-full">
        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
        >
          <p className="font-mono text-xs sm:text-sm text-accent mb-3 sm:mb-4">Get in touch</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-muted leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            I&apos;m open to full-time roles, contract work, and collaborations
            — especially in AI, crypto, product engineering, and growth. Whether
            you&apos;re building ambitious products or need someone to drive
            community and impact, let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          transition={{ ...pageTransitionUp.transition, delay: 0.12 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16"
        >
          <a
            href="mailto:mykdahunsi@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 min-h-[44px] bg-foreground text-background font-medium text-sm rounded-lg hover:bg-foreground/90 active:scale-[0.97] transition-colors w-full sm:w-auto"
          >
            <Mail size={16} aria-hidden="true" />
            mykdahunsi@gmail.com
          </a>
          <a
            href="https://github.com/ajanaku1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors w-full sm:w-auto"
          >
            <GitHub size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dahunsijajanaku"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors w-full sm:w-auto"
          >
            <LinkedIn size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://x.com/curioswhispers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors w-full sm:w-auto"
          >
            <XIcon size={16} aria-hidden="true" />
            X / Twitter
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-muted"
        >
          Designed and built by Bambam
        </motion.p>
      </div>
    </section>
  );
}
