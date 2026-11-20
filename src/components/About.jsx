import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'

export default function About({ copy }) {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-main">
            <SectionHead eyebrow={copy.eyebrow} title={copy.title} id="about-title" />
            <Reveal delay={90}>
              <p className="about-text">{copy.p1}</p>
              <p className="about-text">{copy.p2}</p>
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="about-quote">{copy.quote}</blockquote>
            </Reveal>

            <Reveal delay={220}>
              <div className="about-facts">
                <p className="about-facts-title">{copy.factsTitle}</p>
                <dl>
                  {copy.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <div className="about-aside">
            <div className="about-cards">
              {copy.cards.map((card, index) => (
                <Reveal key={card.title} delay={index * 80} className="about-card">
                  <span className="about-card-icon">
                    <Icon name={card.icon} size={20} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280} className="about-signature">
              <div className="signature-mark" aria-hidden="true">JV</div>
              <div>
                <strong>Joseph Vásquez</strong>
                <span>Full-Stack Developer</span>
              </div>
              <span className="signature-status" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
