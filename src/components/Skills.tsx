"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const skillGroups = [
  {
    label: "AI & Machine Learning",
    skills: [
      "Google Gemini (Flash + Pro)",
      "Multimodal AI (Vision, Audio, Video)",
      "Function Calling & Structured Output",
      "Streaming Responses (SSE)",
      "Prompt Engineering",
    ],
  },
  {
    label: "Crypto & Web3",
    skills: [
      "Solana Web3.js",
      "On-chain Analysis",
      "Wallet Privacy & Security",
      "DeFi Protocol Integration",
      "Token Economics",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    label: "Backend & Infrastructure",
    skills: [
      "Node.js / Express",
      "Python",
      "Firebase / Firestore",
      "Vercel Serverless",
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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease, delay: i * 0.04 }}
              className="p-5 rounded-lg border border-border bg-card"
            >
              <h3 className="font-mono text-xs text-accent tracking-wide mb-4 uppercase">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-accent/60 shrink-0"
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
