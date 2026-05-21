import React, { useState, useRef, useEffect } from 'react'

const featuredProjects = [
  {
    id: 'paradigm',
    rank: '01 — Featured',
    label: 'Data & Analytics · Portfolio',
    title: 'Paradigm',
    tagline: 'De archivos Excel a exploración, insights y reportes listos para decidir.',
    description:
      'Producto de análisis orientado a subir archivos (Excel/CSV), explorar datos, obtener insights automatizados y armar reportes defendibles — pensado como muestra profesional de analítica aplicada.',
    problem:
      'Muchos equipos trabajan con planillas dispersas y poco tiempo para explorar patrones, limpiar datos y traducir hallazgos en decisiones claras.',
    role: 'Diseño y desarrollo end-to-end: carga de archivos, limpieza y exploración, lógica de insights, interfaz usable y documentación del caso para portfolio.',
    impact:
      'Demuestra capacidad de análisis estructurado, storytelling con datos y entrega de un producto analítico que un reclutador o cliente puede probar.',
    impactHighlight:
      'Impacto: análisis de datos, exploración asistida y reporting en un producto portfolio-ready.',
    highlights: [
      'Carga Excel/CSV',
      'Exploración de datos',
      'Insights automatizados',
      'Reporting accionable',
    ],
    artifacts: ['Flujo de upload', 'Exploración interactiva', 'Reportes exportables', 'README de proyecto'],
    accent: 'emerald',
    accentColor: '#00d4b0',
    stack: ['Python', 'Pandas', 'SQL', 'Excel/CSV', 'FastAPI', 'Reporting'],
    signals: ['Analítica', 'Exploración', 'Automatización', 'Portfolio'],
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
    tagline: 'Gestión clínica en producción: usuarios reales, flujos diarios y visibilidad operativa.',
    description:
      'Sistema interno para consultorios: agenda, historias clínicas, caja, roles y reporting operativo. PostgreSQL en Render, automatización de emails y uso diario en clínicas argentinas.',
    problem:
      'La operación clínica depende de procesos manuales donde errores en agenda, caja o historias impactan directamente a pacientes y al equipo.',
    role: 'Desarrollo full-stack, modelado de datos, permisos, automatizaciones, despliegue y mejoras continuas según feedback de usuarios reales.',
    impact:
      'Valida experiencia con datos imperfectos, restricciones operativas y software mantenible — no solo análisis en notebook.',
    impactHighlight:
      'Impacto: operación clínica digitalizada con reporting y visibilidad de procesos reales.',
    highlights: [
      'Usuarios reales',
      'Agenda e historias clínicas',
      'Caja y reporting',
      'Automatización operativa',
    ],
    artifacts: ['PWA operativa', 'Base PostgreSQL', 'Roles y permisos', 'Deploy en Render'],
    accent: 'violet',
    accentColor: '#8b6fff',
    stack: ['Python', 'Django', 'PostgreSQL', 'PWA', 'REST', 'Reporting'],
    signals: ['Producción', 'Salud', 'Operación', 'Mantenible'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    projectUrl: 'https://miconsultoriopaginaweb.vercel.app/',
  },
  {
    id: 'paradise',
    rank: '03 — Featured',
    label: 'Product vision · Applied AI',
    title: 'Paradise',
    tagline: 'Ecosistema modular con visión de producto e IA aplicada — evolución a largo plazo.',
    description:
      'Línea de producto modular que organiza datos, interfaces y capacidades de IA bajo una arquitectura evolutiva. Muestra pensamiento de producto y dirección técnica sin presentarse como SaaS AI-first en producción masiva.',
    problem:
      'Ideas amplias de producto con IA suelen fragmentarse en demos sueltas difíciles de mantener y explicar a equipos o inversores.',
    role: 'Diseño de arquitectura por módulos, definición de límites, UX de producto y roadmap de evolución iterativa.',
    impact:
      'Comunica visión de producto, modularidad y criterio para escalar ideas — con IA aplicada como capa, no como identidad única del perfil.',
    impactHighlight:
      'Impacto: ecosistema modular con visión de IA aplicada integrada de forma progresiva.',
    highlights: [
      'Arquitectura modular',
      'Visión de producto',
      'IA aplicada progresiva',
      'Evolución iterativa',
    ],
    artifacts: ['Landing y narrativa', 'Módulos verticales', 'Convenciones de sistema', 'Iteración con Git'],
    accent: 'sky',
    accentColor: '#38b8f5',
    stack: ['React', 'TypeScript', 'System design', 'APIs REST', 'Product iteration'],
    signals: ['Modular', 'Product-led', 'Visión', 'Evolución'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    projectUrl: 'https://paradise-web-alpha.vercel.app/',
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
          Análisis, operación y <span className="grad-text-emerald">visión de producto</span>
        </h2>
        <p className="prose-muted lead-tight">
          Paradigm muestra analítica y reporting; Mi Consultorio valida operación real en salud;
          Paradise refleja visión modular con IA aplicada — cada pieza con un problema concreto
          detrás.
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
