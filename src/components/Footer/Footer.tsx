import { useNavigate, useLocation } from 'react-router-dom'
import './footer.scss'

export default function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isCareer = pathname === '/career'

  return (
    <footer className="footer">
      <p className="footer__copy">© 2026 Kevin Aristhomene</p>
      {isCareer ? (
        <button className="footer__link" onClick={() => { navigate('/'); window.scrollTo(0, 0) }}>
          ← Back to Portfolio
        </button>
      ) : (
        <button className="footer__link" onClick={() => { navigate('/career'); window.scrollTo(0, 0) }}>
          For Recruiters →
        </button>
      )}
    </footer>
  )
}
