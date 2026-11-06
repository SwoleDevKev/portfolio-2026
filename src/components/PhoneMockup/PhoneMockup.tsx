import { useEffect, useRef } from 'react'
import './phone-mockup.scss'

interface Props {
  video?: string
  poster?: string
  /** Controlled by the parent: true = play from the start, false = pause and reset */
  playing?: boolean
  loop?: boolean
  /** Fires when a non-looping play-through finishes, or the video fails to play */
  onEnded?: () => void
}

export default function PhoneMockup({ video, poster, playing = false, loop = false, onEnded }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Latest callback without restarting the play effect each render
  const onEndedRef = useRef(onEnded)
  useEffect(() => { onEndedRef.current = onEnded })

  useEffect(() => {
    const el = videoRef.current
    if (!el || !video) return
    if (playing) {
      el.currentTime = 0
      // Autoplay can be blocked or the format unsupported; skip to the next card instead of stalling
      el.play().catch((err: DOMException) => {
        if (err.name !== 'AbortError') onEndedRef.current?.()
      })
    } else {
      el.pause()
      el.currentTime = 0
    }
  }, [playing, video])

  return (
    <div className="iphone">
      <div className="iphone__body">
        <div className="iphone__btn iphone__btn--silent" />
        <div className="iphone__btn iphone__btn--vol-up" />
        <div className="iphone__btn iphone__btn--vol-down" />
        <div className="iphone__btn iphone__btn--power" />
        <div className="iphone__screen">
          <div className="iphone__viewport">
            {video ? (
              <video
                ref={videoRef}
                className="iphone__video"
                src={video}
                poster={poster}
                muted
                playsInline
                preload="metadata"
                loop={loop}
                onEnded={() => onEndedRef.current?.()}
                onError={() => playing && onEndedRef.current?.()}
                aria-hidden="true"
              />
            ) : (
              <div className="iphone__placeholder" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
