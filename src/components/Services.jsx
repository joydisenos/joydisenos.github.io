import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'

export default function Services({ copy }) {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          eyebrow={copy.eyebrow}
          title={copy.title}
          lead={copy.lead}
          id="services-title"
        />

        <div className="services-grid">
          {copy.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} className="service-card">
              <div className="service-top">
                <span className="service-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="service-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="tags tags--muted">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
