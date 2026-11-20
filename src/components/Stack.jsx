import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Stack({ copy }) {
  return (
    <section id="stack" className="section stack" aria-labelledby="stack-title">
      <div className="container">
        <div className="stack-grid">
          <div className="stack-intro">
            <SectionHead
              eyebrow={copy.eyebrow}
              title={copy.title}
              lead={copy.lead}
              id="stack-title"
            />
            <Reveal delay={140}>
              <p className="stack-footnote">{copy.footnote}</p>
            </Reveal>
          </div>

          <div className="stack-groups">
            {copy.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 60} className="stack-group">
                <h3>
                  <span className="stack-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {group.title}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
