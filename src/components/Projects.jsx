import React, { useState, useRef, useEffect } from 'react'

const featuredProjects = [
  {
    id: 'paradise',
    rank: '01 — Featured',
    label: 'SaaS · AI product',
    title: 'Paradise',
    tagline: 'Línea de producto modular orientada a flujos con modelos.',
    description:
      'Arquitectura multi-tenant, superficie web cuidada y convenciones para evolucionar features sin fragmentar el sistema. Pensado como ecosistema SaaS, no como demo aislada.',
    problem: 'Ordenar un ecosistema de módulos con IA, datos, interfaces y lógica de negocio sin caer en proyectos sueltos imposibles de mantener.',
    role: 'Diseño de arquitectura, definición de módulos, contratos conceptuales, UX de producto y evolución iterativa del sistema.',
    impact: 'Muestra criterio de producto, pensamiento sistémico y capacidad para convertir una idea amplia en una plataforma modular defendible.',
    impactHighlight:
      'Impacto: ecosistema AI-first modular con múltiples productos conectados bajo una arquitectura evolutiva.',
    highlights: ['Arquitectura por módulos', 'Nimbus como capa de conexión', 'Paradise AI como interfaz central', 'Roadmap evolutivo SaaS'],
    artifacts: ['Landing + manifesto', 'Módulos verticales', 'Contratos y convenciones', 'Iteración continua con Git'],
    accent: 'sky',
    accentColor: '#38b8f5',
    stack: ['React', 'TypeScript', 'System design', 'API contracts', 'Product iteration'],
    signals: ['Product-led', 'Multi-tenant', 'Interfaces', 'Evolución continua'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    projectUrl: 'https://paradise-web-alpha.vercel.app/',
  },
  {
    id: 'miconsultorio',
    rank: '02 — Featured',
    label: 'SaaS · HealthOps',
    title: 'Mi Consultorio',
    tagline: 'Sistema clínico en producción con usuarios reales.',
    description:
      'Agenda, historias clínicas, caja, roles y reporting. PostgreSQL en Render, automatización de emails, PWA y operación diaria en clínicas argentinas.',
    problem: 'Digitalizar operación clínica diaria donde los errores de agenda, caja o historia clínica impactan directamente en usuarios reales.',
    role: 'Desarrollo full-stack, modelado de datos, gestión de roles, automatizaciones, despliegue y mejoras continuas sobre feedback operativo.',
    impact: 'Proyecto con uso real: prueba capacidad de construir software mantenible, no solo notebooks o prototipos lindos para la foto.',
    impactHighlight:
      'Impacto: solución web orientada a turnos, gestión profesional y presencia digital para servicios de salud.',
    highlights: ['Usuarios reales', 'Historias clínicas y agenda', 'Caja y reporting', 'Automatización de emails'],
    artifacts: ['PWA operativa', 'Base PostgreSQL', 'Roles y permisos', 'Deploy en Render'],
    accent: 'violet',
    accentColor: '#8b6fff',
    stack: ['Python', 'Django', 'PostgreSQL', 'PWA', 'REST', 'Email automation'],
    signals: ['Producción', 'Usuarios reales', 'Health ops', 'Automatización'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    projectUrl: 'https://miconsultoriopaginaweb.vercel.app/',
  },
  {
    id: 'paradigm',
    rank: '03 — Featured',
    label: 'Framework · IA en producto',
    title: 'Paradigm',
    tagline: 'Marco para integrar modelos, APIs y releases con criterio único.',
    description:
      'Capa de convenciones y componentes que alinean datos, evaluación y experiencia cuando el producto incorpora IA. Prioriza trazabilidad, contratos claros y despliegues revisables.',
    problem: 'Evitar que la IA quede como experimento aislado: integrar modelos, datos, APIs y reporting con una disciplina clara de release.',
    role: 'Diseño del framework, generación de datos sintéticos, validaciones, documentación técnica y empaquetado del caso para portfolio internacional.',
    impact: 'Comunica madurez técnica: evaluación, reproducibilidad y narrativa ejecutiva para explicar decisiones a negocio e ingeniería.',
    impactHighlight:
      'Impacto: proyecto internacional de análisis de datos con pipeline reproducible, documentación y enfoque de portfolio profesional.',
    highlights: ['Dataset sintético', 'Validaciones reproducibles', 'Quality report', 'Tag de versión estable'],
    artifacts: ['Scripts Python', 'Reportes Markdown', 'README de proyecto', 'Release/tag en Git'],
    accent: 'emerald',
    accentColor: '#00d4b0',
    stack: ['Python', 'FastAPI', 'LLMs', 'Evaluación', 'Observabilidad ligera'],
    signals: ['Ingeniería de producto', 'API-first', 'Release discipline', 'Sistemas'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    projectUrl: 'https://paradigm-web-swart.vercel.app/',
  },
]

const secondaryProjects = [
  {
    title: 'MediAudit RCM',
    type: 'AI · HealthTech · SaaS',
    description: 'Auditoría médica con Gemini: validación de códigos, reportes y API REST (FastAPI, Supabase, Vercel).',
    accent: 'emerald',
  },
  {
    title: 'MediLens AI',
    type: 'LLMs · RAG',
    description: 'RAG sobre documentación clínica con indexación semántica, chunking y trazabilidad de fuentes.',
    accent: 'sky',
  },
  {
    title: 'SmartClinic No-Show',
    type: 'ML · forecasting',
    description: 'Predicción de ausentismo: features, entrenamiento y lectura operativa del modelo.',
    accent: 'emerald',
  },
  {
    title: 'Plataforma geriátrica',
    type: 'React · FastAPI',
    description: 'Gestión asistencial con roles, JWT y migraciones de esquema.',
    accent: 'sky',
  },
]

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const dialogRef = useRef(null)

  const openProject = featuredProjects.find((p) => p.id === openId) ?? null

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    document.body.classList.toggle('project-dialog-is-open', Boolean(openProject))
    if (openProject) {
      if (!d.open) d.showModal()
      requestAnimationFrame(() => {
        const closeBtn = d.querySelector('[data-project-dialog-close]')
        closeBtn?.focus()
      })
    } else if (d.open) {
      d.close()
    }

    return () => {
      document.body.classList.remove('project-dialog-is-open')
    }
  }, [openProject])

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    const onClose = () => setOpenId(null)
    d.addEventListener('close', onClose)
    return () => d.removeEventListener('close', onClose)
  }, [])

  useEffect(() => {
    if (!openProject) return
    const onMouseDown = (e) => {
      const d = dialogRef.current
      if (!d?.open) return
      if (d.contains(e.target)) return
      setOpenId(null)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [openProject])

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-header section-head fade-in">
        <span className="section-label">Proyectos</span>
        <h2 className="display-lg">
          Tres líneas de trabajo <span className="grad-text-emerald">en foco</span>
        </h2>
        <p className="prose-muted lead-tight">
          Producto SaaS, operación clínica y marco de ingeniería para IA — cada pieza con usuarios,
          restricciones reales y entregables defendibles.
        </p>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, i) => (
          <div
            key={project.id}
            className={`project-card card card--spotlight card--featured fade-in fade-in-delay-${i + 1}`}
          >
            <div className="project-card-rank">{project.rank}</div>
            <div className="project-top">
              <div className={`project-icon ${project.accent}`}>{project.icon}</div>
              <span className="project-label-pill">{project.label}</span>
            </div>

            <div className="project-title">{project.title}</div>
            <div className="project-tagline">{project.tagline}</div>
            <p className="project-desc">{project.description}</p>

            <div className="project-divider" />

            <div className="project-signals">
              {project.signals.map((s) => (
                <span key={s} className={`signal-tag ${project.accent}`}>
                  {s}
                </span>
              ))}
            </div>

            <div className="project-stack">
              {project.stack.map((s) => (
                <span key={s} className="stack-tag">
                  {s}
                </span>
              ))}
            </div>

            <div className="project-card-actions">
              <button
                type="button"
                className="btn-project-detail"
                onClick={() => setOpenId(project.id)}
              >
                Más detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={`project-dialog project-dialog--${openProject?.accent ?? 'neutral'}`}
        aria-labelledby="project-dialog-title"
      >
        {openProject && (
          <div className="project-dialog-inner">
            <header className="project-dialog-header">
              <div className="project-dialog-meta">
                <span className={`project-dialog-icon project-icon ${openProject.accent}`}>{openProject.icon}</span>
                <span className="project-label-pill">{openProject.label}</span>
              </div>
              <h3 id="project-dialog-title" className="project-dialog-title">
                {openProject.title}
              </h3>
              <p className="project-dialog-tagline">{openProject.tagline}</p>
              <p className="project-impact-callout">{openProject.impactHighlight}</p>
            </header>

            <div className="project-dialog-body">
              <p className="project-dialog-desc">{openProject.description}</p>

              <div className="project-dialog-story-grid">
                <div className="project-dialog-story-card">
                  <div className="project-dialog-section-label">Problema</div>
                  <p>{openProject.problem}</p>
                </div>
                <div className="project-dialog-story-card">
                  <div className="project-dialog-section-label">Mi rol</div>
                  <p>{openProject.role}</p>
                </div>
                <div className="project-dialog-story-card">
                  <div className="project-dialog-section-label">Valor</div>
                  <p>{openProject.impact}</p>
                </div>
              </div>

              <div className="project-dialog-section">
                <div className="project-dialog-section-label">Qué demuestra</div>
                <div className="project-dialog-list-grid">
                  {openProject.highlights.map((item) => (
                    <span key={item} className={`signal-tag ${openProject.accent}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-dialog-section">
                <div className="project-dialog-section-label">Artefactos / entregables</div>
                <div className="project-dialog-list-grid">
                  {openProject.artifacts.map((item) => (
                    <span key={item} className="project-artifact-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-dialog-section">
                <div className="project-dialog-section-label">Stack</div>
                <div className="project-stack">
                  {openProject.stack.map((s) => (
                    <span key={s} className="stack-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <footer className="project-dialog-footer">
              {openProject.projectUrl ? (
                <a
                  href={openProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-dialog-external"
                >
                  Ver página del proyecto
                </a>
              ) : null}
              <button
                type="button"
                className="btn btn-ghost project-dialog-close"
                data-project-dialog-close
                onClick={() => setOpenId(null)}
              >
                Cerrar
              </button>
            </footer>
          </div>
        )}
      </dialog>

      <div className="projects-secondary-wrap">
        <div className="section-subtitle">Más trabajo y experimentación</div>
        <div className="secondary-grid">
          {secondaryProjects.map((project, i) => (
            <div
              key={project.title}
              className={`secondary-card card card--spotlight card--muted fade-in fade-in-delay-${(i % 4) + 1}`}
            >
              <div className="secondary-type">{project.type}</div>
              <div className="secondary-title">{project.title}</div>
              <p className="secondary-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
