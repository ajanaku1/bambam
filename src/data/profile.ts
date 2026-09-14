import { recordedResults, type Product } from "./portfolio";

export interface Milestone {
  headline: string;
  context: string;
  detail: string;
  href?: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  organisation: string;
  summary: string;
  highlights: string[];
}

export const devName = "Dahunsi Ajanaku";

export const devIntro = [
  "Dahunsi Ajanaku is a product engineer working across applied AI, onchain systems, privacy and payments infrastructure, and consumer software. He started out building front ends, moved through games, and now takes products end to end — from definition and interaction design through application engineering, smart contracts, and delivery.",
  "The recurring question is how much freedom a system can hand a user or an agent without losing track of the money or the decisions. That is why the plumbing gets as much attention as the demo: budgets, settlement, attestation, and a record of what actually happened.",
];

function milestoneFromResult(product: Product & Required<Pick<Product, "result" | "event">>): Milestone {
  return {
    headline: product.result,
    context: product.event,
    detail: `${product.title} — ${product.statement}`,
    href: product.demo ?? product.github,
  };
}

export const milestones: Milestone[] = [
  {
    headline: "Live on testnet",
    context: "Chit / Robinhood Chain 46630",
    detail: "First sponsored buy through a real Uniswap v4 pool landed on 6 September 2026.",
    href: "https://chit.tools",
  },
  ...recordedResults.map(milestoneFromResult),
];

export const experience: ExperienceEntry[] = [
  {
    period: "Current",
    role: "Product engineer",
    organisation: "Independent practice",
    summary:
      "Left employment to build independently, and went where the interesting problems were: crypto. Designs and ships complete products end to end — interface, application, contracts, and the operational path that makes them usable.",
    highlights: [
      "Built Chit, a private funding layer for trading fleets, now live on testnet and the most active piece of the practice.",
      "Seven products spanning confidential payroll, private funding, lending, peer settlement, and autonomous execution.",
      "Treats privacy claims as engineering constraints, stating plainly what a system does and does not hide.",
    ],
  },
  {
    period: "Previously",
    role: "Product engineer",
    organisation: "Gamr Labs",
    summary:
      "Learned to build games and shipped one with the team. Moved from front-end work into full product engineering here.",
    highlights: [
      "Built MSM, a game made with colleagues, which drew 100 players on demo day.",
      "Widened from interface work into product definition, systems, and delivery.",
    ],
  },
  {
    period: "Earlier",
    role: "Front-end developer, intern",
    organisation: "Plenipotent Company / Safe Security Dynamics",
    summary:
      "Front-end engineering across two internships — the first production work, and where the interface craft was built.",
    highlights: [
      "Shipped interface work against real product requirements and review.",
    ],
  },
  {
    period: "Graduated 2023",
    role: "BSc, Quantity Surveying",
    organisation: "University of Lagos",
    summary:
      "Studied quantity surveying — measurement, costing, and accounting for what a build actually takes — then moved into software.",
    highlights: [],
  },
  {
    period: "Ongoing",
    role: "Competitive builder",
    organisation: "Hackathon circuit",
    summary:
      "Builds working systems against short deadlines and public judging, against sponsor constraints and live infrastructure.",
    highlights: [
      "Placed at the Tether Developers Cup, the 0G Zero Cup, and the QVAC Hackathon.",
      "Won an open bounty-workflow hackathon with an agent that claims and settles work over x402.",
      "Works directly against sponsor stacks: Solana Token-2022, Zama fhEVM, 0G compute, Tether WDK, QVAC.",
    ],
  },
];

export const capabilities = [
  { label: "Languages", value: "TypeScript / Python / Solidity" },
  { label: "Application", value: "Next.js / React / Node" },
  { label: "Onchain", value: "EVM / Solana / ERC-4337 / Uniswap v4 / Hardhat" },
  { label: "Privacy", value: "Zama fhEVM / TEE attestation / Token-2022 / Merkle proofs" },
  { label: "Payments", value: "x402 / stablecoin settlement / escrow / metering" },
  { label: "Applied AI", value: "On-device inference / orchestration / evaluation" },
];
