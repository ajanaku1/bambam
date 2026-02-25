"use client";

import { motion } from "framer-motion";
import { pageTransitionUp } from "@/lib/pageTransitions";
import { Dot } from "@/components/Icons";

interface SkillsPageProps {
  isActive: boolean;
}

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

export default function SkillsPage({ isActive }: SkillsPageProps) {
  return (
    <section className="h-screen flex items-start justify-center px-4 sm:px-6 overflow-y-auto overflow-x-hidden pt-16 sm:pt-20 pb-20 sm:pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          className="mb-8 sm:mb-12"
        >
          <p className="font-mono text-xs sm:text-sm text-accent mb-3 sm:mb-4">Skills</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            What I work with.
          </h2>
          <p className="text-muted leading-relaxed text-sm sm:text-base">
            Organized by domain, not alphabetically. I intentionally explore
            different areas — each skill group represents a capability I&apos;ve
            shipped production code or driven real impact with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              variants={pageTransitionUp}
              animate={isActive ? "animate" : "initial"}
              transition={{ ...pageTransitionUp.transition, delay: i * 0.06 }}
            >
              <h3 className="font-mono text-xs text-accent tracking-wide mb-3 sm:mb-4 uppercase">
                {group.label}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {group.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + i * 0.06 + j * 0.03,
                    }}
                    className="flex items-start gap-2 text-xs sm:text-sm text-muted break-words"
                  >
                    <span className="text-accent mt-1 shrink-0" aria-hidden="true">
                      <Dot size={8} />
                    </span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
