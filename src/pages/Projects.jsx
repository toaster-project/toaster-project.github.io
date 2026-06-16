import { useEffect } from 'react'
import { projectsData } from '../data/portfolioData'
import './Projects.css'

export default function Projects() {
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

    const cards = document.querySelectorAll('.project-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="section-container">
          <p className="projects-hero__label">{projectsData.label}</p>
          <h1 className="projects-hero__title">
            {projectsData.titlePrefix} <span className="gradient-text">{projectsData.titleHighlight}</span>
          </h1>
          <p className="projects-hero__subtitle">
            {projectsData.subtitle}
          </p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="section-container">
          <div className="projects-grid">
            {projectsData.list.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{ '--card-delay': `${index * 0.1}s` }}
              >
                <div className="project-card__icon">{project.icon}</div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__shine" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
