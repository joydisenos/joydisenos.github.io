import Reveal from './Reveal'

export default function Marquee({ copy }) {
  const items = [...copy.items, ...copy.items]

  return (
    <section className="marquee-section" aria-label={copy.label}>
      <div className="marquee-fade" aria-hidden="true" />
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item" aria-hidden={index >= copy.items.length}>
              <span className="marquee-dot" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
