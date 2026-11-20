import Icon from './Icon'
import { site } from '../data/site'

const links = [
  { id: 'about', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'services', key: 'services' },
  { id: 'stack', key: 'stack' },
  { id: 'contact', key: 'contact' },
]

export default function Footer({ copy, nav }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">JV</span>
              <span className="brand-text">
                <strong>Joseph Vásquez</strong>
                <small>Full-Stack Developer</small>
              </span>
            </a>
            <p>{copy.tagline}</p>
            <a className="footer-github" href={site.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={17} />
              {copy.code}
              <Icon name="arrowUpRight" size={14} />
            </a>
          </div>

          <nav className="footer-nav" aria-label={copy.navTitle}>
            <h3>{copy.navTitle}</h3>
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`}>{nav[link.key]}</a>
            ))}
          </nav>

          <div className="footer-contact">
            <h3>{copy.contactTitle}</h3>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}</a>
            <span>{site.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {site.year} Joseph Vásquez. {copy.rights}</p>
          <p>{copy.built} <span className="footer-dot" aria-hidden="true" /> {copy.madeBy}</p>
          <a href="#top" className="footer-top">
            <Icon name="arrowUp" size={15} />
            {copy.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
