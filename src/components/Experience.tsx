"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    role: "Growth & Community Lead",
    company: "Truthbounty",
    period: "Dec 2025 — Present",
    description:
      "Led viral campaign that drove Seedify Hackathon 2nd place finish. Enabled $750K funding raise through strategic community mobilization and CT network leverage.",
  },
  {
    role: "Collaborative Developer",
    company: "Gamr Africa",
    period: "Apr 2025 — Aug 2025",
    description:
      "Co-shipped Mosun, a 2D platformer with an African narrative. Intensive collaborative dev program focused on game mechanics, cross-discipline teamwork, and iterative design.",
  },
  {
    role: "Front-end Developer Intern",
    company: "Safe Security Dynamics",
    period: "Feb 2024 — Apr 2024",
    description:
      "Built production UI components with focus on usability. Bug identification and resolution in fast-paced agile sprints.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-6 bg-background-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3, ease }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-accent mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, ease, delay: i * 0.04 }}
              className="py-6 px-4 -mx-4 border-b border-border last:border-b-0 rounded-lg hover:bg-card/50 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold tracking-tight">{exp.role}</h3>
                  <p className="text-sm text-accent/80">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
