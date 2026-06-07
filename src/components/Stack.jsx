import React from 'react'

const stackGroups = [
  {
    id: 'data',
    accent: 'sky',
    label: 'Datos & BI',
    description: 'SQL, modelado, limpieza y reporting cuando la decisión pasa por números claros y auditables.',
    items: [
      { name: 'SQL', note: 'PostgreSQL · consultas' },
      { name: 'Power BI', note: 'tableros · KPIs' },
      { name: 'Python', note: 'pandas · análisis' },
      { name: 'Excel', note: 'carga · validación' },
      { name: 'ETL', note: 'pipelines' },
      { name: 'Reporting', note: 'data cleaning' },
    ],
  },
  {
    id: 'eng',
    accent: 'violet',
    label: 'Automatización & desarrollo',
    description: 'Servicios, bases de datos y despliegue para sostener automatizaciones y herramientas internas.',
    items: [
      { name: 'Python', note: 'scripts · APIs' },
      { name: 'Django', note: 'full-stack' },
      { name: 'FastAPI', note: 'REST · async' },
      { name: 'PostgreSQL', note: 'modelado' },
      { name: 'Git / GitHub', note: 'flujo de cambios' },
      { name: 'Vercel · Render', note: 'Cloudflare' },
    ],
  },
  {
    id: 'ai',
    accent: 'emerald',
    label: 'IA aplicada',
    description: 'IA generativa y ML ligero cuando aceleran análisis o reducen trabajo manual — sin reemplazar el criterio analítico.',
    items: [
      { name: 'Generative AI', note: 'GPT · Gemini' },
      { name: 'Prompt engineering', note: 'workflows' },
      { name: 'LLMs', note: 'casos acotados' },
      { name: 'RAG', note: 'conceptos básicos' },
      { name: 'scikit-learn', note: 'ML clásico' },
      { name: 'AI-assisted flows', note: 'automatización' },
    ],
  },
]

const continuousLearning = [
  {
    title: 'IBM Generative AI Engineering Professional Certificate',
    status: 'completed',
    statusLabel: 'Completado',
  },
  {
    title: 'English for Career Development — University of Pennsylvania',
    status: 'in_progress',
    statusLabel: 'En curso',
  },
  {
    title: 'Data Analytics Program — Coderhouse',
    status: 'completed',
    statusLabel: 'Completado',
  },
  {
    title: 'Formación seleccionada en analítica, BI, Python e IA aplicada',
    status: 'coursework',
    statusLabel: 'Formación',
  },
]

export default function Stack() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-header fade-in">
        <div>
          <span className="section-label">Stack</span>
          <h2 className="display-lg">
            Herramientas <span className="grad-text-emerald">en conjunto</span>
          </h2>
        </div>
      </div>

      <div className="stack-grid">
        {stackGroups.map((group, i) => (
          <div key={group.id} className={`stack-card card card--spotlight fade-in fade-in-delay-${i + 1}`}>
            <div className="stack-card-top">
              <div className={`stack-accent-bar ${group.accent}`} />
              <div className="stack-card-heading">
                <div className="stack-card-label">{group.label}</div>
              </div>
            </div>

            <p className="stack-card-desc">{group.description}</p>

            <div className="tech-list">
              {group.items.map((item) => (
                <div key={item.name} className="tech-item">
                  <span className="tech-name">{item.name}</span>
                  <span className="tech-note">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="learning-row fade-in">
        <div className="learning-header">
          <h3 className="learning-label">Aprendizaje continuo</h3>
        </div>
        <div className="learning-list">
          {continuousLearning.map((item) => (
            <div key={item.title} className="learning-item">
              <span className="learning-title">{item.title}</span>
              <span className={`learning-status learning-status--${item.status}`}>
                {item.statusLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
