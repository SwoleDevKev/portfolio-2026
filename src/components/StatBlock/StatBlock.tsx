import './stat-block.scss'

interface Props {
  number: string
  label: string
  accent?: 'primary' | 'secondary'
}

export default function StatBlock({ number, label, accent = 'primary' }: Props) {
  return (
    <div className={`stat-block stat-block--${accent}`}>
      <div className="stat-block__num">{number}</div>
      <div className="stat-block__label">{label}</div>
    </div>
  )
}
