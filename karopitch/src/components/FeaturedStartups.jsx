const startups = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17V9l5-3 5 3v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 17v-4h4v4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    name: 'Mitti Works',
    category: 'D2C',
    city: 'Jaipur',
    description:
      'A handcrafted home brand connecting regional artisans to modern urban buyers through premium design and repeatable distribution.',
    stage: 'Pre-Seed',
    ask: 'INR 50L',
    traction: '200+ artisans onboarded',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19c4-3 6-6.3 6-10a6 6 0 0 0-12 0c0 3.7 2 7 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'FarmDirect',
    category: 'Agri-tech',
    city: 'Nashik',
    description:
      'A market access platform helping farmers sell to restaurants and retailers with stronger pricing and smoother fulfillment.',
    stage: 'Seed',
    ask: 'INR 1.5Cr',
    traction: '3,000+ farmers engaged',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16M6 18v-6l3-2 3 2v6M12 10l3-2 3 2v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
    name: 'QuickStitch',
    category: 'Manufacturing',
    city: 'Surat',
    description:
      'A production operations platform connecting garment manufacturers to demand with better coordination and tracking.',
    stage: 'Pre-Seed',
    ask: 'INR 80L',
    traction: 'Growing B2B order network',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7h8M9 4h6M12 7v13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 12c0 1.7 1.4 3 3 3s3-1.3 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'VaidiLocal',
    category: 'Health and wellness',
    city: 'Varanasi',
    description:
      'An Ayurveda-led brand sourcing through regional supply chains and growing with trust, content, and repeat demand.',
    stage: 'Seed',
    ask: 'INR 1Cr',
    traction: 'Multi-state product footprint',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9h6v6H9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    name: 'SkillBharat',
    category: 'Ed-tech SaaS',
    city: 'Indore',
    description:
      'A vernacular upskilling platform for blue-collar workers in Tier-2 and Tier-3 markets with deep Bharat relevance.',
    stage: 'Seed',
    ask: 'INR 2Cr',
    traction: '25K learners reached',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 18V9l6-4 6 4v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 13h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'IronCraft',
    category: 'Industrial',
    city: 'Ludhiana',
    description:
      'A precision manufacturing business supplying export-grade components and building stronger global capability from India.',
    stage: 'Series A',
    ask: 'INR 3Cr',
    traction: 'Strong production capacity',
  },
]

export default function FeaturedStartups() {
  return (
    <section className="section" id="startups">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Featured Startups
          </span>
          <h2 className="section-title">
            Example businesses that fit the <span className="title-accent">Karo Pitch vision</span>
          </h2>
          <p className="section-copy">
            These cards now feel cleaner, more editorial, and more investor-aware while still working as demo content.
          </p>
        </div>

        <div className="startup-grid">
          {startups.map((startup, index) => (
            <article key={startup.name} className={`startup-card ${index === 0 ? 'startup-card-featured' : ''}`}>
              <div className="startup-top">
                <div>
                  <span className="card-icon">{startup.icon}</span>
                  <div className="startup-meta">{startup.category}</div>
                  <h3>{startup.name}</h3>
                </div>
                <span className="startup-stage">{startup.stage}</span>
              </div>

              <div className="startup-subline">
                <span>{startup.city}, India</span>
                <span>Investor-facing demo profile</span>
              </div>

              <p>{startup.description}</p>

              <div className="startup-bottom">
                <div>
                  <div className="startup-caption">Raising</div>
                  <div className="startup-value">{startup.ask}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="startup-caption">Traction</div>
                  <div className="startup-tag">{startup.traction}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: '28px', justifyContent: 'center' }}>
          <a className="btn btn-tertiary" href="#apply">
            Join These Startups
          </a>
        </div>
      </div>
    </section>
  )
}
