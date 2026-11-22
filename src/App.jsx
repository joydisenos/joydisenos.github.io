import { useEffect, useState } from 'react'
import { content } from './data/content'
import { site } from './data/site'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Offers from './components/Offers'
import Process from './components/Process'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // localStorage puede estar bloqueado; usamos español por defecto.
  }
  return 'es'
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const [interest, setInterest] = useState(null)
  const copy = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = copy.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.meta.description)
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      // Sin persistencia si el navegador bloquea el almacenamiento.
    }
  }, [lang, copy])

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <Nav
        copy={{ nav: copy.nav, footer: copy.footer }}
        lang={lang}
        setLang={setLang}
        emailHref={`mailto:${site.email}`}
      />

      <main id="main">
        <Hero copy={copy.hero} />
        <Marquee copy={copy.marquee} />
        <About copy={copy.about} />
        <Offers copy={copy.offers} onChoose={setInterest} />
        <Projects copy={copy.projects} lang={lang} />
        <Process copy={copy.process} />
        <Stack copy={copy.stack} />
        <Contact copy={copy.contact} interest={interest} />
      </main>

      <Footer copy={copy.footer} nav={copy.nav} />
    </>
  )
}
