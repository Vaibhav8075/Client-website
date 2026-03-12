const contacts = [
  { label: 'Email', value: 'business@karostartup.com', href: 'mailto:business@karostartup.com' },
  { label: 'Phone', value: '+91 9315194393', href: 'tel:+919315194393' },
  { label: 'Website', value: 'karostartup.com', href: 'https://karostartup.com' },
]

export default function CTA() {
  return (
    <section className="section" id="apply">
      <div className="container">
        <div className="cta-panel">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Final Call to Action
          </span>

          <h2 className="cta-title">
            Ready to pitch <span className="title-accent">your startup?</span>
          </h2>

          <p className="cta-copy">
            If you are building a serious business and want investor visibility, Karo Pitch should feel like the
            right next step. Apply now, enter the shortlist funnel, and move toward investor conversations with clarity.
          </p>

          <div className="btn-row">
            <a className="btn btn-primary" href="mailto:business@karostartup.com">
              Apply Now
            </a>
            <a className="btn btn-secondary" href="mailto:business@karostartup.com?subject=Karo%20Pitch%20Partnership">
              Partner With Us
            </a>
          </div>

          <div className="contact-row" style={{ marginTop: '18px' }}>
            {contacts.map(contact => (
              <a
                key={contact.label}
                className="contact-chip"
                href={contact.href}
                target={contact.href.startsWith('https') ? '_blank' : undefined}
                rel={contact.href.startsWith('https') ? 'noreferrer' : undefined}
              >
                <span>
                  <div className="contact-label">{contact.label}</div>
                  <strong>{contact.value}</strong>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
