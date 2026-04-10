import React from 'react'

const footerLinks = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
  { href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/Agus-Delgado', label: 'GitHub', external: true },
  { href: 'mailto:augusto.delgado00@hotmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="legal">
      <div className="footer-ribbon" aria-hidden />
      <div className="footer-grid">
        <div className="footer-brand-block">
          <div className="footer-logo">AD</div>
          <div>
            <div className="footer-name">Agustín Delgado</div>
            <p className="footer-tagline">
              IA aplicada, data science y sistemas — foco en producto y operación.
            </p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Pie de página">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-legal">
        <p className="footer-disclaimer">
          Este sitio es informativo. Los proyectos describen experiencia y decisiones técnicas personales; nombres
          comerciales o de terceros pertenecen a sus titulares. Nada aquí constituye asesoramiento profesional ni
          compromiso contractual.
        </p>
        <p className="footer-copy">© {year} Agustín Delgado. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
