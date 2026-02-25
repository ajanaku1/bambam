"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease, stagger } from "@/lib/motion";
import { Dot } from "@/components/Icons";

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
    label: "Backend & Systems",
    skills: [
      "Node.js / Express",
      "Python (stdlib)",
      "Firebase / Firestore",
      "Vercel Serverless",
      "REST API Design",
    ],
  },
  {
    label: "Growth & Community",
    skills: [
      "Community Campaign Strategy",
      "Crypto Twitter (CT) Networks",
      "Product Launch GTM",
      "Community Mobilization",
      "Network Effects & Growth",
    ],
  },
  {
    label: "Product & Delivery",
    skills: [
      "MVP Scoping",
      "User-Centric Design",
      "Technical Documentation",
      "Agile Workflows",
      "Collaborative Development",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-accent mb-4">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What I work with.
          </h2>
          <p className="text-muted leading-relaxed">
            Organized by domain, not alphabetically. I intentionally explore
            different areas — each skill group represents a capability I&apos;ve
            shipped production code or driven real impact with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={stagger(i)}
            >
              <h3 className="font-mono text-xs text-accent tracking-wide mb-4 uppercase">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                      <Dot size={8} />
                    </span>
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
