import { recordedResults } from "@/data/portfolio";

export default function ResultsLedger() {
  return (
    <section className="results-section" id="results" aria-labelledby="results-title">
      <header className="results-heading">
        <p className="eyebrow">02 / Recorded results</p>
        <h2 id="results-title">Outcomes, stated plainly.</h2>
      </header>
      <dl className="results-ledger">
        {recordedResults.map((product) => (
          <div key={product.title}>
            <dt>{product.title}</dt>
            <dd><strong>{product.result}</strong><span>{product.event}</span></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
