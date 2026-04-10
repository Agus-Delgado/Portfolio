import React, { useState, useEffect } from 'react'

const navLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="header-wrap">
      <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#">
          <div className="brand-logo brand-spotlight">AD</div>
          <div className="brand-text">
            <div className="brand-name">Agustín Delgado</div>
            <div className="brand-role">Applied AI · sistemas · producto</div>
          </div>
        </a>

        <nav className="nav-rail" aria-label="Principal">
          <div className="nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="header-aside">
          <div className="header-status">
            <span className="live-dot" />
            Disponible
          </div>
        </div>

        <button
          type="button"
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Móvil">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
