import Image from "next/image";
import Link from "next/link";

import ContactLinks from "@/components/ContactLinks";
import { basePath } from "@/lib/base-path";
import { capabilities, devIntro, devName, experience, milestones, type ExperienceEntry, type Milestone } from "@/data/profile";

function MilestoneEntry({ milestone }: { milestone: Milestone }): React.JSX.Element {
  const body = (
    <>
      <strong>{milestone.headline}</strong>
      <span className="milestone-context">{milestone.context}</span>
      <span className="milestone-detail">{milestone.detail}</span>
    </>
  );

  return (
    <div className="milestone">
      {milestone.href ? (
        <a href={milestone.href} target="_blank" rel="noreferrer">
          {body}
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <div>{body}</div>
      )}
    </div>
  );
}

function ExperienceItem({ entry }: { entry: ExperienceEntry }): React.JSX.Element {
  return (
    <article className="experience-entry">
      <p className="eyebrow">{entry.period}</p>
      <div>
        <h3>{entry.role}</h3>
        <p className="experience-org">{entry.organisation}</p>
        <p>{entry.summary}</p>
        {entry.highlights.length > 0 ? (
          <ul>
            {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function DevIntro(): React.JSX.Element {
  return (
    <section className="dev-intro stage" id="dev-intro" aria-labelledby="dev-title">
      <div>
        <p className="eyebrow">Meet the dev</p>
        <h1 id="dev-title">{devName}</h1>
        <p className="dev-role">Product engineer / Lagos</p>
        {devIntro.map((paragraph) => <p className="positioning-copy" key={paragraph}>{paragraph}</p>)}
        <div className="positioning-actions">
          <Link className="action action-primary" href="/">Back to selected work</Link>
          <a className="action" href="mailto:mykdahunsi@gmail.com">Email me</a>
        </div>
      </div>
      <aside className="dev-aside">
        <div className="dev-portrait">
          <Image
            src={`${basePath}/meet-dev.jpg`}
            alt={devName}
            width={1221}
            height={1221}
            priority
          />
        </div>
        <div className="dev-capabilities" aria-label="Technical range">
          <p className="eyebrow">Technical range</p>
          <dl>
            {capabilities.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </section>
  );
}

function Achievements(): React.JSX.Element {
  return (
    <section className="dev-milestones" id="achievements" aria-labelledby="achievements-title">
      <header className="section-heading">
        <p className="eyebrow">01 / Achievements</p>
        <h2 id="achievements-title">A record that was judged in public.</h2>
      </header>
      <div className="milestone-list">
        {milestones.map((milestone) => <MilestoneEntry key={milestone.detail} milestone={milestone} />)}
      </div>
    </section>
  );
}

function Experience(): React.JSX.Element {
  return (
    <section className="dev-experience" id="experience" aria-labelledby="experience-title">
      <header className="section-heading">
        <p className="eyebrow">02 / Experience</p>
        <h2 id="experience-title">How the work actually gets made.</h2>
      </header>
      <div className="experience-list">
        {experience.map((entry) => <ExperienceItem key={entry.role} entry={entry} />)}
      </div>
    </section>
  );
}

function Socials(): React.JSX.Element {
  return (
    <section className="contact-section" id="socials" aria-labelledby="socials-title">
      <div>
        <p className="eyebrow">03 / Socials</p>
        <h2 id="socials-title">Find me here.</h2>
        <p>Open to product engineering roles, collaborations, and technical products that need a clear path from idea to working system.</p>
      </div>
      <ContactLinks label="Social links" />
    </section>
  );
}

export default function DevProfile(): React.JSX.Element {
  return (
    <>
      <DevIntro />
      <Achievements />
      <Experience />
      <Socials />
    </>
  );
}
