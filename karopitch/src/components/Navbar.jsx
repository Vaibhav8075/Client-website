import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Startups', href: '#startups' },
  { label: 'Investors', href: '#investors' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">K</span>
          <span className="brand-text">
            <span className="brand-kicker">by KaroStartup</span>
            <span className="brand-name">Karo Pitch</span>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(current => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(link => (
            <a
              key={link.href}
              className="nav-link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#apply" onClick={() => setOpen(false)}>
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  )
}
