import { useRef, useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import { site } from '../data/site'

export default function Hero({ copy }) {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const snippet = `const joseph = {
  role: 'Full-Stack Developer',
  stack: ['PHP', 'Laravel', 'WordPress'],
  focus: ['UI', 'performance'],
  location: 'Remote · Venezuela',
  available: true,
}`

  const onPointerMove = (event) => {
    const node = sectionRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    node.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="top" className="hero" ref={sectionRef} onPointerMove={onPointerMove}>
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              {copy.badge}
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1>
              <span>{copy.titleTop}</span>
              <span className="gradient-text">{copy.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-lead">{copy.lead}</p>
          </Reveal>

          <Reveal delay={210}>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projects">
                {copy.primary}
                <Icon name="arrowRight" size={17} />
              </a>
              <a className="btn btn--ghost" href={site.cv} download>
                <Icon name="download" size={17} />
                {copy.secondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <ul className="hero-meta" aria-label={copy.badge}>
              <li><Icon name="terminal" size={15} /> PHP · Laravel · WordPress</li>
              <li><Icon name="globe" size={15} /> Venezuela · 100% Remote</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} className="hero-visual">
          <div className="code-card">
            <div className="code-top">
              <span className="code-dots" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="code-file">{copy.codeLabel}</span>
              <button type="button" className="code-copy" onClick={onCopy} aria-label={copy.copyCode}>
                <Icon name={copied ? 'check' : 'copy'} size={15} />
                <span>{copied ? copy.copied : copy.copyCode}</span>
              </button>
            </div>

            <div className="code-body">
              <div className="code-line"><span className="ln">1</span><span className="lc"><span className="tok-key">const</span> <span className="tok-var">joseph</span> <span className="tok-op">=</span> <span className="tok-punc">{'{'}</span></span></div>
              <div className="code-line"><span className="ln">2</span><span className="lc indent"><span className="tok-prop">role</span><span className="tok-punc">:</span> <span className="tok-str">'Full-Stack Developer'</span><span className="tok-punc">,</span></span></div>
              <div className="code-line"><span className="ln">3</span><span className="lc indent"><span className="tok-prop">stack</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">'PHP'</span><span className="tok-punc">,</span> <span className="tok-str">'Laravel'</span><span className="tok-punc">,</span> <span className="tok-str">'WordPress'</span><span className="tok-punc">],</span></span></div>
              <div className="code-line"><span className="ln">4</span><span className="lc indent"><span className="tok-prop">focus</span><span className="tok-punc">:</span> <span className="tok-punc">[</span><span className="tok-str">'UI'</span><span className="tok-punc">,</span> <span className="tok-str">'performance'</span><span className="tok-punc">],</span></span></div>
              <div className="code-line"><span className="ln">5</span><span className="lc indent"><span className="tok-prop">location</span><span className="tok-punc">:</span> <span className="tok-str">'Remote · Venezuela'</span><span className="tok-punc">,</span></span></div>
              <div className="code-line"><span className="ln">6</span><span className="lc indent"><span className="tok-prop">available</span><span className="tok-punc">:</span> <span className="tok-bool">true</span><span className="tok-punc">,</span></span></div>
              <div className="code-line"><span className="ln">7</span><span className="lc"><span className="tok-punc">{'}'}</span><span className="tok-punc">;</span><span className="code-caret" aria-hidden="true" /></span></div>
            </div>

            <div className="code-foot">
              <span className="code-status">
                <span className="status-dot" aria-hidden="true" />
                {copy.codeStatus}
              </span>
              <span className="code-env">deploy: github actions</span>
            </div>
          </div>

          <span className="float-chip float-chip--a" aria-hidden="true">Laravel</span>
          <span className="float-chip float-chip--b" aria-hidden="true">
            <Icon name="sparkles" size={14} /> UI / Performance
          </span>
        </Reveal>
      </div>

      <div className="container">
        <Reveal delay={120}>
          <dl className="hero-stats">
            {copy.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
