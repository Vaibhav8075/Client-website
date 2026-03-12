const pillars = [
  {
    title: 'What Karo Pitch Is',
    description:
      'A curated startup pitch platform where selected founders present directly to investors through a structured, premium format.',
  },
  {
    title: 'Why It Was Built',
    description:
      'Thousands of promising founders are building outside major startup hubs, but many still lack visibility, warm access, and capital pathways.',
  },
  {
    title: 'Who It Supports',
    description:
      'Founders from Tier-2, Tier-3 cities and Bharat who are building real businesses in D2C, MSMEs, manufacturing, consumer, and technology sectors.',
  },
  {
    title: 'What It Unlocks',
    description:
      'Investor introductions, sharper discovery, stronger storytelling, and a more credible route from traction to fundraising conversations.',
  },
]

const stats = [
  { value: '5+', label: 'years of KaroStartup trust and visibility' },
  { value: 'Thousands', label: 'of founder stories and startup narratives' },
  { value: 'India-wide', label: 'community relevance across Bharat markets' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Karo Pitch
            </span>
            <h2 className="section-title">
              Closing the <span className="title-accent">access gap</span> for India&apos;s overlooked founders
            </h2>
            <p className="section-copy">
              Karo Pitch should feel like a serious bridge between founder ambition and investor access.
              It is not just an event page. It is a platform narrative built around visibility, trust, and momentum.
            </p>
            <p className="section-copy">
              The homepage now explains that mission with more clarity and a stronger premium tone, while still
              staying approachable for early-stage founders.
            </p>
          </div>

          <div className="story-stats">
            {stats.map(stat => (
              <div key={stat.label} className="story-stat">
                <span className="story-stat-value">{stat.value}</span>
                <span className="story-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="story-grid">
          {pillars.map(pillar => (
            <article key={pillar.title} className="story-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
