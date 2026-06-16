import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { personalData } from '../data/portfolioData'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setHidden(currentScroll > lastScroll && currentScroll > 100)
      setScrolled(currentScroll > 20)
      lastScroll = currentScroll
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${hidden ? 'navbar--hidden' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="gradient-text">{personalData.name}</span>
        </NavLink>
        
        <button 
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
