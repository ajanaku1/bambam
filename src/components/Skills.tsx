"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const skillGroups = [
  {
    label: "AI Integration",
    skills: [
      "Google Gemini (Flash + Pro)",
      "OpenAI API",
      "Multimodal AI (Vision, Audio, Video)",
      "Function Calling & Structured Output",
      "Prompt Engineering",
    ],
  },
  {
    label: "Blockchain & Web3",
    skills: [
      "Solana Web3.js & Anchor",
      "Solidity & Hardhat",
      "Ethers.js & EVM",
      "Tether WDK",
      "Zama fhEVM (FHE)",
      "DeFi Protocol Integration",
    ],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      "React / Next.js / Vite",
      "React Native & Expo",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion & Radix UI",
      "Recharts & Graph Visualization",
    ],
  },
  {
    label: "Backend & Infrastructure",
    skills: [
      "Node.js / Express",
      "Prisma & SQLite",
      "Firebase / Firestore",
      "WebSockets",
      "Vercel & Docker",
      "REST API Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-accent mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, borderColor: "var(--border-hover)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease, delay: i * 0.04 }}
              className="p-5 rounded-lg border border-border bg-card hover:shadow-[0_4px_20px_rgba(16,185,129,0.06)] transition-shadow duration-300"
            >
              <h3 className="font-mono text-xs text-accent tracking-wide mb-4 uppercase">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors duration-150"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
