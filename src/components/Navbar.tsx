// Responsive navigation bar with sticky behavior and active section highlighting.

import { useState, useEffect } from 'react'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const top = section.offsetTop - 120
        const bottom = top + section.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar-modern${sticky ? ' sticky' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">🚀</span> <span className="logo-text">YourName</span>
        </a>
        <div className="navbar-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
