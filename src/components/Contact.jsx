import React from 'react'

const channels = [
  {
    label: 'LinkedIn',
    handle: '/in/agustin-delgado-data98615190',
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
    label: 'GitHub',
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
    label: 'Email',
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

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="fade-in section-head">
        <span className="section-label">Contacto</span>
        <h2 className="display-lg">
          Siguiente paso <span className="grad-text-emerald">concreto</span>
        </h2>
        <p className="prose-muted lead-tight">
          Proyectos, colaboraciones o revisiones técnicas: elegí un canal y arrancamos por contexto y prioridades.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-main card card--spotlight fade-in fade-in-delay-1">
          <div className="contact-main-title">Canales</div>
          <p className="contact-main-text">Respuesta habitual en horas hábiles.</p>

          <div className="contact-tags">
            {['Open to work', 'Full-time · freelance', 'Remoto · híbrido', 'Buenos Aires'].map((tag) => (
              <span key={tag} className="pill accent">
                {tag}
              </span>
            ))}
          </div>

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
        </div>

        <div className="about-card card card--spotlight fade-in fade-in-delay-2">
          <div className="profile-strip">
            <img
              src="/img/foto.jpg"
              alt="Foto de perfil de Agustin Delki"
              loading="lazy"
              width="160"
              height="160"
              style={{
                width: 'clamp(112px, 30vw, 160px)',
                height: 'clamp(112px, 30vw, 160px)',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '2px solid rgba(34, 211, 238, 0.7)',
                boxShadow: '0 0 32px rgba(34, 211, 238, 0.25)',
              }}
            />
            <div>
              <div className="about-title">Sobre mí</div>
              <p className="profile-note">Perfil técnico con foco en datos, IA aplicada y producto.</p>
            </div>
          </div>

          <p className="about-text">
            Paso por operación y salud: problemas con usuarios reales, datos incompletos y releases que no pueden
            romperse. Hoy enfoco el stack en <span className="prose-em">IA aplicada</span>,{' '}
            servicios y producto — siempre con trazabilidad y criterio de mantenimiento.
          </p>

          <div className="about-divider" />

          <div className="about-facts">
            {[
              { icon: '📍', label: 'Ubicación', value: 'Buenos Aires' },
              { icon: '🎯', label: 'Rol', value: 'ML / AI systems' },
              { icon: '🏥', label: 'Dominio', value: 'HealthTech' },
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
    </section>
  )
}
