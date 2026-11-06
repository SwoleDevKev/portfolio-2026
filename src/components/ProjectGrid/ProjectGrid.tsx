import { useCallback, useEffect, useRef, useState } from 'react'
import type { Project } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

interface Props { projects: Project[] }

// Must match the single-column breakpoint of .work__grid in home.scss
const SINGLE_COLUMN_QUERY = '(max-width: 960px)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

function usePageVisible() {
  const [visible, setVisible] = useState(() => !document.hidden)
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])
  return visible
}

/**
 * Decides which project preview is playing:
 * - Desktop (3 columns): one card at a time, rotating after each full play-through.
 *   Hovering a card takes over; leaving resumes rotation from the next card.
 * - Single column: whichever card is most visible in the viewport plays (looping).
 * - Reduced motion: nothing autoplays; hover still plays on desktop.
 * - Nothing plays while the grid is off-screen or the tab is hidden.
 */
export default function ProjectGrid({ projects }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const isSingleColumn = useMediaQuery(SINGLE_COLUMN_QUERY)
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const pageVisible = usePageVisible()

  const [gridInView, setGridInView] = useState(false)
  // Start on the first card that has a video; nextPlayable() keeps it on playable cards after that
  const [rotationIndex, setRotationIndex] = useState(() => Math.max(0, projects.findIndex((p) => p.video)))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mostVisibleIndex, setMostVisibleIndex] = useState<number | null>(null)

  const playable = projects.map((p) => Boolean(p.video))

  // Desktop: is the grid on screen?
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setGridInView(entry.isIntersecting),
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Single column: track which card is most visible
  useEffect(() => {
    if (!isSingleColumn) return
    const ratios = new Map<Element, number>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target, e.intersectionRatio))
        let best: number | null = null
        let bestRatio = 0.5 // a card must be at least half visible to play
        cardRefs.current.forEach((el, i) => {
          const r = el ? ratios.get(el) ?? 0 : 0
          if (playable[i] && r >= bestRatio) { best = i; bestRatio = r }
        })
        setMostVisibleIndex(best)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    cardRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSingleColumn, projects])

  const nextPlayable = useCallback(
    (from: number) => {
      for (let step = 1; step <= projects.length; step++) {
        const i = (from + step) % projects.length
        if (projects[i].video) return i
      }
      return from
    },
    [projects],
  )

  const advance = useCallback(
    (fromIndex: number) => {
      // Only the rotating card's end/error should move the rotation along
      if (hoveredIndex !== null || fromIndex !== rotationIndex) return
      setRotationIndex(nextPlayable(fromIndex))
    },
    [hoveredIndex, rotationIndex, nextPlayable],
  )

  const handleHoverEnd = useCallback(
    (index: number) => {
      setHoveredIndex((current) => (current === index ? null : current))
      setRotationIndex(nextPlayable(index))
    },
    [nextPlayable],
  )

  let activeIndex: number | null = null
  if (pageVisible) {
    if (isSingleColumn) {
      activeIndex = reducedMotion ? null : mostVisibleIndex
    } else if (hoveredIndex !== null) {
      activeIndex = hoveredIndex
    } else if (gridInView && !reducedMotion) {
      activeIndex = rotationIndex
    }
  }

  // Desktop rotation plays each video once; hover and mobile loop
  const loopActive = isSingleColumn || hoveredIndex !== null

  return (
    <div className="work__grid" ref={gridRef}>
      {projects.map((p, i) => (
        <ProjectCard
          key={p.id}
          ref={(el) => { cardRefs.current[i] = el }}
          project={p}
          isActive={activeIndex === i}
          loop={loopActive}
          onPreviewEnd={() => advance(i)}
          onHoverStart={isSingleColumn ? undefined : () => setHoveredIndex(i)}
          onHoverEnd={isSingleColumn ? undefined : () => handleHoverEnd(i)}
        />
      ))}
    </div>
  )
}
