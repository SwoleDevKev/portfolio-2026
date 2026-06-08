import { useEffect, useRef, useState } from 'react'
import './phone-mockup.scss'

interface Props {
  video?: string
  poster?: string
}

export default function PhoneMockup({ video, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el || !video) return
    if (isPlaying) {
      el.currentTime = 0
      el.play().catch(() => {})
    } else {
      el.pause()
      el.currentTime = 0
    }
  }, [isPlaying, video])

  return (
    <div className="iphone" onMouseEnter={() => setIsPlaying(prev => !prev)}>
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
                preload="none"
                loop
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
