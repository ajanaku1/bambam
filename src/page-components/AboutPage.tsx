"use client";

import { motion } from "framer-motion";
import { pageTransitionUp } from "@/lib/pageTransitions";

interface AboutPageProps {
  isActive: boolean;
}

export default function AboutPage({ isActive }: AboutPageProps) {
  const stats = [
    { value: "6+", label: "Projects shipped" },
    { value: "$750K", label: "Raise contributed to" },
    { value: "2nd", label: "Seedify Hackathon" },
    { value: "3+", label: "Years building" },
  ];

  return (
    <section className="h-screen flex items-start justify-center px-4 sm:px-6 overflow-y-auto overflow-x-hidden pt-16 sm:pt-20 pb-20 sm:pb-12">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
        >
          <p className="font-mono text-xs sm:text-sm text-accent mb-3 sm:mb-4">About</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
            Builder, not just a coder.
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed">
          <motion.p
            variants={pageTransitionUp}
            animate={isActive ? "animate" : "initial"}
            transition={{ ...pageTransitionUp.transition, delay: 0.08 }}
            className="text-sm sm:text-base"
          >
            I started in Web2 — building frontends with HTML, CSS, JavaScript,
            and React. But I quickly realized that the most interesting problems
            live at the edges of new technology. So I moved.
          </motion.p>

          <motion.p
            variants={pageTransitionUp}
            animate={isActive ? "animate" : "initial"}
            transition={{ ...pageTransitionUp.transition, delay: 0.16 }}
            className="text-sm sm:text-base"
          >
            Today, I build{" "}
            <span className="text-foreground">
              full AI-powered applications
            </span>{" "}
            — not wrappers around ChatGPT, but real systems that use multimodal
            vision, streaming, function calling, and structured output to solve
            actual problems. I pair that with deep{" "}
            <span className="text-foreground">
              crypto and Web3 literacy
            </span>{" "}
            — from Solana on-chain analysis to DeFi protocol tracking to
            responsible security tooling.
          </motion.p>

          <motion.p
            variants={pageTransitionUp}
            animate={isActive ? "animate" : "initial"}
            transition={{ ...pageTransitionUp.transition, delay: 0.24 }}
            className="text-sm sm:text-base"
          >
            What sets me apart is{" "}
            <span className="text-foreground">product thinking</span> paired
            with <span className="text-foreground">growth mentality</span>. I
            don&apos;t just build features — I ship products that matter. I
            helped Truthbounty secure 2nd place at Seedify through strategic
            community mobilization, leveraging networks to drive impact. Every
            project begins with a real problem, ships as a scoped MVP, and is
            built to production standards. I think in terms of users, impact,
            and iteration speed.
          </motion.p>

          <motion.div
            variants={pageTransitionUp}
            animate={isActive ? "animate" : "initial"}
            transition={{ ...pageTransitionUp.transition, delay: 0.32 }}
            className="pt-6 sm:pt-8 grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
