import { useEffect } from 'react'
import { about, proficiency, stats } from '../data/portfolioData'
import TechMarquee from '../components/TechMarquee'
import './About.css'

export default function About() {
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
    <div className="about-page">
      <section className="about-hero">
        <div className="section-container">
          <p className="about-hero__label">{about.label}</p>
          <h1 className="about-hero__title">
            {about.titlePrefix} <span className="gradient-text">{about.titleHighlight}</span>
          </h1>
          <p className="about-hero__subtitle">{about.subtitle}</p>
        </div>
      </section>

      <section className="about-content">
        <div className="section-container">
          
          <div className="about-layout animate-on-scroll">
            
            {/* Left Column */}
            <div className="about-layout__left">
              {/* Introduction */}
              <div className="about-section">
                <h2 className="about-section__title">Introduction</h2>
                <div className="about-card">
                  {about.paragraphs.map((paragraph, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} style={{ marginBottom: idx < about.paragraphs.length - 1 ? '1rem' : 0 }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="about-layout__right">
              {/* Tech Stack Marquee */}
              <div className="about-section">
                <h2 className="about-section__title">Tech Stack & Tools</h2>
                <div className="about-card marquee-card">
                  <TechMarquee />
                </div>
              </div>

              {/* Technical Proficiency */}
              <div className="about-section">
                <h2 className="about-section__title">Technical Proficiency</h2>
                <div className="about-card proficiency-card">
                  <div className="proficiency-bars">
                    {proficiency.bars.map((bar, idx) => (
                      <div key={idx} className="proficiency-bar-item">
                        <div className="proficiency-bar-header">
                          <span className="proficiency-bar-name">{bar.name}</span>
                          <span className="proficiency-bar-level">{bar.level}</span>
                        </div>
                        <div className="proficiency-bar-track">
                          <div 
                            className="proficiency-bar-fill" 
                            style={{ width: `${bar.percentage}%`, transitionDelay: `${0.1 * idx}s` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="about-stats-container animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <h3 className="stat-card__value gradient-text">{stat.value}</h3>
                  <p className="stat-card__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
