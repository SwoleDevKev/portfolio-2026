import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './nav.scss'

export default function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isCareer = pathname === '/career'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    if (target.startsWith('#')) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
      navigate(target)
    }
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>

      {isCareer ? (
        <a href="/" onClick={(e) => go(e, '/')} className="nav__back">
          ← Portfolio
        </a>
      ) : (
        <a href='#hero'><span className="nav__logo">Swoledevkev</span></a>
      )}

      <ul className="nav__links">
        {isCareer ? (
          <>
            <li><a href="#c-stack"   onClick={(e) => go(e, '#c-stack')}   className="nav__link">Stack</a></li>
            <li><a href="#c-about"   onClick={(e) => go(e, '#c-about')}   className="nav__link">About</a></li>
            <li><a href="#c-resume"  onClick={(e) => go(e, '#c-resume')}  className="nav__link">Résumé</a></li>
            <li><a href="#c-contact" onClick={(e) => go(e, '#c-contact')} className="nav__link">Contact</a></li>
          </>
        ) : (
          <>
            <li><a href="#work"     onClick={(e) => go(e, '#work')}     className="nav__link">Work</a></li>
            <li><a href="#services" onClick={(e) => go(e, '#services')} className="nav__link">Services</a></li>
            <li><a href="#about"    onClick={(e) => go(e, '#about')}    className="nav__link">About</a></li>
            <li><a href="#contact"  onClick={(e) => go(e, '#contact')}  className="nav__link">Contact</a></li>
            <li>
              <a href="/career" onClick={(e) => go(e, '/career')} className="nav__badge">
                For Recruiters ↗
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
