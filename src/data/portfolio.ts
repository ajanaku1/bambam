export interface Product {
  index: string;
  title: string;
  category: string;
  description: string;
  statement: string;
  stack: string;
  github: string;
  demo?: string;
  result?: string;
  event?: string;
}

export const products: Product[] = [
  {
    index: "01",
    title: "Chit",
    category: "Private funding / Onchain systems / Trading infra",
    description:
      "A private funding layer for trading fleets. A trader funds many wallets through Chit instead of from one main wallet, so no transaction joins the main wallet to a fleet account. Live on Robinhood Chain testnet with sponsored buys through a real Uniswap v4 pool.",
    statement: "Private, not anonymous.",
    stack: "Solidity / TypeScript / ERC-4337 / Uniswap v4",
    github: "https://github.com/ajanaku1/chit",
    demo: "https://chit.tools",
  },
  {
    index: "02",
    title: "Zalary",
    category: "Confidential payroll / Solana / Payments",
    description:
      "Confidential cross-border payroll on Solana. Token-2022 confidential transfers keep salary amounts encrypted onchain, while employees can withdraw and cash out through MoonPay.",
    statement: "Private amounts. Usable exits.",
    stack: "Solana / Token-2022 / MoonPay",
    github: "https://github.com/ajanaku1/Zalary",
    demo: "https://zalary.vercel.app",
  },
  {
    index: "03",
    title: "ShadowLend",
    category: "Privacy / Lending / Onchain systems",
    description:
      "Privacy-preserving undercollateralized lending. Zama fhEVM keeps borrower credit data encrypted onchain while smart-contract controls make the lending flow understandable.",
    statement: "Encrypted credit decisions.",
    stack: "Zama fhEVM / Solidity / React / Hardhat",
    github: "https://github.com/ajanaku1/ShadowLend",
    demo: "https://shadowlend-cyan.vercel.app",
  },
  {
    index: "04",
    title: "Punt",
    category: "Peer systems / Payments / On-device AI",
    description:
      "Peer-to-peer football betting without a bookmaker or central server. An on-device QVAC jury handles outcomes while WDK provides USDT escrow for settlement.",
    statement: "Peer settlement without a house.",
    stack: "QVAC / Tether WDK / USDT",
    github: "https://github.com/ajanaku1/punt",
    demo: "https://punt-ten.vercel.app",
    result: "Top 4 finalist",
    event: "Tether Developers Cup",
  },
  {
    index: "05",
    title: "Hanami",
    category: "Applied AI / Attestation / Access",
    description:
      "An AI-assisted access system for NFT allowlists. Decisions run with TEE attestation on 0G compute and export to a Merkle tree for verifiable inclusion.",
    statement: "Verifiable access decisions.",
    stack: "0G compute / TEE / Merkle proofs",
    github: "https://github.com/ajanaku1/hanami",
    demo: "https://hanami-hazel.vercel.app",
    result: "Round of 32",
    event: "0G Zero Cup",
  },
  {
    index: "06",
    title: "InferMart",
    category: "Distributed inference / Metering / Settlement",
    description:
      "A peer-to-peer market for spare on-device inference. Devices offer unused capacity, meter work by token, and receive stablecoin settlement without a central operator.",
    statement: "Idle compute becomes a market.",
    stack: "On-device inference / Stablecoins",
    github: "https://github.com/ajanaku1/InferMart",
    result: "Top 100",
    event: "QVAC Hackathon",
  },
  {
    index: "07",
    title: "Headhunter",
    category: "Autonomous execution / Open source / x402",
    description:
      "An AI bounty hunter that finds suitable work, evaluates it, makes a claim, and settles completed tasks over x402.",
    statement: "A bounded autonomous workflow.",
    stack: "AI orchestration / x402 / Payments",
    github: "https://github.com/ajanaku1/headhunter",
    result: "Hackathon winner",
    event: "Autonomous bounty workflow",
  },
];

export const recordedResults = products.filter(
  (product): product is Product & Required<Pick<Product, "result" | "event">> =>
    Boolean(product.result && product.event),
);

export const practiceAreas = [
  {
    label: "Applied AI",
    description:
      "Inference, evaluation, constrained outputs, orchestration, and interfaces that make model behavior legible.",
  },
  {
    label: "Onchain systems",
    description:
      "Smart contracts, wallets, attestations, markets, and flows that explain what happens onchain.",
  },
  {
    label: "Privacy and payments",
    description:
      "Encrypted computation, confidential transfers, settlement, escrow, metering, and practical cash-out paths.",
  },
  {
    label: "Consumer products",
    description:
      "Useful software shaped around everyday decisions and real constraints, from payroll access to peer coordination.",
  },
];

export const contactLinks = [
  { label: "Email", value: "mykdahunsi@gmail.com", href: "mailto:mykdahunsi@gmail.com" },
  { label: "GitHub", value: "@ajanaku1", href: "https://github.com/ajanaku1" },
  {
    label: "LinkedIn",
    value: "/dahunsijajanaku",
    href: "https://linkedin.com/in/dahunsijajanaku",
  },
  { label: "X", value: "@curioswhispers", href: "https://x.com/curioswhispers" },
];
