import React from 'react'

const principles = [
  {
    index: '01',
    title: 'Problema primero, herramienta después',
    body: 'Parto del flujo de decisión y las restricciones reales. Los modelos y las APIs entran cuando hay un criterio claro de éxito.',
    accent: 'emerald',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35M11 8v3l2 2" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Datos trazables y reproducibles',
    body: 'Pipelines, validaciones y versionado que sostienen métricas y despliegues. Sin eso, el modelo no escala.',
    accent: 'sky',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Salidas útiles en producción',
    body: 'API, panel o integración: la salida tiene dueño en operación y se puede mantener con el equipo.',
    accent: 'violet',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Narrativa técnica clara',
    body: 'Cada pieza se puede explicar con diagrama simple, contratos y trade-offs — útil para revisión con producto o ingeniería.',
    accent: 'amber',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

export default function Approach() {
  return (
    <section className="approach-section" id="enfoque">
      <div className="approach-layout">
        <div className="approach-left fade-in">
          <span className="section-label">Enfoque</span>
          <h2 className="display-lg">
            Cómo <span className="grad-text-emerald">encajo</span> las piezas
          </h2>
          <p className="approach-intro">
            Menos lista de herramientas y más orden: problema, datos, interfaz de salida y criterio de release.
          </p>
          <a className="approach-cta" href="#contacto">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Conversar →
          </a>
        </div>

        <div className="principles-list">
          {principles.map((p, i) => (
            <div
              key={p.index}
              className={`principle-card card card--spotlight fade-in fade-in-delay-${i + 1}`}
            >
              <div className="principle-header">
                <span className="principle-number">{p.index}</span>
                <div className={`principle-icon ${p.accent}`}>{p.icon}</div>
                <div className="principle-title">{p.title}</div>
              </div>
              <p className="principle-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
