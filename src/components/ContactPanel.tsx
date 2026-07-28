import { contactLinks } from "@/data/portfolio";

function ContactLinks() {
  return (
    <nav className="contact-links" aria-label="Contact links">
      {contactLinks.map((link) => (
        <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
          <span>{link.label}</span>
          <strong>{link.value}</strong>
        </a>
      ))}
    </nav>
  );
}

export default function ContactPanel() {
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
