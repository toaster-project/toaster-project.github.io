import { NavLink } from 'react-router-dom'
import { personalData, contactInfo } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__logo">{personalData.name}</h3>
            <p className="footer__tagline">{personalData.tagline}</p>
          </div>

          {/* Nav */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            <NavLink to="/" className="footer__nav-link">Home</NavLink>
            <NavLink to="/about" className="footer__nav-link">About</NavLink>
            <NavLink to="/projects" className="footer__nav-link">Projects</NavLink>
            <NavLink to="/contact" className="footer__nav-link">Contact</NavLink>
          </div>

          {/* Socials */}
          <div className="footer__socials">
            <h4 className="footer__nav-title">Connect</h4>
            <div className="footer__social-links">
              {contactInfo.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={social.name}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" dangerouslySetInnerHTML={{ __html: social.iconSvg }}></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
