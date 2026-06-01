import React, { useState, useEffect } from 'react'
import { HALO_BRIEF_URL, isHaloBriefLive } from '../constants/links.js'

const cvDownloads = [
  {
    label: 'Descargar CV (Español)',
    href: '/cv/Agustin_Delgado_CV_ES.pdf',
    lang: 'es',
  },
  {
    label: 'Download CV (English)',
    href: '/cv/Agustin_Delgado_CV_EN.pdf',
    lang: 'en',
  },
]

const channels = [
  {
    label: 'Ver LinkedIn',
    handle: 'Perfil profesional',
    href: 'https://www.linkedin.com/in/agustin-delgado-data98615190/',
    accent: 'sky',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Ver GitHub',
    handle: 'Agus-Delgado',
    href: 'https://github.com/Agus-Delgado',
    accent: 'violet',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Contactar por email',
    handle: 'augusto.delgado00@hotmail.com',
    href: 'mailto:augusto.delgado00@hotmail.com',
    accent: 'emerald',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const personalCards = [
  {
    src: '/brand/agustin-delgado-card-linkedin-front.png',
    alt: 'Agustín Delgado personal card with LinkedIn QR',
    label: 'Tarjeta personal — LinkedIn',
  },
  {
    src: '/brand/agustin-delgado-card-portfolio-back.png',
    alt: 'Agustín Delgado personal card with portfolio QR',
    label: 'Tarjeta personal — Portfolio',
  },
]

export default function Contact() {
  const [selectedCard, setSelectedCard] = useState(null)
  const haloLive = isHaloBriefLive()

  useEffect(() => {
    if (!selectedCard) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCard(null)
    }

    document.body.classList.add('card-lightbox-open')
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('card-lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedCard])

  return (
    <section className="contact-section" id="contacto">
      <div className="fade-in section-head contact-section-head">
        <span className="section-label">Contacto</span>
        <h2 className="display-lg contact-heading safe-text-render">
          Siguiente paso{' '}
          <span className="grad-text-emerald safe-text-render">concreto</span>
        </h2>
        <p className="prose-muted lead-tight">
          LinkedIn, GitHub, CV o email — elegí el canal que te resulte más cómodo.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-main card card--spotlight fade-in fade-in-delay-1">
          <div className="contact-main-title">Canales</div>
          <p className="contact-main-text">Respuesta habitual en horas hábiles.</p>

          <div className="channels-list">
            {channels.map((ch) => (
              <a
                key={ch.label}
                className="channel-link"
                href={ch.href}
                {...(ch.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer noopener' })}
              >
                <div className={`channel-icon ${ch.accent}`}>{ch.icon}</div>
                <div className="channel-info">
                  <div className="channel-label">{ch.label}</div>
                  <div className="channel-handle">{ch.handle}</div>
                </div>
                <svg className="channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          <aside className="halo-cta-card" aria-labelledby="halo-cta-title">
            <h3 id="halo-cta-title" className="halo-cta-title">
              Diagnóstico digital para negocios
            </h3>
            <p className="halo-cta-text">
              Si tenés un comercio, emprendimiento o servicio profesional, podés completar un
              diagnóstico breve para detectar qué solución digital te conviene como primer paso:
              página, catálogo, turnos, menú o automatización.
            </p>
            <div className="halo-cta-actions">
              {haloLive ? (
                <a
                  href={HALO_BRIEF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Iniciar diagnóstico
                </a>
              ) : (
                <>
                  <span className="btn btn-ghost halo-cta-btn--pending" aria-disabled="true">
                    Iniciar diagnóstico
                  </span>
                  <span className="halo-cta-note">Disponible próximamente</span>
                </>
              )}
            </div>
          </aside>

          <div className="cv-downloads">
            {cvDownloads.map((cv) => (
              <a
                key={cv.lang}
                className="btn btn-ghost cv-download-btn"
                href={cv.href}
                download
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {cv.label}
              </a>
            ))}
          </div>

          <div className="contact-tags">
            {['Open to work', 'Full-time · freelance', 'Remoto · híbrido', 'Buenos Aires'].map((tag) => (
              <span key={tag} className="pill accent">
                {tag}
              </span>
            ))}
          </div>

          <div className="personal-cards-block">
            <p className="personal-cards-note">
              Tarjeta personal con accesos rápidos a LinkedIn y portfolio.
            </p>
            <div className="personal-cards-preview">
              {personalCards.map((card) => (
                <button
                  key={card.src}
                  type="button"
                  className="personal-card-button"
                  aria-label={`Ver ampliada: ${card.label}`}
                  onClick={() => setSelectedCard({ src: card.src, alt: card.alt })}
                >
                  <img src={card.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="about-card card card--spotlight fade-in fade-in-delay-2">
          <div className="profile-strip">
            <img
              src="/img/foto.jpg"
              alt="Foto de perfil de Agustín Delgado"
              loading="lazy"
              width="160"
              height="160"
              style={{
                width: 'clamp(112px, 30vw, 160px)',
                height: 'clamp(112px, 30vw, 160px)',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '2px solid rgba(34, 211, 238, 0.5)',
                boxShadow: '0 0 24px rgba(34, 211, 238, 0.15)',
              }}
            />
            <div>
              <div className="about-title">Sobre mí</div>
              <p className="profile-note">Data Analyst · BI · automatización e IA aplicada.</p>
            </div>
          </div>

          <p className="about-text">
            Parto de problemas reales, no de herramientas. Uso datos para que procesos y equipos
            vean con más claridad qué pasa y qué conviene hacer. La automatización y la{' '}
            <span className="prose-em">IA aplicada</span> entran cuando reducen trabajo manual o
            mejoran decisiones — no como fin en sí mismas.
          </p>

          <p className="about-text about-text--secondary">
            Años en operación y salud me dieron contexto con usuarios reales, datos incompletos y
            restricciones del día a día. Eso define cómo priorizo reporting, mantenibilidad y
            entregas que se puedan explicar sin jerga innecesaria.
          </p>

          <div className="about-divider" />

          <div className="about-facts">
            {[
              { icon: '📍', label: 'Ubicación', value: 'Buenos Aires' },
              { icon: '🎯', label: 'Rol', value: 'Data Analyst · BI' },
              { icon: '🏥', label: 'Dominio', value: 'Salud · operación' },
              { icon: '⚡', label: 'Disponibilidad', value: 'Inmediata' },
            ].map((f) => (
              <div key={f.label} className="about-fact">
                <div className="about-fact-icon">{f.icon}</div>
                <span className="about-fact-label">{f.label}</span>
                <span className="about-fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCard && (
        <div
          className="card-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de tarjeta personal"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="card-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="card-lightbox-close"
              onClick={() => setSelectedCard(null)}
              aria-label="Cerrar vista ampliada"
            >
              ×
            </button>
            <img src={selectedCard.src} alt={selectedCard.alt} />
          </div>
        </div>
      )}
    </section>
  )
}
