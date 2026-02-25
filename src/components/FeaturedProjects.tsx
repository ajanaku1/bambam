"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease, stagger } from "@/lib/motion";
import { GitHub, ExternalLink, Dot } from "@/components/Icons";

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
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={stagger(index, 0.12)}
      className="hover-card group relative rounded-lg border border-border bg-card p-8 transition-[background-color,border-color] duration-200"
    >
      {/* Gradient background on hover — guarded via CSS hover-card class */}
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

        <h3 className="text-xl font-bold tracking-tight mb-3">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <ul className="space-y-2 mb-6">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-muted"
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

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-sm text-accent mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What I&apos;ve built.
          </h2>
          <p className="text-muted leading-relaxed">
            Production-grade systems across AI, crypto, and security. Each one
            starts with a real problem and ships a scoped solution.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
