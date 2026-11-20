import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import Icon from './Icon'
import { site } from '../data/site'

export default function Contact({ copy }) {
  const [form, setForm] = useState({ name: '', email: '', type: '0', message: '' })
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const projectType = copy.form.types[Number(form.type)] ?? copy.form.types[0]
    const subject = `${copy.form.subject} — ${projectType}`
    const body = [
      `${copy.form.name}: ${form.name}`,
      `${copy.form.email}: ${form.email}`,
      `${copy.form.type}: ${projectType}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('opening')
    window.setTimeout(() => setStatus(''), 4000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      const field = document.createElement('textarea')
      field.value = site.email
      field.setAttribute('readonly', '')
      field.style.position = 'absolute'
      field.style.left = '-9999px'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <SectionHead
              eyebrow={copy.eyebrow}
              title={copy.title}
              lead={copy.lead}
              id="contact-title"
            />

            <Reveal delay={100} className="contact-availability">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>{copy.availability}</strong>
                <span>{copy.form.response}</span>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <ul className="contact-methods">
                <li>
                  <a href={`mailto:${site.email}`} className="contact-method">
                    <span className="contact-method-icon"><Icon name="mail" size={18} /></span>
                    <span className="contact-method-text">
                      <small>{copy.methods.email}</small>
                      <strong>{site.email}</strong>
                    </span>
                    <Icon name="arrowUpRight" size={16} className="contact-method-arrow" />
                  </a>
                  <button type="button" className="contact-copy-btn" onClick={copyEmail} aria-live="polite">
                    <Icon name={copied ? 'check' : 'copy'} size={14} />
                    {copied ? copy.methods.copied : copy.methods.copy}
                  </button>
                </li>
                <li>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="contact-method-icon"><Icon name="whatsapp" size={18} /></span>
                    <span className="contact-method-text">
                      <small>{copy.methods.whatsapp}</small>
                      <strong>{site.phone}</strong>
                    </span>
                    <Icon name="arrowUpRight" size={16} className="contact-method-arrow" />
                  </a>
                </li>
                <li>
                  <div className="contact-method contact-method--static">
                    <span className="contact-method-icon"><Icon name="globe" size={18} /></span>
                    <span className="contact-method-text">
                      <small>{copy.methods.location}</small>
                      <strong>{site.location}</strong>
                    </span>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140} className="contact-form-wrap">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">{copy.form.name}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={copy.form.namePlaceholder}
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">{copy.form.email}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={copy.form.emailPlaceholder}
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="type">{copy.form.type}</label>
                <div className="select-wrap">
                  <select id="type" name="type" value={form.type} onChange={update('type')}>
                    {copy.form.types.map((type, index) => (
                      <option key={type} value={String(index)}>{type}</option>
                    ))}
                  </select>
                  <Icon name="arrowRight" size={16} className="select-arrow" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">{copy.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={copy.form.messagePlaceholder}
                  required
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                {copy.form.submit}
                <Icon name="arrowUpRight" size={17} />
              </button>

              <p className="form-note">{copy.form.note}</p>
              <p className="form-status" role="status">
                {status === 'opening' ? copy.form.opening : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
