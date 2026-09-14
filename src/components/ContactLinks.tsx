import { contactLinks } from "@/data/portfolio";

export default function ContactLinks({ label }: { label: string }): React.JSX.Element {
  return (
    <nav className="contact-links" aria-label={label}>
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
