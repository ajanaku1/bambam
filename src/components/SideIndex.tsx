"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { number: "00", id: "positioning", label: "Positioning" },
  { number: "01", id: "products", label: "Products" },
  { number: "02", id: "results", label: "Results" },
  { number: "03", id: "practice", label: "Practice" },
  { number: "04", id: "contact", label: "Contact" },
];

function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("positioning");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function IndexLinks({ activeSection }: { activeSection: string }): React.JSX.Element {
  return (
    <ol className="index-links">
      {navigationItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            data-section-link={item.id}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            <span>{item.number}</span>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function SideIndex(): React.JSX.Element {
  const activeSection = useActiveSection();

  return (
    <aside className="side-index" aria-label="Portfolio index">
      <a className="identity" href="#positioning">
        <strong>Bambam</strong>
        <span>Product engineer / Lagos</span>
      </a>
      <nav aria-label="Portfolio sections">
        <IndexLinks activeSection={activeSection} />
      </nav>
      <p className="index-scope">
        Applied AI, onchain systems, privacy and payments, consumer products.
      </p>
    </aside>
  );
}
