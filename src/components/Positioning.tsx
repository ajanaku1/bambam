function WorkingNotes() {
  return (
    <aside className="positioning-notes" aria-label="Working approach">
      <div>
        <p className="eyebrow">Working range</p>
        <h2>From the interface to the system boundary.</h2>
        <p>Product definition, interaction design, application engineering, smart contracts, model integration, and delivery.</p>
      </div>
      <div>
        <p className="eyebrow">Current question</p>
        <h2>What can the user trust, verify, and complete?</h2>
        <p>The recurring concern is making difficult systems legible enough to use and dependable enough to matter.</p>
      </div>
    </aside>
  );
}

export default function Positioning() {
  return (
    <section className="positioning stage" id="positioning" aria-labelledby="positioning-title">
      <div className="positioning-main">
        <p className="eyebrow">Independent practice / Selected work / 2026</p>
        <h1 id="positioning-title">
          Product engineering with <em>signal</em> and substance.
        </h1>
        <p className="positioning-copy">
          Bambam builds across applied AI, onchain systems, privacy and payments infrastructure, and consumer products. Autonomous agents are an important thread in the work, not the whole identity.
        </p>
        <div className="positioning-actions">
          <a className="action action-primary" href="#products">Review selected products</a>
          <a className="action action-secondary" href="mailto:mykdahunsi@gmail.com">Email Bambam</a>
        </div>
      </div>
      <WorkingNotes />
    </section>
  );
}
