"use client";

import { motion } from "framer-motion";
import { Mail, GitHub, LinkedIn, XIcon } from "@/components/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { href: "https://github.com/ajanaku1", icon: GitHub, label: "GitHub" },
  { href: "https://linkedin.com/in/dahunsijajanaku", icon: LinkedIn, label: "LinkedIn" },
  { href: "https://x.com/curioswhispers", icon: XIcon, label: "X / Twitter" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-6 bg-background-alt overflow-hidden">
      {/* Ambient glow */}
      <div
        className="gradient-orb w-[400px] h-[400px] -bottom-40 -right-40 opacity-15"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)", animationDelay: "-2s" }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease }}
          className="max-w-xl"
        >
          <p className="font-mono text-sm text-accent mb-3">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Open to full-time roles, contract work, and collaborations,
            especially in AI, crypto, product engineering, and growth.
          </p>

          <motion.a
            href="mailto:mykdahunsi@gmail.com"
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium text-sm rounded-full hover:bg-accent-dim transition-colors mb-8"
          >
            <Mail size={16} aria-hidden="true" />
            mykdahunsi@gmail.com
          </motion.a>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-muted border border-border rounded-full hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-colors"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 pt-6 border-t border-border">
          <p className="text-xs text-muted-dim">
            Designed and built by Bambam
          </p>
        </div>
      </div>
    </section>
  );
}
