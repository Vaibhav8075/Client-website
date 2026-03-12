const metrics = [
  { value: '5+', label: 'Years building startup storytelling trust' },
  { value: 'Thousands', label: 'Founder journeys and startup narratives' },
  { value: 'Large', label: 'Founder-facing community and reach' },
  { value: 'India-wide', label: 'Presence across metro and Bharat audiences' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/karo_startup_/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/karo-startup/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@karostartup/videos' },
  { label: 'X', href: 'https://x.com/karo_startup' },
  { label: 'Facebook', href: 'https://www.facebook.com/karostartup' },
]

export default function KaroStartupAbout() {
  return (
    <section className="section" id="karostartup">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            About KaroStartup
          </span>
          <h2 className="section-title">
            Powered by <span className="title-accent">KaroStartup&apos;s startup media credibility</span>
          </h2>
          <p className="section-copy">
            The brief makes KaroStartup an important trust layer. This section now explains that context more clearly
            and supports the premium positioning of the homepage.
          </p>
        </div>

        <div className="legacy-grid">
          {metrics.map(metric => (
            <article key={metric.label} className="legacy-metric">
              <strong>{metric.value}</strong>
              <div>{metric.label}</div>
            </article>
          ))}
        </div>

        <div className="legacy-panel" style={{ marginTop: '24px' }}>
          <div>
            <span className="legacy-kicker">Brand context</span>
            <h3 style={{ fontSize: '34px', fontWeight: 700, fontFamily: 'var(--font-display)', marginTop: '12px' }}>
              Karo Pitch feels stronger because it grows out of an existing founder ecosystem.
            </h3>
            <p>
              KaroStartup has spent years publishing founder stories and building startup visibility across India.
              Karo Pitch extends that trust into action by helping founders move from visibility to investor access.
            </p>
            <p>
              That connection is now clearer in both the copy and the overall design tone of the page.
            </p>
          </div>

          <div className="legacy-card">
            <div>
              <span className="card-kicker">Official channels</span>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '10px', fontFamily: 'var(--font-display)' }}>
                Explore the KaroStartup ecosystem
              </h3>
            </div>
            <div className="legacy-links">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  className="social-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
              <a className="social-link" href="https://karostartup.com" target="_blank" rel="noreferrer">
                karostartup.com
              </a>
            </div>
            <div className="legacy-note">
              This block gives the homepage more brand proof and makes the platform concept feel less speculative.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
