import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'
import { projects } from '../data/site'

const filters = ['all', 'saas', 'web', 'corporate']

export default function Projects({ copy, lang }) {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-head">
          <SectionHead
            eyebrow={copy.eyebrow}
            title={copy.title}
            lead={copy.lead}
            id="projects-title"
          />
          <Reveal delay={120} className="projects-count">
            <strong>{String(projects.length).padStart(2, '0')}</strong>
            <span>{copy.count}</span>
          </Reveal>
        </div>

        <Reveal delay={80} className="projects-toolbar">
          <div className="filters" role="group" aria-label={copy.eyebrow}>
            {filters.map((key) => (
              <button
                key={key}
                type="button"
                className={filter === key ? 'is-active' : undefined}
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
              >
                {copy.filters[key]}
              </button>
            ))}
          </div>
          <span className="toolbar-note" aria-hidden="true">
            <Icon name="terminal" size={14} /> filter: {filter}
          </span>
        </Reveal>

        <div className="projects-grid" key={filter}>
          {list.map((project, index) => {
            const l10n = project[lang]
            const wide = project.featured && list.length % 2 === 1
            return (
              <Reveal
                as="article"
                key={project.id}
                delay={index * 70}
                className={`project-card${wide ? ' project-card--wide' : ''}`}
              >
                <a
                  className="project-media"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.visit}: ${project.name}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} — ${l10n.tagline}`}
                    width="1100"
                    height="688"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-overlay">
                    <Icon name="arrowUpRight" size={16} />
                    {copy.visit}
                  </span>
                </a>

                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-cat">{copy.filters[project.category]}</span>
                    <span className="project-domain">
                      {project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    </span>
                  </div>

                  <h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name}
                      <Icon name="arrowUpRight" size={16} />
                    </a>
                  </h3>
                  <p className="project-tagline">{l10n.tagline}</p>
                  <p className="project-desc">{l10n.description}</p>

                  <div className="project-foot">
                    <ul className="tags" aria-label="Stack">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <p className="project-role">
                      <span>{copy.role}</span>
                      {l10n.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={100}>
          <p className="projects-note">
            <Icon name="globe" size={14} />
            {copy.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
