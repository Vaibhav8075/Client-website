const steps = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10l3 3v13H4V4h3Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10h8M8 14h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Apply with your pitch deck',
    description:
      'Submit your company story, traction, market, and fundraising ask through a clean founder application flow.',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Get shortlisted by KaroStartup',
    description:
      'Applications are reviewed for readiness, clarity, category fit, and relevance for the investor room.',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h14v9H8l-3 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 10h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Pitch live to investors',
    description:
      'Selected founders present in a curated pitch environment designed to create focused discussions, not noise.',
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16l5-5 4 4 7-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Raise funding and scale',
    description:
      'Investors continue with follow-up meetings, diligence, and opportunities for capital or strategic support.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            How It Works
          </span>
          <h2 className="section-title">
            A simple <span className="title-accent">4-step process</span> with investor-grade clarity
          </h2>
          <p className="section-copy">
            The user flow is now tighter and easier to understand. That matters because founders need confidence
            and investors need evidence of structure.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.number} className={`process-card process-card-${index + 1}`}>
              <span className="card-icon">{step.icon}</span>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
