const metrics = [
  { value: 'Founder-first', label: 'Sharper access to investors, visibility, and momentum.' },
  { value: 'Bharat-led', label: 'Designed for founders outside narrow metro circles.' },
  { value: 'Curated', label: 'Clear shortlist and investor-facing pitch structure.' },
  { value: 'Premium', label: 'A warmer, more editorial brand presence for the demo.' },
]

const founderTracks = [
  'D2C and consumer brands',
  'MSMEs and manufacturing',
  'SaaS and tech ventures',
]

const investorSignals = [
  'Shortlist-led quality filter',
  'Live pitch room format',
  'Post-event investor follow-ups',
]

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy-block">
          <div className="hero-lead">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Applications Open for Season 1
            </span>
            <h1 className="hero-title">
              Pitch Your Startup to <span className="title-accent">India&apos;s Top Investors</span>
            </h1>
            <p className="hero-copy">
              Karo Pitch is a modern investor discovery platform for early-stage founders across India.
              <strong> It positions Bharat entrepreneurs in a sharper, more credible fundraising environment.</strong>
            </p>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#apply">
              Apply to Pitch
            </a>
            <a className="btn btn-secondary" href="#startups">
              Explore Startups
            </a>
          </div>

          <div className="hero-metrics">
            {metrics.map(metric => (
              <article key={metric.value} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-grid">
            <div className="hero-panel-header">
              <span className="panel-badge">Investor Discovery Room</span>
              <span className="panel-score">
                <strong>4-Step</strong>
                <span>application to pitch flow</span>
              </span>
            </div>

            <div className="hero-spotlight">
              <span className="card-kicker">Warm, premium, focused</span>
              <h3>Where startup storytelling becomes investor action.</h3>
              <p>
                This demo now presents Karo Pitch as an elevated platform for founders building real businesses,
                not another generic event website.
              </p>
            </div>

            <div className="hero-lists">
              <div className="hero-list">
                <div className="hero-list-label">Founder Fit</div>
                <div className="hero-list-items">
                  {founderTracks.map(item => (
                    <div key={item} className="hero-list-item">
                      <span>{item}</span>
                      <strong>Apply</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-list">
                <div className="hero-list-label">Investor Signal</div>
                <div className="hero-list-items">
                  {investorSignals.map(item => (
                    <div key={item} className="hero-list-item">
                      <span>{item}</span>
                      <strong>Active</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
