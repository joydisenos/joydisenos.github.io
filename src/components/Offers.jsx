import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'
import { site } from '../data/site'

export default function Offers({ copy, onChoose }) {
  const choose = (item) => {
    if (onChoose) onChoose({ id: item.id, typeIndex: item.typeIndex })
    const target = document.getElementById('contact')
    if (!target) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <section id="offers" className="section offers" aria-labelledby="offers-title">
      <div className="container">
        <div className="offers-head">
          <SectionHead
            eyebrow={copy.eyebrow}
            title={copy.title}
            lead={copy.lead}
            id="offers-title"
          />
          <Reveal delay={110} className="offers-badge">
            <span className="status-dot" aria-hidden="true" />
            {copy.badge}
          </Reveal>
        </div>

        <div className="offers-grid">
          {copy.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 70} className="offer-card">
              <div className="offer-top">
                <span className="offer-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="offer-time">{item.time}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="offer-text">{item.text}</p>

              <ul className="offer-list">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <Icon name="check" size={14} />
                    {deliverable}
                  </li>
                ))}
              </ul>

              <p className="offer-best">
                <span>{copy.bestForLabel}</span> {item.bestFor}
              </p>

              <div className="offer-actions">
                <button type="button" className="btn btn--primary btn--sm" onClick={() => choose(item)}>
                  {copy.cta}
                  <Icon name="arrowRight" size={15} />
                </button>
                <a
                  className="offer-wa"
                  href={`${site.whatsapp}?text=${encodeURIComponent(copy.whatsappMessage + item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={16} />
                  {copy.whatsapp}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="offers-foot">
          <span className="offers-foot-title">{copy.extrasTitle}</span>
          <ul className="offers-extras">
            {copy.extras.map((extra) => (
              <li key={extra}>{extra}</li>
            ))}
          </ul>
          <p className="offers-note">
            <Icon name="sparkles" size={14} />
            {copy.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
