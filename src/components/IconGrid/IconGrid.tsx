import type { StackItem } from '../../data/stack'
import './icon-grid.scss'

interface Props { items: StackItem[] }

export default function IconGrid({ items }: Props) {
  return (
    <div className="icon-grid">
      {items.map((item) => (
        <div key={item.name} className="icon-grid__cell">
          <img src={item.icon} alt={item.name} className="icon-grid__icon" />
          <span className="icon-grid__name">{item.name}</span>
        </div>
      ))}
    </div>
  )
}
