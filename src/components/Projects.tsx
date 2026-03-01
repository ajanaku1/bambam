"use client";

import { motion } from "framer-motion";
import { GitHub, ExternalLink } from "@/components/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    tag: "Web3 / DeFi",
    title: "AlphaArena",
    description:
      "Gamified copy-trading platform for Solana. Weekly Trading Royale competitions, one-click copy of top Pacifica DEX traders, live leaderboards, and referral rewards.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Pacifica API", "React Query"],
    demo: "https://alpha-arena-rho.vercel.app/",
    github: "https://github.com/ajanaku1/AlphaArena",
  },
  {
    tag: "AI Engineering",
    title: "HealthHarmony",
    description:
      "Production AI wellness coach built on Google Gemini. Multi-model architecture with real-time webcam coaching, function calling against live Firestore data, and structured JSON output on every response.",
    stack: ["React", "TypeScript", "Gemini AI", "Firebase", "Remotion", "Tailwind"],
    demo: "https://health-harmony-pied.vercel.app",
    github: "https://github.com/ajanaku1/HealthHarmony",
  },
  {
    tag: "Web3 / Crypto",
    title: "Trace",
    description:
      "Solana wallet privacy analyzer that scores on-chain exposure across 6 categories. Maps social identity linkages, network relationships, and behavioral patterns that reveal wallet owners.",
    stack: ["React", "TypeScript", "Solana Web3.js", "Express", "Recharts", "Graphology"],
    demo: "https://trace-wheat.vercel.app",
    github: "https://github.com/ajanaku1/trace101",
  },
  {
    tag: "Web3 / Solana",
    title: "ZombieYield",
    description:
      "Loyalty dashboard for Solana zombie token holders. Wallet-connected asset scanning, Torque-powered points engine, and claimable rewards for long-term holders.",
    stack: ["React", "TypeScript", "Solana Web3.js", "Vite", "Torque SDK"],
    demo: "https://zombieyield.vercel.app/",
    github: "https://github.com/ajanaku1/ZombieYield",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-accent mb-3">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I&apos;ve built.
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease, delay: i * 0.05 }}
              className="group rounded-lg border border-border bg-card p-6 sm:p-8 hover:border-border-hover hover:bg-card-hover transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">{project.tag}</span>
                  {"demo" in project && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-accent/30 text-accent/80">
                      Live
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {"demo" in project && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-foreground hover:bg-border/30 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-foreground hover:bg-border/30 transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <GitHub size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-background text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
