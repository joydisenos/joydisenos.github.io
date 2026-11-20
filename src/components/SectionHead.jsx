import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, lead, align = 'left', id }) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </Reveal>
  )
}
