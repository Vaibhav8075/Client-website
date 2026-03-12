const links = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Investors', href: '#investors' },
  { label: 'Startups', href: '#startups' },
  { label: 'Apply', href: '#apply' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-name">Karo Pitch</div>
          <div className="footer-note">An initiative by KaroStartup for investor access, founder visibility, and Bharat entrepreneurship.</div>
        </div>

        <div className="footer-links">
          {links.map(link => (
            <a key={link.href} className="footer-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
