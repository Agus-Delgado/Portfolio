import React, { useState, useRef, useEffect } from 'react'
import { HALO_BRIEF_URL, isHaloBriefLive } from '../constants/links.js'

const featuredProjects = [
  {
    id: 'paradigm',
    rank: '01 — Featured',
    label: 'Data & Analytics · Healthcare Ops',
    title: 'Paradigm',
    tagline:
      'Flujo analítico reproducible: de datos crudos a KPIs validados y reporting para decidir en salud.',
    description:
      'Caso end-to-end de analítica en operación ambulatoria: generación y limpieza de datos, controles de calidad, mart SQL, validación de KPIs, exploración y exports para BI — cubriendo turnos, facturación, cancelaciones, inasistencias y eficiencia operativa.',
    problem:
      'En operaciones de salud, los datos viven en planillas y procesos manuales; sin un workflow reproducible, los KPIs no son confiables ni llegan a tiempo a quien decide.',
    role: 'Diseño del flujo completo: generación/síntesis de datos, ETL y mart SQL, definición y validación de KPIs, exploración, exports para Power BI/Tableau e insights automatizados con trazabilidad.',
    impact:
      'Demuestra cómo estructurar analítica operativa en salud: pipeline reproducible, métricas defendibles y reporting orientado a decisiones — no solo exploración ad hoc.',
    impactHighlight:
      'Impacto: workflow analítico reproducible que convierte datos operativos en decision-support reporting.',
    highlights: [
      'Flujo end-to-end reproducible',
      'Mart SQL y validación de KPIs',
      'Healthcare operations',
      'Decision-support reporting',
    ],
    artifacts: ['Pipeline ETL documentado', 'Mart SQL', 'Exports BI', 'Caso de estudio no-show'],
    accent: 'emerald',
    accentColor: '#00d4b0',
    stack: ['Python', 'SQL', 'Power BI', 'Tableau', 'scikit-learn', 'Databricks', 'Git'],
    signals: ['Analítica reproducible', 'KPIs', 'Healthcare ops', 'BI'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    projectUrl: 'https://paradigm-web-swart.vercel.app/',
  },
  {
    id: 'miconsultorio',
    rank: '02 — Featured',
    label: 'HealthOps · Operación real',
    title: 'Mi Consultorio',
    tagline:
      'En producción en clínicas reales: visibilidad operativa diaria, menos trabajo manual y base transaccional para reporting.',
    description:
      'Sistema de gestión en uso real para turnos, historias clínicas, caja y roles. Genera la capa transaccional que centraliza actividad operativa y habilita análisis de desempeño, seguimiento administrativo y reportes de negocio — con PostgreSQL en Render y automatizaciones de email.',
    problem:
      'Sin un sistema unificado, la operación clínica pierde trazabilidad: agenda, caja e historias se desincronizan y el reporting depende de trabajo manual repetitivo.',
    role: 'Desarrollo full-stack y modelado de datos orientado a operación: permisos, flujos clínicos/administrativos, automatizaciones, despliegue y mejoras iterativas con feedback de clínicas en producción.',
    impact:
      'Valida experiencia traduciendo necesidades operativas en datos estructurados, visibilidad diaria y menos carga manual — el puente entre operación de salud y analítica/BI.',
    impactHighlight:
      'Impacto: plataforma en producción que reduce seguimiento manual y habilita reporting de performance sobre datos transaccionales reales.',
    highlights: [
      'En producción',
      'Clínicas reales',
      'Capa transaccional para BI',
      'Visibilidad operativa diaria',
      'Automatización de seguimiento',
    ],
    artifacts: ['PWA operativa', 'Base PostgreSQL', 'Roles y permisos', 'Deploy en Render'],
    accent: 'violet',
    accentColor: '#8b6fff',
    stack: ['Python', 'Django', 'PostgreSQL', 'PWA', 'REST', 'Reporting'],
    signals: ['Producción', 'Healthcare ops', 'Reporting', 'Automatización'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    projectUrl: 'https://miconsultoriopaginaweb.vercel.app/',
  },
  {
    id: 'halo-brief',
    rank: '03 — Featured',
    label: 'Commerce · Product UX · Automatización responsable',
    title: 'Paradise Halo',
    tagline: 'Orientación digital inicial para comercios y emprendimientos.',
    description:
      'App web experimental para ordenar necesidades digitales de comercios, emprendimientos y proyectos. La persona responde un recorrido guiado y obtiene una primera orientación con posibles próximos pasos, sin reemplazar la evaluación de una persona o servicio especializado.',
    problem:
      'Muchas conversaciones iniciales sobre presencia digital empiezan de forma desordenada: no siempre está claro si conviene una landing, un catálogo, turnos, menú digital, WhatsApp mejor organizado u otra solución simple.',
    role:
      'Diseño y desarrollo del flujo guiado, modelo de respuestas, generación del brief inicial, experiencia pública, panel privado local de seguimiento, exportaciones y criterios de alcance responsable.',
    impact:
      'Ayuda a transformar una consulta inicial en información más clara para conversar, priorizar y evaluar próximos pasos con mejor contexto humano.',
    impactHighlight:
      'Impacto: orientación inicial, automatización responsable y organización de consultas digitales para negocios pequeños.',
    highlights: [
      'Recorrido guiado',
      'Orientación inicial',
      'Brief descargable',
      'Panel privado local',
    ],
    artifacts: [
      'Landing pública',
      'Diagnóstico por pasos',
      'Brief inicial',
      'Panel privado de seguimiento',
    ],
    accent: 'emerald',
    accentColor: '#00d4b0',
    stack: ['React', 'TypeScript', 'Vite', 'LocalStorage', 'Product UX', 'Automatización'],
    signals: ['Comercio local', 'Orientación', 'Producto digital', 'Portfolio'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
    projectUrl: HALO_BRIEF_URL,
  },
]

const secondaryProjects = [
  {
    title: 'MediAudit RCM',
    type: 'HealthTech · Automatización',
    description:
      'Auditoría médica asistida: validación de códigos, reportes y API REST para reducir trabajo manual en procesos administrativos.',
    accent: 'emerald',
  },
  {
    title: 'MediLens AI',
    type: 'Applied AI · Documentación',
    description:
      'Consulta asistida sobre documentación clínica con trazabilidad de fuentes — IA aplicada a un flujo operativo concreto.',
    accent: 'sky',
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
          Analítica operativa, <span className="grad-text-emerald">producción real</span> y
          arquitectura evolutiva
        </h2>
        <p className="prose-muted lead-tight">
          Paradigm demuestra un flujo analítico reproducible en salud; Mi Consultorio valida
          operación con usuarios reales y reporting; Paradise Halo aplica criterio de producto a un
          problema concreto de comercios.
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

            <div className="project-title safe-text-render">{project.title}</div>
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
              <h3 id="project-dialog-title" className="project-dialog-title safe-text-render">
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
              {openProject.id === 'halo-brief' ? (
                isHaloBriefLive(openProject.projectUrl) ? (
                  <a
                    href={openProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-dialog-external"
                  >
                    Ver página del proyecto
                  </a>
                ) : (
                  <span className="halo-cta-note project-dialog-pending">Disponible próximamente</span>
                )
              ) : openProject.projectUrl ? (
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
              className={`secondary-card card card--spotlight card--muted fade-in fade-in-delay-${(i % 3) + 1}`}
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
