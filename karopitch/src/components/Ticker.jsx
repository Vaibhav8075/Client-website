const items = [
  'Bharat founders',
  'D2C brands',
  'MSMEs',
  'Manufacturing',
  'Consumer startups',
  'SaaS startups',
  'Investor access',
  'Curated pitch events',
]

export default function Ticker() {
  const loop = [...items, ...items]

  return (
    <div className="ticker" aria-label="Karo Pitch focus areas">
      <div className="ticker-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker-pill">
            <span>{item}</span>
            <span className="ticker-separator" />
          </span>
        ))}
      </div>
    </div>
  )
}
