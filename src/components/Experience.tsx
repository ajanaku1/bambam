"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "@/lib/motion";
import { Dot } from "@/components/Icons";

const experiences = [
  {
    category: "Growth & Community",
    items: [
      {
        role: "Growth & Community Lead",
        company: "Truthbounty",
        period: "Dec 2025 — Present",
        description:
          "Spearheaded community growth and GTM for an ambitious Web3 project. Orchestrated a viral Twitter campaign leveraging crypto community networks, driving voter engagement that helped secure 2nd place at Seedify Hackathon and unlock $750K in funding.",
        highlights: [
          "Led Twitter campaign that drove Seedify Hackathon 2nd place finish",
          "Enabled $750K funding raise through strategic community mobilization",
          "Leveraged CT influence to drive awareness and voter participation",
        ],
      },
    ],
  },
  {
    category: "Game Development & Training",
    items: [
      {
        role: "Collaborative Developer",
        company: "Gamr Africa (Training Camp)",
        period: "Apr 2025 — Aug 2025",
        description:
          "Participated in an intensive collaborative training program with peer developers to ship Mosun, a 2D platformer with an African narrative. Focused on hands-on game development, cross-discipline collaboration, and iterative design feedback.",
        highlights: [
          "Co-shipped Mosun — a complete 2D platformer game",
          "Collaborated on game design, mechanics, and production testing",
          "Gained experience in iterative game dev workflows and team coordination",
        ],
      },
    ],
  },
  {
    category: "Frontend Engineering",
    items: [
      {
        role: "Front-end Developer Intern",
        company: "Safe Security Dynamics",
        period: "Feb 2024 — Apr 2024",
        description:
          "Developed user-facing web interfaces with a focus on usability and clear user experience. Identified and resolved bugs in a fast-paced, agile environment.",
        highlights: [
          "Built production UI components with focus on usability",
          "Bug identification and resolution in agile sprints",
          "Foundation for transition into full-stack AI development",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono text-sm text-accent mb-4">Experience</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Where I&apos;ve worked.
          </h2>
          <p className="text-muted leading-relaxed mb-16">
            I don&apos;t follow a linear path — I explore deliberately. From frontend engineering to community growth to AI product building, each domain taught me something essential. This breadth is intentional.
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.08 * (groupIndex + 1),
                ease,
              }}
            >
              <p className="font-mono text-xs text-accent tracking-wide mb-6 uppercase">
                {group.category}
              </p>

              {group.items.map((item) => (
                <div
                  key={item.company}
                  className="relative pl-6 border-l border-border"
                >
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent" />

                  <div className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h3 className="font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-muted shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent/80 mb-3">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span
                            className="text-accent mt-1.5 shrink-0"
                            aria-hidden="true"
                          >
                            <Dot size={8} />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
