import Nav from '../components/Nav/Nav'
import FadeIn from '../components/FadeIn/FadeIn'
import IconGrid from '../components/IconGrid/IconGrid'
import StatBlock from '../components/StatBlock/StatBlock'
import ContactLinks from '../components/ContactLinks/ContactLinks'
import Footer from '../components/Footer/Footer'
import { stack } from '../data/stack'
import './career.scss'

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

export default function Career() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="career-hero">
        <div className="career-hero__left">
          <FadeIn>
            <p className="career-hero__eyebrow">Career Profile</p>
          </FadeIn>
          <FadeIn delay={70}>
            <h1 className="career-hero__name">
              Kevin<br /><em>Aristhomene</em>
            </h1>
          </FadeIn>
          <FadeIn delay={130}>
            <p className="career-hero__role">
              Equities &amp; Derivatives Developer · <strong>Barclays</strong>
            </p>
          </FadeIn>
          <FadeIn delay={170}>
            <p className="career-hero__open">New York · Open to Florida &amp; Remote</p>
          </FadeIn>
          <FadeIn delay={220}>
            <div className="career-hero__btns">
              <a href="#c-resume" className="btn btn--a2" onClick={(e) => { e.preventDefault(); scrollTo('c-resume') }}>
                View Resume <ChevronRight />
              </a>
              <a href="#c-contact" className="btn btn--outline" onClick={(e) => { e.preventDefault(); scrollTo('c-contact') }}>
                Get in touch
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={280} className="career-hero__avatar-wrap">
          <div className="career-hero__avatar">
            <img src="/images/headshot-transp.png" alt="" />
          </div>
        </FadeIn>
      </section>

      {/* ── Stack ────────────────────────────────────────────────── */}
      <section id="c-stack" className="section career-stack">
        <div className="wrap">
          <FadeIn><p className="section-label section-label--a2">Skills</p></FadeIn>
          <FadeIn delay={70}><h2 className="section-title section-title--a2">The <em>stack</em></h2></FadeIn>
          <FadeIn delay={120}><IconGrid items={stack} /></FadeIn>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="c-about" className="section career-about">
        <div className="wrap">
          <div className="career-about__grid">
            <div>
              <FadeIn>
                <p className="section-label section-label--a2">Background</p>
                <h2 className="section-title section-title--a2">From health science<br />to <em>engineer</em></h2>
              </FadeIn>
              <FadeIn delay={70}>
                <div className="career-about__text">
                  <p>Started in health science, graduated with honors from Florida Atlantic University. Pivoted to software after recognizing how broken the systems around me were.</p>
                  <p>BrainStation grad and <strong>Teaching Assistant</strong>, selected from a class of 27. Completed a highly competitive technical Program and was placed at <strong>Barclays</strong> as an Equities &amp; Derivatives Developer — building financial tooling in Angular, TypeScript, and C# for operations teams handling interest rate swaps and equity derivatives.</p>
                  <p>Based in <strong>New York</strong>. Open to roles in New York, Florida, Texas and remote opportunities.</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={140}>
              <div className="career-about__stats">
                <StatBlock number="2+" label="Years professional engineering experience" accent="primary" />
                <StatBlock number="8" label="Projects deployed and shipped" accent="secondary" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Resume ───────────────────────────────────────────────── */}
      <section id="c-resume" className="section career-resume">
        <div className="wrap">
          <FadeIn><p className="section-label section-label--a2">Resume</p></FadeIn>
          <FadeIn delay={70}><h2 className="section-title section-title--a2">View my <em>full CV</em></h2></FadeIn>
          <FadeIn delay={120}>
            <div className="career-resume__card">
              <div>
                <h3 className="career-resume__name">Kevin Aristhomene</h3>
                <p className="career-resume__meta">
                  Software Engineer <br />Angular · TypeScript · C# · Java · React Native<br />
                </p>
              </div>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--a2">
                View Résumé <ChevronRight />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <section id="c-contact" className="section career-contact">
        <div className="wrap">
          <div className="career-contact__grid">
            <div>
              <FadeIn>
                <p className="section-label section-label--a2">Contact</p>
                <h2 className="section-title section-title--a2">Let&apos;s <em>connect</em></h2>
              </FadeIn>
              <FadeIn delay={70}>
                <p className="career-contact__note">
                  Open to full-time roles, contract work, and interesting engineering
                  challenges. New York-based, open to Florida, Texas and remote.
                </p>
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
