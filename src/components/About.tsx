"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono text-sm text-accent mb-4">About</p>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Builder, not just a coder.
          </h2>
        </motion.div>

        <div className="space-y-6 text-muted leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
          >
            I started in Web2 — building frontends with HTML, CSS, JavaScript,
            and React. But I quickly realized that the most interesting problems
            live at the edges of new technology. So I moved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24, ease }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { value: "6+", label: "Projects shipped" },
              { value: "$750K", label: "Raise contributed to" },
              { value: "2nd", label: "Seedify Hackathon" },
              { value: "3+", label: "Years building" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
