import { useEffect, useRef } from 'react'
import OrbitSystem from '../components/OrbitSystem'
import { NavLink } from 'react-router-dom'
import { personalData, hobbies } from '../data/portfolioData'
import './Home.css'

export default function Home() {
  const heroRef = useRef(null)
  const bioRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.animate-on-scroll')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <div className="hero__gradient-orb hero__gradient-orb--1" />
          <div className="hero__gradient-orb hero__gradient-orb--2" />
          <div className="hero__gradient-orb hero__gradient-orb--3" />
        </div>
        
        <div className="hero__content section-container">
          <div className="hero__orbit-wrapper">
            <OrbitSystem avatarSrc={personalData.avatarSrc} avatarAlt={personalData.avatarAlt} />
          </div>
          
          <div className="hero__text">
            <p className="hero__greeting">{personalData.greeting}</p>
            <h1 className="hero__title">
              {personalData.titlePrefix}<span className="gradient-text">{personalData.titleHighlight}</span>
            </h1>
            <div className="hero__divider" />
            <p className="hero__description">{personalData.heroDescription}</p>
            <div className="hero__actions">
              <NavLink to="/projects" className="hero__btn hero__btn--primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </NavLink>
              <NavLink to="/contact" className="hero__btn hero__btn--secondary">
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* About / Bio Section */}
      <section className="bio-section">
        <div className="section-container">
          <div className="bio-grid animate-on-scroll" ref={bioRef}>
            {hobbies.map((hobby, idx) => (
              <div key={idx} className="bio-card">
                <div className="bio-card__icon">{hobby.icon}</div>
                <h3 className="bio-card__title">{hobby.title}</h3>
                <p className="bio-card__text">{hobby.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
