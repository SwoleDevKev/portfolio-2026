import { useState } from 'react'
import type { Project } from '../../data/projects'
import PhoneMockup from '../PhoneMockup/PhoneMockup'
import './project-card.scss'

interface Props { project: Project }

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
    <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CopyIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="11" height="11">
    <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

function CredentialRow({ role, email, password }: { role: string; email: string; password: string }) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (value: string, field: string) => {
    navigator.clipboard.writeText(value)
    setCopied(field)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="project-card__cred-row">
      <span className="project-card__cred-role">{role}</span>
      <div className="project-card__cred-fields">
        <button
          className={`project-card__cred-field${copied === 'email' ? ' project-card__cred-field--copied' : ''}`}
          onClick={() => copy(email, 'email')}
          title="Copy email"
        >
          <span>{email}</span>
          <CopyIcon />
        </button>
        <button
          className={`project-card__cred-field${copied === 'password' ? ' project-card__cred-field--copied' : ''}`}
          onClick={() => copy(password, 'password')}
          title="Copy password"
        >
          <span>{password}</span>
          <CopyIcon />
        </button>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }: Props) {
  const { name, badges, description, tech, url, credentials, video, poster } = project

  return (
    <div
      className="project-card"
    >
      <PhoneMockup video={video} poster={poster}   />


      <div className="project-card__info">
        <div className="project-card__header">
          <h3 className="project-card__name">{name}</h3>
          <div className="project-card__badges">
            {badges.map((b, i) => (
              <span key={i} className={`project-card__badge${b.type !== 'default' ? ` project-card__badge--${b.type}` : ''}`}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <p className="project-card__desc">{description}</p>

        <div className="project-card__tech">
          {tech.map((t) => <span key={t} className="project-card__tag">{t}</span>)}
        </div>

        {credentials && credentials.length > 0 && (
          <div className="project-card__credentials">
            <p className="project-card__cred-label">Demo credentials</p>
            {credentials.map((c, i) => <CredentialRow key={i} {...c} />)}
          </div>
        )}

        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Visit site <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  )
}
