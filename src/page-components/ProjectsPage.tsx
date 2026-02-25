"use client";

import { motion } from "framer-motion";
import { pageTransitionUp } from "@/lib/pageTransitions";
import { GitHub, ExternalLink, Dot } from "@/components/Icons";

interface ProjectsPageProps {
  isActive: boolean;
}

const projects = [
  {
    tag: "AI Engineering",
    title: "HealthHarmony",
    description:
      "Production-ready AI-powered wellness coach built on Google Gemini. Demonstrates advanced AI architecture: multimodal vision, video understanding, audio NLU, streaming + function calling, structured output, and cross-feature reasoning.",
    bullets: [
      "Multi-model strategy: Gemini Flash for speed, Pro for reasoning",
      "Real-time webcam workout coaching with 5-second frame analysis",
      "Function calling that queries actual user data from Firestore",
      "Structured output with JSON schema validation on every AI response",
      "Full Firebase auth + real-time data sync + PWA architecture",
    ],
    stack: [
      "React",
      "TypeScript",
      "Gemini AI",
      "Firebase",
      "Remotion",
      "Tailwind",
    ],
    demo: "https://health-harmony-pied.vercel.app",
    github: "https://github.com/ajanaku1/HealthHarmony",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    tag: "Web3 / Crypto",
    title: "Trace",
    description:
      "Production Solana wallet privacy analyzer that scores on-chain exposure across 6 categories. Educates users about how transaction patterns, social linkages, and behavioral signals reveal their identity on-chain.",
    bullets: [
      "6-category weighted exposure scoring algorithm",
      "Solana Web3.js + Solscan API for real on-chain data",
      "Social identity linking: ENS, SNS, Backpack, Lens, Farcaster",
      "Network graph visualization of wallet relationships",
      "DeFi/CEX pattern detection + memecoin trading analysis",
    ],
    stack: [
      "React",
      "TypeScript",
      "Solana Web3.js",
      "Express",
      "Recharts",
      "Graphology",
    ],
    demo: "https://trace-wheat.vercel.app",
    github: "https://github.com/ajanaku1/trace101",
    gradient: "from-emerald-500/10 to-cyan-500/10",
  },
];

function ProjectCard({
  project,
  index,
  isActive,
}: {
  project: (typeof projects)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="hover-card group relative rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 transition-[background-color,border-color] duration-200"
    >
      <div
        className={`hover-gradient absolute inset-0 rounded-lg bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-200`}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent tracking-wide">
              {project.tag}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded-lg border border-emerald-500/30 text-emerald-500/80">
              Live
            </span>
          </div>
          <div className="flex items-center gap-1">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-lg text-muted hover:text-foreground hover:bg-border/30 active:scale-95 transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-lg text-muted hover:text-foreground hover:bg-border/30 active:scale-95 transition-colors"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHub size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2 sm:mb-3">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 sm:mb-5">
          {project.description}
        </p>

        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-xs sm:text-sm text-muted"
            >
              <span className="text-accent mt-1.5 shrink-0" aria-hidden="true">
                <Dot size={8} />
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-lg bg-border/50 text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage({ isActive }: ProjectsPageProps) {
  return (
    <section className="h-screen flex items-start justify-center px-4 sm:px-6 overflow-y-auto overflow-x-hidden pt-16 sm:pt-20 pb-20 sm:pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          variants={pageTransitionUp}
          animate={isActive ? "animate" : "initial"}
          className="mb-8 sm:mb-12"
        >
          <p className="font-mono text-xs sm:text-sm text-accent mb-3 sm:mb-4">
            Featured Projects
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            What I&apos;ve built.
          </h2>
          <p className="text-muted leading-relaxed text-sm sm:text-base">
            Production-grade systems across AI, crypto, and security. Each one
            starts with a real problem and ships a scoped solution.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isActive={isActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
