import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Process({ copy }) {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="container">
        <div className="process-grid">
          <SectionHead
            eyebrow={copy.eyebrow}
            title={copy.title}
            id="process-title"
          />

          <ol className="process-list">
            {copy.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 80} className="process-step">
                <span className="process-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
