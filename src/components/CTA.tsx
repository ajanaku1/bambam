"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";
import { Mail, GitHub, LinkedIn, XIcon } from "@/components/Icons";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono text-sm text-accent mb-4">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
            I&apos;m open to full-time roles, contract work, and collaborations
            — especially in AI, crypto, product engineering, and growth. Whether
            you&apos;re building ambitious products or need someone to drive
            community and impact, let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:mykdahunsi@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-foreground text-background font-medium text-sm rounded-lg hover:bg-foreground/90 active:scale-[0.97] transition-colors"
          >
            <Mail size={16} aria-hidden="true" />
            mykdahunsi@gmail.com
          </a>
          <a
            href="https://github.com/ajanaku1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors"
          >
            <GitHub size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dahunsijajanaku"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors"
          >
            <LinkedIn size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://x.com/curioswhispers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-border text-foreground font-medium text-sm rounded-lg hover:bg-card-hover active:scale-[0.97] transition-colors"
          >
            <XIcon size={16} aria-hidden="true" />
            X / Twitter
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-xs text-muted"
        >
          Designed and built by Bambam
        </motion.p>
      </div>
    </section>
  );
}
