import { practiceAreas } from "@/data/portfolio";

export default function PracticeSection() {
  return (
    <section className="practice-section" id="practice" aria-labelledby="practice-title">
      <header>
        <p className="eyebrow">03 / Broader practice</p>
        <h2 id="practice-title">The whole product, not only the model or contract.</h2>
        <p>
          The work moves between interface decisions and the system boundary behind them.
        </p>
      </header>
      <dl className="practice-list">
        {practiceAreas.map((area, index) => (
          <div key={area.label}>
            <dt><span aria-hidden="true">0{index + 1}</span>{area.label}</dt>
            <dd>{area.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
