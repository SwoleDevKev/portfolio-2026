import { useInView } from 'react-intersection-observer'
import type { ReactNode, CSSProperties } from 'react'
import './fade-in.scss'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function FadeIn({ children, delay = 0, className = '', style }: FadeInProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`fade-in${inView ? ' fade-in--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
