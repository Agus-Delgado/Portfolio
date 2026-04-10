import React from 'react'

const stackGroups = [
  {
    id: 'ai',
    accent: 'emerald',
    label: 'IA & ML aplicado',
    description: 'Diseño de prompts, RAG, evaluación y despliegue cuando el modelo es parte del producto.',
    items: [
      { name: 'LLMs', note: 'GPT-4o · Gemini · DeepSeek' },
      { name: 'RAG', note: 'retrieval + grounding' },
      { name: 'LangChain', note: 'orquestación' },
      { name: 'scikit-learn', note: 'ML clásico' },
      { name: 'Vector DB', note: 'búsqueda semántica' },
      { name: 'Evaluación', note: 'métricas de calidad' },
    ],
  },
  {
    id: 'eng',
    accent: 'violet',
    label: 'Ingeniería & producto',
    description: 'Servicios, contratos y frontends que sostienen releases frecuentes y operación.',
    items: [
      { name: 'FastAPI', note: 'REST · async' },
      { name: 'Django', note: 'full-stack' },
      { name: 'React', note: 'TypeScript · Vite' },
      { name: 'Docker', note: 'empaquetado' },
      { name: 'Git / GitHub', note: 'flujo de cambios' },
      { name: 'Vercel · Render', note: 'deploy' },
    ],
  },
  {
    id: 'data',
    accent: 'sky',
    label: 'Datos & analítica',
    description: 'SQL, modelado y reporting cuando la decisión pasa por números auditables.',
    items: [
      { name: 'Python', note: 'pandas · numpy' },
      { name: 'SQL', note: 'PostgreSQL · Supabase' },
      { name: 'Power BI', note: 'tableros' },
      { name: 'Tableau', note: 'visualización' },
      { name: 'Modelado', note: 'KPIs' },
      { name: 'ETL', note: 'pipelines' },
    ],
  },
]

const certifications = [
  'Data Science · IBM',
  'Machine Learning · Coursera',
  'Python for Data Science',
  'SQL Advanced',
  'Power BI · Microsoft',
  'AI Fundamentals',
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

      <div className="certs-row fade-in">
        <span className="certs-label">Certificaciones</span>
        <div className="certs-list">
          {certifications.map((cert) => (
            <span key={cert} className="pill">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
