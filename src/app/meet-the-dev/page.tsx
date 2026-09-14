import type { Metadata } from "next";
import Link from "next/link";

import DevProfile from "@/components/DevProfile";

export const metadata: Metadata = {
  title: "Meet the dev — Bambam",
  description:
    "Bambam's background, judged results, technical range, and where to get in touch.",
  alternates: {
    canonical: "https://ajanaku1.github.io/bambam/meet-the-dev",
  },
  openGraph: {
    title: "Meet the dev — Bambam",
    description: "Background, judged results, technical range, and contact.",
    type: "profile",
    url: "https://ajanaku1.github.io/bambam/meet-the-dev",
  },
};

const sections = [
  { number: "00", id: "dev-intro", label: "Intro" },
  { number: "01", id: "achievements", label: "Achievements" },
  { number: "02", id: "experience", label: "Experience" },
  { number: "03", id: "socials", label: "Socials" },
];

function DevIndex(): React.JSX.Element {
  return (
    <aside className="side-index" aria-label="Profile index">
      <Link className="identity" href="/">
        <strong>Bambam</strong>
        <span>Back to selected work</span>
      </Link>
      <nav aria-label="Profile sections">
        <ol className="index-links">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span>{section.number}</span>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <p className="index-scope">
        Applied AI, onchain systems, privacy and payments, consumer products.
      </p>
    </aside>
  );
}

export default function MeetTheDev(): React.JSX.Element {
  return (
    <div className="portfolio-shell">
      <DevIndex />
      <main className="portfolio-content" id="main">
        <DevProfile />
        <footer className="site-footer">
          <span>Signal &amp; Substance / 2026</span>
          <span>Designed and built by Bambam</span>
        </footer>
      </main>
    </div>
  );
}
