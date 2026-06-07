import React, { useState, useEffect } from 'react'

const roles = [
  'KPIs y dashboards que la operación realmente usa',
  'automatización que reduce trabajo manual en salud',
  'análisis que genera visibilidad y decisiones claras',
]

const longestRole = roles.reduce((a, b) => (a.length >= b.length ? a : b), roles[0])

const ROTATE_MS = 4000

const metrics = [
  { value: '3+', label: 'Años en operación', sub: 'salud y procesos reales' },
  { value: 'SQL · Python', label: 'Stack diario', sub: 'Power BI · Excel' },
  { value: 'BI · KPIs', label: 'Especialidad', sub: 'reporting y automatización' },
  { value: 'Buenos Aires', label: 'Ubicación', sub: 'Argentina' },
]

const focusTags = ['Reporting', 'KPIs', 'Automatización', 'IA aplicada']

const chips = ['SQL', 'Power BI', 'Python', 'Excel', 'Django', 'PostgreSQL', 'Automatización', 'HealthTech']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!reducedMotion) return

    setDisplayedRole(roles[roleIndex])
    setIsDeleting(false)

    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, ROTATE_MS)

    return () => clearInterval(id)
  }, [reducedMotion])

  useEffect(() => {
    if (!reducedMotion) return
    setDisplayedRole(roles[roleIndex])
  }, [roleIndex, reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayedRole.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
      }, 48)
    } else if (!isDeleting && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(displayedRole.slice(0, -1))
      }, 32)
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, roleIndex, reducedMotion])

  return (
    <section className="hero-section">
      <div className="hero-layout">
        <div className="hero-main card card--spotlight card--featured card--hero-text fade-in">
          <div className="hero-main-glow" aria-hidden />
          <div className="hero-main-inner">
            <div className="hero-eyebrow">
              <div className="hero-badge">
                <span className="live-dot" />
                Open to work · Buenos Aires
              </div>
            </div>

            <p className="hero-name safe-text-render">
              <span className="hero-name-text safe-text-render">Agustín Delgado</span>
              <span className="hero-name-line">
                Data Analyst · Business Intelligence · Applied AI
              </span>
            </p>

            <h1 className="hero-headline">
              <span className="hero-headline-lead">
                Convierto datos de operación en
              </span>
              <span className="typewriter-wrap" aria-live="polite">
                <span className="typewriter-sizer" aria-hidden>
                  {longestRole}
                </span>
                <span className="typewriter-line">
                  <span className="typewriter-text">{displayedRole}</span>
                  {!reducedMotion && <span className="hero-cursor" aria-hidden />}
                </span>
              </span>
              <span className="hero-headline-lead hero-headline-trail">
                visibilidad accionable y decisiones claras, con trazabilidad real en salud.
              </span>
            </h1>

            <p className="hero-subtitle">
              Diseño KPIs, tableros y pipelines de reporting con{' '}
              <em>SQL, Python y Power BI</em>, convirtiendo datos imperfectos de operaciones reales
              — especialmente <em>salud</em> — en visibilidad accionable. Uso{' '}
              <em>IA aplicada</em> cuando acelera el análisis o automatiza seguimiento recurrente,
              no como reemplazo del criterio analítico.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#proyectos">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Ver proyectos
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/Agus-Delgado"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="hero-chips">
              {chips.map((chip) => (
                <span key={chip} className="hero-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-panel card card--spotlight fade-in fade-in-delay-1">
            <div className="hero-panel-title">Señales rápidas</div>
            <div className="hero-metrics">
              {metrics.map((m) => (
                <div key={m.label} className="hero-metric">
                  <div className="hero-metric-value">{m.value}</div>
                  <div className="hero-metric-label">{m.label}</div>
                  <div className="hero-metric-sub">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel hero-panel--focus card card--spotlight fade-in fade-in-delay-2">
            <div className="hero-panel-title">Enfoque</div>
            <p className="hero-panel-body">
              Parto de problemas reales: entender el proceso, limpiar y modelar datos, y entregar
              reportes o automatizaciones que el equipo pueda usar y mantener.
            </p>
            <p className="hero-panel-kicker">
              La IA aplicada suma cuando reduce trabajo manual o mejora la lectura de datos — no
              como reemplazo del análisis.
            </p>
            <div className="hero-focus-tags" aria-label="Señales de enfoque">
              {focusTags.map((t) => (
                <span key={t} className="hero-focus-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
