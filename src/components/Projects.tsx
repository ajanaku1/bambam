"use client";

import { motion } from "framer-motion";
import { GitHub, ExternalLink } from "@/components/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    tag: "DeFi / Privacy",
    title: "ShadowLend",
    description:
      "Privacy-preserving undercollateralized lending protocol. Encrypted credit scoring via Zama fhEVM ensures borrower data stays private on-chain, with Groq AI risk analysis and OpenZeppelin-secured smart contracts.",
    stack: ["React", "Solidity", "Zama fhEVM", "Hardhat", "Ethers.js", "Tailwind"],
    demo: "https://shadowlend-cyan.vercel.app",
    github: "https://github.com/ajanaku1/ShadowLend",
  },
  {
    tag: "Mobile / Web3",
    title: "WellEarned",
    description:
      "Mobile habit-tracking app that proves healthy habits on-chain. Gemini AI coaching, Solana wallet integration for crypto rewards, background activity tracking, and real-time progress charts.",
    stack: ["React Native", "Expo", "TypeScript", "Gemini AI", "Solana Web3.js", "Firebase"],
    demo: "https://drive.google.com/drive/u/0/folders/13wCkqVVxTmc9IZ0yhPQlwVvhw-Iiir80",
    github: "https://github.com/ajanaku1/WellEarned",
  },
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
    tag: "AI / Web3",
    title: "AgentVerse",
    description:
      "AI agent-to-agent marketplace where autonomous agents discover, negotiate, and trade skills for USDT. Built on Tether WDK with OpenAI-powered agent orchestration and real-time WebSocket communication.",
    stack: ["Next.js", "TypeScript", "Tether WDK", "OpenAI", "WebSockets", "Tailwind"],
    demo: "https://agentverse-cth8.onrender.com",
    github: "https://github.com/ajanaku1/AgentVerse",
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
];

function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease, delay: i * 0.05 }}
              onMouseMove={handleMouseMove}
              className="card-glow gradient-border group rounded-lg border border-border bg-card p-6 sm:p-8 hover:border-border-hover hover:bg-card-hover transition-all duration-200 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">{project.tag}</span>
                    {"demo" in project && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-accent/30 text-accent/80 group-hover:border-accent/60 group-hover:text-accent transition-colors">
                        Live
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {"demo" in project && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={17} aria-hidden="true" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={`${project.title} source code`}
                    >
                      <GitHub size={17} aria-hidden="true" />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-background text-muted border border-transparent group-hover:border-border transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
