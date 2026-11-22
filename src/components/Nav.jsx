import { useEffect, useState } from 'react'
import Icon from './Icon'

const sectionIds = ['about', 'offers', 'projects', 'stack', 'contact']

function LangSwitch({ lang, setLang, label }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className={lang === code ? 'is-active' : undefined}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav({ copy, lang, setLang, emailHref }) {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const top = window.scrollY
        const max = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(top > 12)
        setProgress(max > 0 ? Math.min(1, top / max) : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const elements = ['top', ...sectionIds].map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === 'top' ? '' : entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('menu-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = [
    { id: 'about', label: copy.nav.about },
    { id: 'offers', label: copy.nav.offers },
    { id: 'projects', label: copy.nav.projects },
    { id: 'stack', label: copy.nav.stack },
    { id: 'contact', label: copy.nav.contact },
  ]

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">JV</span>
          <span className="brand-text">
            <strong>Joseph Vásquez</strong>
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <nav className="nav-links" aria-label={copy.footer.navTitle}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LangSwitch lang={lang} setLang={setLang} label={copy.nav.switchLang} />

          <a className="btn btn--primary btn--sm nav-cta" href={emailHref}>
            {copy.nav.cta}
            <Icon name="arrowUpRight" size={15} />
          </a>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label={copy.footer.navTitle}>
          {links.map((link, index) => (
            <a key={link.id} href={`#${link.id}`} onClick={close}>
              <span className="mobile-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
              <Icon name="arrowRight" size={18} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <LangSwitch lang={lang} setLang={setLang} label={copy.nav.switchLang} />
          <a className="btn btn--primary btn--sm" href={emailHref} onClick={close}>
            {copy.nav.cta}
            <Icon name="arrowUpRight" size={15} />
          </a>
        </div>
      </div>
    </header>
  )
}
