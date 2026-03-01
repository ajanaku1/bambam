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
    <section id="contact" className="py-20 sm:py-28 px-6 bg-background-alt">
      <div className="max-w-5xl mx-auto">
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
            Open to full-time roles, contract work, and collaborations —
            especially in AI, crypto, product engineering, and growth.
          </p>

          <motion.a
            href="mailto:mykdahunsi@gmail.com"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium text-sm rounded-full hover:bg-accent-dim transition-colors mb-8"
          >
            <Mail size={16} aria-hidden="true" />
            mykdahunsi@gmail.com
          </motion.a>

          <div className="flex items-center gap-3 pt-6 border-t border-border">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-muted border border-border rounded-full hover:text-foreground hover:border-border-hover transition-colors"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </a>
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
