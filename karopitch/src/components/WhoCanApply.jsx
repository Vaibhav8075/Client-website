const sectors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8h12v10H6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8V6h6v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'D2C Brands',
    description: 'Consumer products, food, wellness, lifestyle, and digitally-native brands with category traction.',
    tag: 'Consumer-led growth',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 17c3-6 11-6 14 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15.5" cy="9" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Consumer Startups',
    description: 'Products and services solving everyday needs with clear user relevance and scalable demand.',
    tag: 'Mass-market opportunity',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19V9l7-4 7 4v10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 19v-4h6v4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'MSMEs',
    description: 'Operationally strong businesses that deserve better visibility, capital access, and strategic support.',
    tag: 'Real business depth',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9h6v6H9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'SaaS Startups',
    description: 'Software-led businesses building tools, platforms, and B2B products with repeatable expansion potential.',
    tag: 'Tech-enabled scale',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16M6 18v-6l3-2 3 2v6M12 10l3-2 3 2v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
    title: 'Manufacturing Businesses',
    description: 'Production-focused ventures building durable value in supply chains, exports, and industrial categories.',
    tag: 'Execution-heavy strength',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s6-3.5 6-9a6 6 0 1 0-12 0c0 5.5 6 9 6 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Bharat-Focused Startups',
    description: 'Founders building for Tier-2, Tier-3, vernacular, or deeply regional India with meaningful insight.',
    tag: 'Tier-2 and Tier-3 relevance',
  },
]

const criteria = [
  'Early-stage founders with a credible operating business',
  'Indian startups or companies with real demand signals',
  'Founders looking for investor access, mentorship, and visibility',
  'Bharat builders who want a better route into the startup ecosystem',
]

export default function WhoCanApply() {
  return (
    <section className="section" id="who-can-apply">
      <div className="container sectors-layout">
        <aside className="sectors-summary">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Who Can Apply
          </span>
          <div className="section-header">
            <h2 className="section-title">
              Designed for <span className="title-accent">serious founders across Bharat</span>
            </h2>
            <p className="section-copy">
              This section now works as a clear qualification filter while still keeping the tone premium and welcoming.
            </p>
          </div>

          <div className="checklist">
            {criteria.map(item => (
              <div key={item} className="checklist-item">
                <span className="checkmark">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: '28px' }}>
            <a className="btn btn-primary" href="#apply">
              Start Application
            </a>
          </div>
        </aside>

        <div className="sectors-grid">
          {sectors.map(sector => (
            <article key={sector.title} className="sector-card">
              <span className="card-icon card-icon-light">{sector.icon}</span>
              <span className="card-kicker">Eligible Category</span>
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
              <div className="sector-tag">{sector.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
