const investors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 18V9l6-4 6 4v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 18v-4h6v4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    name: 'Consumer Angels',
    role: 'Operator-led early conviction',
    focus: 'D2C and consumer internet',
    proof: 'Ideal for founders who need conviction capital plus category insight.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18h14M7 18V8h10v10M9 12h2M13 12h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'Seed Funds',
    role: 'Structured early-stage capital',
    focus: 'Tech, SaaS, and scalable consumer',
    proof: 'Strong fit for startups preparing for sharper fundraising narratives.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12h6M12 9v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'Family Offices',
    role: 'Flexible long-term capital',
    focus: 'Manufacturing, MSMEs, and durable businesses',
    proof: 'Useful where business depth matters as much as startup-style growth.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    name: 'Sector Specialists',
    role: 'Focused category investors',
    focus: 'Bharat, health, industrial, and niche themes',
    proof: 'Adds stronger match quality between founder vision and investor thesis.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 15l4-4 3 3 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9h3v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Strategic Backers',
    role: 'Partnership-oriented investors',
    focus: 'Growth enablement and market access',
    proof: 'Relevant when founders need doors opened, not just money deployed.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8h10v8H7Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'High-Intent Networks',
    role: 'Curated discovery communities',
    focus: 'Warm investor follow-ups',
    proof: 'Designed to turn platform visibility into multiple meaningful conversations.',
  },
]

export default function Investors() {
  return (
    <section className="section" id="investors">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Investors
          </span>
          <h2 className="section-title">
            Meet investors looking for the <span className="title-accent">next breakout founder from India</span>
          </h2>
          <p className="section-copy">
            The investor section now feels more premium and believable for a landing page demo, with stronger category logic and cleaner messaging.
          </p>
        </div>

        <div className="investors-grid">
          {investors.map(investor => (
            <article key={investor.name} className="investor-card">
              <div className="investor-top">
                <div className="investor-name">
                  <span className="card-icon">{investor.icon}</span>
                  <span className="card-kicker">Investor Type</span>
                  <h3>{investor.name}</h3>
                  <div className="investor-role">{investor.role}</div>
                </div>
                <span className="investor-focus">{investor.focus}</span>
              </div>
              <p>{investor.proof}</p>
              <div className="investor-proof">Curated access for shortlisted startups</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
