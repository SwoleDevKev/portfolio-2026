import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import FadeIn from '../components/FadeIn/FadeIn'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import StatBlock from '../components/StatBlock/StatBlock'
import ContactLinks from '../components/ContactLinks/ContactLinks'
import Footer from '../components/Footer/Footer'
import { projects } from '../data/projects'
import './home.scss'

const services = [
  {
    num: '01',
    title: 'Web Applications',
    description: 'Full-stack apps built to scale. Clean React frontends, robust Node.js or Spring Boot backends, proper databases. From MVP to production.',
    tags: ['React', 'Node.js', 'Spring Boot'],
  },
  {
    num: '02',
    title: 'Mobile Apps',
    description: "Cross-platform iOS and Android apps with React Native and Expo. I've shipped to both stores and know the submission process end to end.",
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    num: '03',
    title: 'Websites',
    description: 'Fast, responsive, professional websites for businesses and personal brands. Built to perform and designed to make the right impression.',
    tags: ['React', 'HTML/CSS', 'Custom'],
  },
]

const contactLinks = [
  { label: 'swoledevkev@gmail.com', href: 'mailto:swoledevkev@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevin-aristhomene', external: true },
  { label: 'GitHub — swoledevkev', href: 'https://github.com/SwoleDevKev', external: true },
]

const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Home() {
  const navigate = useNavigate()

  const goCareer = () => { window.scrollTo(0, 0); navigate('/career') }
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  

  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id='hero' className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="wrap">

            <p className="hero__eyebrow">Software Engineer</p>

            <h1 className="hero__name">
              Kevin<br /><em>Aristhomene</em>
            </h1>

            <p className="hero__sub">
              I design and build digital products — web apps, mobile apps,
              and websites that actually work.
            </p>

            <div className="hero__paths">
              <div
                className="path-card path-card--build"
                onClick={() => scrollTo('work')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && scrollTo('work')}
              >
                <span className="path-card__label">For Clients</span>
                <h3 className="path-card__title">Need something built?</h3>
                <p className="path-card__desc">Web apps · Mobile apps · Websites</p>
                <span className="path-card__cta">See my work ↓</span>
              </div>

              <div
                className="path-card path-card--hire"
                onClick={goCareer}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && goCareer()}
              >
                <span className="path-card__label">For Recruiters</span>
                <h3 className="path-card__title">Looking to hire?</h3>
                <p className="path-card__desc">Full-stack engineer · Barclays · Open to opportunities</p>
                <span className="path-card__cta">Career profile →</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────── */}
      <section id="work" className="section work">
        <div className="wrap">
          <FadeIn><p className="section-label">Work</p></FadeIn>
          <FadeIn delay={70}><h2 className="section-title">Recent <em>Projects</em></h2></FadeIn>
          <FadeIn delay={100}><p className="work__hint">Hover a card to scroll the preview</p></FadeIn>
          <FadeIn delay={120}>
            <div className="work__grid">
              {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="section services">
        <div className="wrap">
          <FadeIn><p className="section-label section-label--a2">Services</p></FadeIn>
          <FadeIn delay={70}><h2 className="section-title section-title--a2">What I <em>build</em></h2></FadeIn>
          <FadeIn delay={120}>
            <div className="services__grid">
              {services.map((s) => <ServiceCard key={s.num} {...s} />)}
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="services__cta">
              <a
                href="#contact"
                className="btn btn--a2"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              >
                Start a project <ChevronRight />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="section about">
        <div className="wrap">
          <div className="about__grid">
            <div>
              <FadeIn>
                <p className="section-label">About</p>
                <h2 className="section-title">From health science<br />to <em>engineer</em></h2>
              </FadeIn>
              <FadeIn delay={70}>
                <div className="about__text">
                  <p>I started in health science — studied physical therapy, graduated with honors. Then I noticed the real problem: the systems were broken. That tension pulled me toward code.</p>
                  <p>I'm a BrainStation grad and <strong>Teaching Assistant</strong>. By day I build financial tooling at <strong>Barclays</strong> in New York. Outside of that I take on projects — websites, apps, whatever needs building well.</p>
                  <p>Originally from <strong>Haiti</strong>. When I'm not coding you'll find me at the gym, on a bike, or reading.</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={140}>
              <div className="about__stats">
                <StatBlock number="2+" label="Years professional engineering experience" accent="primary" />
                <StatBlock number="8" label="Projects deployed and shipped" accent="secondary" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <section id="contact" className="section contact">
        <div className="wrap">
          <div className="contact__grid">
            <div>
              <FadeIn>
                <p className="section-label">Contact</p>
                <h2 className="section-title">Ready to <em>build</em>?</h2>
              </FadeIn>
              <FadeIn delay={70}>
                <p className="contact__note">Have a project in mind? Reach out — I respond to everyone.</p>
              </FadeIn>
            </div>
            <FadeIn delay={140}>
              <ContactLinks links={contactLinks} />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
