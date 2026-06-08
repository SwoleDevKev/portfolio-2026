import './contact-links.scss'

interface Link {
  label: string
  href: string
  external?: boolean
}

interface Props { links: Link[] }

export default function ContactLinks({ links }: Props) {
  return (
    <div className="contact-links">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="contact-links__item"
          {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {l.label}
          <span className="contact-links__arrow">↗</span>
        </a>
      ))}
    </div>
  )
}
