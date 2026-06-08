import './service-card.scss'

interface Props {
  num: string
  title: string
  description: string
  tags: string[]
}

export default function ServiceCard({ num, title, description, tags }: Props) {
  return (
    <div className="service-card">
      <div className="service-card__num">{num}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <div className="service-card__tags">
        {tags.map((t) => <span key={t} className="service-card__tag">{t}</span>)}
      </div>
    </div>
  )
}
