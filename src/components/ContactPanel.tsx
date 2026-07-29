import { contactLinks } from "@/data/portfolio";

function ContactLinks(): React.JSX.Element {
  return (
    <nav className="contact-links" aria-label="Contact links">
      {contactLinks.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <a
            key={link.label}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
          >
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        );
      })}
    </nav>
  );
}

export default function ContactPanel(): React.JSX.Element {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">04 / Contact</p>
        <h2 id="contact-title">Bring the difficult part into focus.</h2>
        <p>
          For product engineering roles, collaborations, or a technical product that needs a clear path from idea to working system.
        </p>
      </div>
      <ContactLinks />
    </section>
  );
}
