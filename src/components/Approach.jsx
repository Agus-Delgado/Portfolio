import React from 'react'

const principles = [
  {
    index: '01',
    title: 'Problema real primero',
    body: 'Entiendo el proceso, quién lo usa y qué decisión hay que mejorar antes de elegir herramientas o automatizar.',
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
    title: 'Datos y claridad',
    body: 'Limpio, modelo y documento datos para que reportes, KPIs y tableros reflejen la operación con trazabilidad.',
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
    title: 'Automatización e IA aplicada',
    body: 'Uso Python, SQL y workflows —y IA cuando suma— para reducir trabajo manual y mejorar la lectura de datos.',
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
    title: 'Entrega usable',
    body: 'Construyo soluciones que equipos o clientes pueden usar, mantener y explicar — no demos desconectadas.',
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
            Cómo <span className="grad-text-emerald">trabajo</span>
          </h2>
          <p className="approach-intro">
            Mi experiencia en operación y salud me enseñó a trabajar con usuarios reales, datos
            incompletos y restricciones del día a día. Hoy conecto analítica, BI y automatización con
            IA aplicada solo donde aporta valor concreto.
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
