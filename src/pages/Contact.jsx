import { useState, useEffect } from 'react'
import { contactInfo } from '../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder — no backend yet
    alert('Thanks for reaching out! (Form submission not yet connected)')
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="section-container">
          <p className="contact-hero__label">Contact</p>
          <h1 className="contact-hero__title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-hero__subtitle">
            Have a question or want to work together? Drop me a message.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid animate-on-scroll">
            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="contact-name" className="contact-form__label">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-form__input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email" className="contact-form__label">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-form__input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message" className="contact-form__label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-form__textarea"
                  placeholder="Your message..."
                  rows="6"
                  required
                />
              </div>
              <button type="submit" className="contact-form__submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>

            {/* Info */}
            <div className="contact-info">
              <div className="contact-info__card">
                <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
                  <defs>
                    <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#contact-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info__label">Email</h4>
                    <p className="contact-info__value">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#contact-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info__label">Location</h4>
                    <p className="contact-info__value">{contactInfo.location}</p>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#contact-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="contact-info__label">Phone</h4>
                    <p className="contact-info__value">{contactInfo.contactno}</p>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <h4 className="contact-socials__title">Find me on</h4>
                <div className="contact-socials__links">
                  {contactInfo.socials.map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label={social.name}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" dangerouslySetInnerHTML={{ __html: social.iconSvg }}></svg>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
