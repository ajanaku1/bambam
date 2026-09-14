import ContactLinks from "@/components/ContactLinks";

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
      <ContactLinks label="Contact links" />
    </section>
  );
}
