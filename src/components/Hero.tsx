"use client";

import { motion } from "framer-motion";
import { GitHub, LinkedIn, XIcon, Mail, ArrowRight } from "@/components/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "7+", label: "Projects shipped" },
  { value: "$750K", label: "Raise enabled" },
  { value: "2nd", label: "Seedify Hackathon" },
  { value: "3+", label: "Years building" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] -top-40 -left-40 opacity-20"
        style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)", animationDelay: "0s" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] top-1/3 -right-32 opacity-15"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)", animationDelay: "-3s" }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] bottom-20 left-1/4 opacity-10"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", animationDelay: "-5s" }}
      />

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="max-w-2xl">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.3, ease, delay: 0 }}
            className="font-mono text-sm text-accent tracking-wide mb-4"
          >
            AI & Crypto Product Engineer
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.3, ease, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            I build AI-powered
            <br />
            products{" "}
            <span className="shimmer-gold bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              that ship.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.3, ease, delay: 0.1 }}
            className="text-lg text-muted max-w-lg leading-relaxed mb-8"
          >
            From multimodal AI systems to Solidity smart contracts
            and mobile dApps. Full-stack across AI, DeFi, and Web3.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.3, ease, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <motion.a
              href="mailto:mykdahunsi@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-medium text-sm rounded-full hover:bg-accent-dim transition-colors"
            >
              Get in touch
              <Mail size={15} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm rounded-full hover:border-border-hover hover:bg-card transition-colors"
            >
              View my work
              <ArrowRight size={14} aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.3, ease, delay: 0.2 }}
            className="flex items-center gap-1 mb-16"
          >
            {[
              { href: "https://github.com/ajanaku1", icon: GitHub, label: "GitHub" },
              { href: "https://linkedin.com/in/dahunsijajanaku", icon: LinkedIn, label: "LinkedIn" },
              { href: "https://x.com/curioswhispers", icon: XIcon, label: "X" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-foreground hover:bg-card transition-colors"
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.3, ease, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-accent tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
