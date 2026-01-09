import React, { useCallback, useEffect, useMemo, useState } from "react";

const PROJECT_DETAILS = {
  "SmartClinic No-Show Predictor": {
    resumen:
      "Proyecto de Machine Learning + BI para predecir probabilidad de no-show (inasistencia) en turnos médicos con datos sintéticos y visualización en Power BI.",
    objetivo: [
      "Simular comportamiento de consultorio.",
      "Entrenar Regresión Logística para estimar probabilidad de no-show por turno.",
      "Dashboard en Power BI para factores de riesgo y ranking de turnos.",
    ],
    datos: [
      "10.000 turnos sintéticos (sin datos reales).",
      "Archivos: no_show_sintetico.csv y no_show_scores.csv.",
    ],
    modelo: [
      "Train/test 80/20 estratificado.",
      "StandardScaler + OneHotEncoder.",
      "LogisticRegression (class_weight='balanced').",
    ],
    metricas: [
      "Tasa no-show: 20,5%",
      "Accuracy: 57,3%",
      "Recall no-show: 52,7%",
      "ROC-AUC: 0,586",
    ],
    dashboard: [
      "Resumen general",
      "Factores de riesgo (distancia, franja horaria, día)",
      "Riesgo de no-show (ranking por no_show_proba)",
    ],
    stack: "Python (NumPy, Pandas, scikit-learn), Power BI",
  },

  "Plataforma Geriátricos": {
    resumen:
      "Sistema de gestión para hogares geriátricos con backend API REST y frontend PWA mobile-first.",
    destinatarios: [
      "Propietarios/Administradores",
      "Profesionales de la salud",
      "Personal administrativo",
    ],
    caracteristicas: [
      "Gestión de residentes (info personal/médica, admisiones/estadías, contactos de emergencia).",
      "Gestión clínica (resúmenes, diagnósticos, notas clínicas, alergias, medicaciones actuales).",
      "Gestión de medicaciones (planes, dosificación, frecuencia, horarios, pendientes del día).",
      "Gestión financiera (solo OWNER): gastos/ingresos, transacciones, múltiples monedas, control por sede.",
      "Documentos y certificados.",
      "Seguridad: JWT + roles + auditoría.",
      "PWA: instalable, offline, optimizada para móviles.",
      'Web Push (noticias diarias): configuración desde "Mi cuenta".',
    ],
    roles: [
      "OWNER: acceso completo + finanzas + usuarios.",
      "DOCTOR: gestión clínica/medicación; sin finanzas.",
    ],
    stack:
      "Backend: FastAPI, SQLAlchemy 2.0, PostgreSQL, Alembic, JWT, bcrypt, slowapi. Frontend: React, TypeScript, Vite, Tailwind, React Router, vite-plugin-pwa.",
  },

  "Mi Consultorio": {
    resumen: "Sistema integral en Python/Django para gestión de consultorios médicos.",
    highlights:
      "Interfaz moderna (gradientes, glassmorphism), responsive, dashboard analítico, centro de ayuda.",
    modulos: [
      "Historias clínicas digitales con CKEditor (texto enriquecido).",
      "Turnos y agenda: estados (Pendiente/Asistió/Cancelado), validación anti-duplicados, control de asistencia.",
      "Notificaciones por email: confirmación y recordatorios (48h) + resumen de agenda a médicos.",
      "Recetas digitales: integración con MisRX, repetir receta, PDFs listos para imprimir.",
      "Gestión financiera: caja diaria automatizada, ingresos/egresos, reportes.",
      "Seguridad: PIN 4 dígitos para acciones sensibles, roles diferenciados (médicos vs administrativos).",
    ],
    stack: "Django, Python, Bootstrap/Jazzmin, CKEditor",
  },

  "Consultorio Barcala": {
    resumen: "Sitio web del Consultorio Barcala desarrollado con React + TypeScript + Vite.",
    estructura: "components/, pages/, design-system/, services/, types/, utils/.",
    stack: "React, TypeScript, Framer Motion",
  },
};

const SECTIONS = ["about", "projects", "skills", "education", "experience"];

const ARROW = "\u2192";
const HEART = "\u2665";
const DIAMOND = "\u25C6";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(null);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openProjectDetails = useCallback((title) => {
    setSelectedProjectTitle(title);
    setIsProjectModalOpen(true);
  }, []);

  const closeProjectDetails = useCallback(() => {
    setIsProjectModalOpen(false);
    setSelectedProjectTitle(null);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoaded(true), 120);

    const handleScroll = () => {
      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          return;
        }
      }
    };

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Set initial active section
    handleScroll();

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!isProjectModalOpen) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") closeProjectDetails();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isProjectModalOpen, closeProjectDetails]);

  const selectedProject = useMemo(() => {
    if (!selectedProjectTitle) return null;
    return PROJECT_DETAILS[selectedProjectTitle];
  }, [selectedProjectTitle]);

  return (
    <div style={styles.container}>
      <style>{globalStyles}</style>

      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          transform: cursorVariant === "hover" ? "scale(2.5)" : "scale(1)",
          backgroundColor:
            cursorVariant === "hover" ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.8)",
        }}
      />

      <div className="bg-gradient-1" />
      <div className="bg-gradient-2" />
      <div className="noise-overlay" />

      {/* NAV */}
      <nav style={styles.nav} className="nav-blur">
        <div style={styles.navContent}>
          <span style={styles.logo} className="logo-animate">
            <span style={{ fontWeight: 700, color: "#ffffff" }}>Agustín</span>
            <span style={{ fontWeight: 300, color: "#6366f1", marginLeft: 8 }}>Delgado</span>
          </span>

          <div style={styles.navLinks}>
            {SECTIONS.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link"
                style={{
                  ...styles.navLink,
                  animationDelay: `${i * 0.1}s`,
                  ...(activeSection === item ? styles.navLinkActive : {}),
                }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && <span className="nav-indicator" />}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header style={styles.hero}>
        <div className={`hero-content ${isLoaded ? "hero-loaded" : ""}`}>
          <div style={styles.heroBadge} className="hero-badge">
            <span className="badge-dot" />
            Disponible para nuevos proyectos
          </div>

          <h1 style={styles.heroTitle}>
            <span className="title-line">Agustín</span>
            <span className="title-line title-accent">Delgado</span>
          </h1>

          <div style={styles.heroRoles}>
            <span className="role-tag">Machine Learning Engineer</span>
            <span className="role-divider">{DIAMOND}</span>
            <span className="role-tag">Data Analyst</span>
            <span className="role-divider">{DIAMOND}</span>
            <span className="role-tag">Full Stack Developer</span>
          </div>

          <p style={styles.heroDescription}>
            Transformo datos en decisiones estratégicas y construyo soluciones de IA para el sector healthcare.
          </p>

          <div style={styles.heroContact}>
            <a
              href="mailto:augusto.delgado00@hotmail.com"
              style={styles.contactLink}
              className="contact-pill"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <EmailIcon /> augusto.delgado00@hotmail.com
            </a>

            <a
              href="tel:+541150521473"
              style={styles.contactLink}
              className="contact-pill"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <PhoneIcon /> +54 11 5052-1473
            </a>

            <span style={styles.contactLink} className="contact-pill">
              <LocationIcon /> Buenos Aires, Argentina
            </span>

            <a
              href="https://linkedin.com/in/agustin-delgado-data98615190"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactLink}
              className="contact-pill"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>

          <div style={styles.heroStats}>
            <div style={styles.stat} className="stat-card">
              <span style={styles.statNumber} className="stat-number">
                62
              </span>
              <span style={styles.statLabel}>Certificaciones</span>
            </div>

            <div style={styles.stat} className="stat-card">
              <span style={styles.statNumber} className="stat-number">
                4+
              </span>
              <span style={styles.statLabel}>Proyectos en Prod</span>
            </div>

            <div style={styles.stat} className="stat-card">
              <span style={styles.statNumber} className="stat-number">
                7+
              </span>
              <span style={styles.statLabel}>Años Healthcare</span>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            <span style={styles.sectionNumber}>01</span>Perfil Profesional
          </h2>

          <div style={styles.aboutGrid}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph} className="fade-in-up">
                Especialista en <strong>Inteligencia Artificial y Análisis de Datos</strong> con 62 certificaciones
                profesionales y experiencia práctica desarrollando soluciones tecnológicas para el sector healthcare.
              </p>
              <p style={styles.paragraph} className="fade-in-up">
                Combino sólidos fundamentos en Machine Learning, desarrollo Full Stack y Business Intelligence para
                transformar datos en decisiones estratégicas de negocio.
              </p>
              <p style={styles.paragraph} className="fade-in-up">
                Mi enfoque se centra en aplicar IA de forma práctica para resolver problemas reales: desde la predicción
                de inasistencias médicas hasta la automatización de procesos administrativos complejos.
              </p>
            </div>

            <div style={styles.aboutHighlights}>
              <HighlightCard title="Especialización Healthcare" text="Proyectos reales implementados en el sector salud" />
              <HighlightCard title="Stack Completo" text="Python, FastAPI, React, Django, PostgreSQL" />
              <HighlightCard title="BI Avanzado" text="Power BI, Tableau, SQL, Pandas, NumPy" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            <span style={styles.sectionNumber}>02</span>Proyectos Destacados
          </h2>

          <div style={styles.projectsGrid} className="projects-grid">
            <ProjectCard
              title="SmartClinic No-Show Predictor"
              category="Machine Learning + BI"
              tags={["Python", "scikit-learn", "Power BI", "SQL"]}
              context="Sistema predictivo que analiza 10.000+ turnos para identificar patrones de inasistencias."
              impact="Dashboard interactivo con 3 vistas analíticas para decisiones data-driven."
              color="#10b981"
              setCursorVariant={setCursorVariant}
              onOpenDetails={openProjectDetails}
            />
            <ProjectCard
              title="Plataforma Geriátricos"
              category="Full Stack + PWA"
              tags={["FastAPI", "React", "TypeScript", "PostgreSQL"]}
              context="Sistema integral con modelo relacional y soporte multi-sede."
              impact="Gestión completa con enfoque mobile-first y modo offline."
              color="#3b82f6"
              setCursorVariant={setCursorVariant}
              onOpenDetails={openProjectDetails}
            />
            <ProjectCard
              title="Mi Consultorio"
              category="Healthcare SaaS"
              tags={["Django", "Python", "Bootstrap"]}
              context="Plataforma para profesionales de salud con historias clínicas y recetas digitales."
              impact="Métricas operativas + generación de PDFs listos para imprimir."
              color="#8b5cf6"
              setCursorVariant={setCursorVariant}
              onOpenDetails={openProjectDetails}
            />
            <ProjectCard
              title="Consultorio Barcala"
              category="Modern Web"
              tags={["React", "TypeScript", "Framer Motion"]}
              context="Sitio web moderno con sistema de diseño y animaciones."
              impact="Experiencia fluida con arquitectura clara y escalable."
              color="#f59e0b"
              setCursorVariant={setCursorVariant}
              onOpenDetails={openProjectDetails}
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            <span style={styles.sectionNumber}>03</span>Stack Tecnológico
          </h2>

          <div style={styles.skillsGrid}>
            <SkillCategory title="Lenguajes" icon="DEV" skills={["Python", "TypeScript", "JavaScript", "SQL"]} />
            <SkillCategory title="Machine Learning" icon="ML" skills={["scikit-learn", "Pandas", "NumPy", "TensorFlow"]} />
            <SkillCategory title="Backend" icon="API" skills={["FastAPI", "Django", "SQLAlchemy", "JWT Auth"]} />
            <SkillCategory title="Frontend" icon="UI" skills={["React", "TypeScript", "Vite", "Tailwind"]} />
            <SkillCategory title="Databases" icon="DB" skills={["PostgreSQL", "SQLite", "Supabase"]} />
            <SkillCategory title="BI Tools" icon="BI" skills={["Power BI", "Tableau", "Data Viz"]} />
            <SkillCategory title="DevOps" icon="OPS" skills={["Git", "Vercel", "Docker", "CI/CD"]} />
            <SkillCategory title="Core Skills" icon="CORE" skills={["Problem Solving", "Agile", "APIs", "Testing"]} />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ ...styles.section, ...styles.sectionAlt }}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            <span style={styles.sectionNumber}>04</span>Formación
          </h2>

          <div style={styles.educationGrid}>
            <EducationCard
              title="Tecnicatura en IA y Ciencia de Datos"
              institution="Instituto Superior Santo Domingo"
              period="2024 - Actualidad"
              status="En curso"
            />
            <EducationCard title="Analista de Datos" institution="Coderhouse" period="2024 - 2025" status="Finalizado" />
            <EducationCard
              title="Educación Secundaria (Bachiller) – Humanidades"
              institution="Colegio del Parque"
              period="2013 - 2018"
              status="Finalizado"
            />
          </div>

          <div style={styles.certificationsBox} className="cert-box">
            <div className="cert-number">62</div>
            <h3 style={styles.certTitle}>Certificaciones Profesionales</h3>
            <p style={styles.certSubtitle}>Obtenidas a través de Coursera, LinkedIn Learning, Google y más</p>
            <div style={styles.certCategories}>
              {["Data Science", "Machine Learning", "Python", "SQL & BI", "Cloud & DevOps", "Cybersecurity"].map((cat) => (
                <span key={cat} style={styles.certBadge} className="cert-tag">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            <span style={styles.sectionNumber}>05</span>Experiencia
          </h2>

          <div style={styles.experienceTimeline}>
            <ExperienceCard
              title="Administrativo & ML Engineer"
              company="Consultorio Médico Privado"
              period="2018 - Presente"
              description="Desarrollo e implementación de soluciones ML para optimización de turnos. Digitalización completa de procesos administrativos con sistemas propios."
              current
            />
            <ExperienceCard
              title="Desarrollador Full Stack"
              company="Blanc Labs (Proyecto Rotoplas)"
              period="2021"
              description="Participación en proyecto de transformación digital. Desarrollo frontend con React y colaboración en arquitectura de microservicios."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerMain}>
            <h3 style={styles.footerTitle}>¿Trabajamos juntos?</h3>
            <p style={styles.footerText}>Estoy buscando nuevas oportunidades en ML Engineering, Data Analytics o Full Stack Development.</p>
            <a
              href="mailto:augusto.delgado00@hotmail.com"
              style={styles.footerCta}
              className="cta-button"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Contactame {ARROW}
            </a>
          </div>

          <div style={styles.footerLinks}>
            <a href="mailto:augusto.delgado00@hotmail.com" style={styles.footerLink} className="footer-link">
              Email
            </a>
            <a
              href="https://linkedin.com/in/agustin-delgado-data98615190"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.footerLink}
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/agustindelgado"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.footerLink}
              className="footer-link"
            >
              GitHub
            </a>
          </div>

          <div style={styles.footerBottom}>
            <p style={styles.footerCopy}>© 2025 Agustín Delgado. Diseñado & desarrollado con {HEART}</p>
            <div style={styles.footerLang}>
              <span style={styles.langBadge}>ES — Nativo</span>
              <span style={styles.langBadge}>EN — B2 (Avanzado)</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {isProjectModalOpen && selectedProjectTitle && selectedProject && (
        <div
          onClick={closeProjectDetails}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              backgroundColor: "rgba(20, 20, 22, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: 24,
              maxWidth: 600,
              width: "90%",
              maxHeight: "70vh",
              overflowY: "auto",
              padding: 32,
              backdropFilter: "blur(10px)",
            }}
          >
            <button
              onClick={closeProjectDetails}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(99, 102, 241, 0.1)",
                border: "none",
                width: 36,
                height: 36,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 20,
                color: "#a3a3a3",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                e.currentTarget.style.color = "#a3a3a3";
              }}
              aria-label="Cerrar"
              title="Cerrar"
            >
              {"\u00D7"}
            </button>

            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 24,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {selectedProjectTitle}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <ModalBlock title="Resumen">
                <p style={modalP}>{selectedProject.resumen}</p>
              </ModalBlock>

              {selectedProject.objetivo && (
                <ModalList title="Objetivo" items={selectedProject.objetivo} />
              )}
              {selectedProject.datos && <ModalList title="Datos" items={selectedProject.datos} />}
              {selectedProject.modelo && <ModalList title="Modelo" items={selectedProject.modelo} />}
              {selectedProject.metricas && <ModalList title="Métricas" items={selectedProject.metricas} />}
              {selectedProject.dashboard && <ModalList title="Dashboard" items={selectedProject.dashboard} />}
              {selectedProject.destinatarios && <ModalList title="Destinatarios" items={selectedProject.destinatarios} />}
              {selectedProject.caracteristicas && <ModalList title="Características" items={selectedProject.caracteristicas} />}
              {selectedProject.roles && <ModalList title="Roles" items={selectedProject.roles} />}

              {selectedProject.highlights && (
                <ModalBlock title="Highlights">
                  <p style={modalP}>{selectedProject.highlights}</p>
                </ModalBlock>
              )}

              {selectedProject.modulos && <ModalList title="Módulos" items={selectedProject.modulos} />}

              {selectedProject.estructura && (
                <ModalBlock title="Estructura">
                  <p style={modalP}>{selectedProject.estructura}</p>
                </ModalBlock>
              )}

              {selectedProject.stack && (
                <ModalBlock title="Stack">
                  <p style={modalP}>{selectedProject.stack}</p>
                </ModalBlock>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Components ----------------------------- */

function ProjectCard(props) {
  const { title, category, tags, context, impact, color, setCursorVariant, onOpenDetails } = props;

  const accentStyle = { "--accent-color": color };

  return (
    <div
      className="project-card"
      style={accentStyle}
      onMouseEnter={() => setCursorVariant("hover")}
      onMouseLeave={() => setCursorVariant("default")}
      role="article"
    >
      <div className="project-glow" style={{ background: color }} />
      <button
        className="project-more"
        onClick={(e) => {
          e.stopPropagation();
          onOpenDetails(title);
        }}
        style={{ background: color }}
        title="Ver detalles"
        aria-label={`Ver detalles de ${title}`}
      >
        {ARROW}
      </button>

      <div className="project-content">
        <div className="project-header">
          <span className="project-category">{category}</span>
          <div className="project-line" style={{ backgroundColor: color }} />
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-context">{context}</p>

        <p className="project-impact">
          <span style={{ color }}>{ARROW}</span> {impact}
        </p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCategory(props) {
  const { title, icon, skills } = props;
  return (
    <div className="skill-card">
      <div style={styles.skillHeader}>
        <span style={styles.skillIcon}>{icon}</span>
        <h4 style={styles.skillTitle}>{title}</h4>
      </div>
      <div style={styles.skillList}>
        {skills.map((skill) => (
          <span key={skill} style={styles.skillBadge} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationCard(props) {
  const { title, institution, period, status } = props;
  const isActive = status === "En curso";
  return (
    <div style={styles.educationCard} className="edu-card">
      <div style={styles.educationHeader}>
        <h4 style={styles.educationTitle}>{title}</h4>
        <span
          style={{
            ...styles.educationStatus,
            backgroundColor: isActive ? "#dbeafe" : "#f3f4f6",
            color: isActive ? "#1d4ed8" : "#6b7280",
          }}
        >
          {status}
        </span>
      </div>
      <p style={styles.educationInstitution}>{institution}</p>
      <p style={styles.educationPeriod}>{period}</p>
    </div>
  );
}

function ExperienceCard(props) {
  const { title, company, period, description, current } = props;

  return (
    <div style={styles.experienceCard} className="exp-card">
      <div style={styles.experienceDot} className={current ? "dot-pulse" : ""} />
      <div style={styles.experienceContent}>
        <div style={styles.experienceHeader}>
          <h4 style={styles.experienceTitle}>{title}</h4>
          {current && <span style={styles.currentBadge}>Actual</span>}
        </div>
        <p style={styles.experienceCompany}>{company}</p>
        <p style={styles.experiencePeriod}>{period}</p>
        <p style={styles.experienceDescription}>{description}</p>
      </div>
    </div>
  );
}

function HighlightCard(props) {
  const { title, text } = props;
  return (
    <div style={styles.highlight} className="highlight-card">
      <div style={styles.highlightIcon}>●</div>
      <div>
        <h4 style={styles.highlightTitle}>{title}</h4>
        <p style={styles.highlightText}>{text}</p>
      </div>
    </div>
  );
}

/* ----------------------------- Modal helpers ----------------------------- */

function ModalBlock(props) {
  return (
    <div className="modal-section">
      <h3 className="modal-section-title" style={modalTitle}>
        {props.title}
      </h3>
      {props.children}
    </div>
  );
}

function ModalList(props) {
  return (
    <div className="modal-section">
      <h3 className="modal-section-title" style={modalTitle}>
        {props.title}
      </h3>
      <ul style={modalList}>
        {props.items.map((item, i) => (
          <li key={`${props.title}-${i}`} style={modalLi}>
            <span style={modalBullet}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------- Icons ----------------------------- */

function EmailIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ----------------------------- Styles ----------------------------- */

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

*{margin:0;padding:0;box-sizing:border-box;cursor:none}
html{scroll-behavior:smooth}
body{
  font-family:'Outfit',-apple-system,BlinkMacSystemFont,sans-serif;
  background:#050505;color:#e5e5e5;line-height:1.6;overflow-x:hidden
}
strong{color:#fff;font-weight:600}
::selection{background:rgba(99,102,241,0.4);color:#fff}

.custom-cursor{
  position:fixed;width:20px;height:20px;border-radius:50%;
  pointer-events:none;z-index:9999;
  transition:transform .15s ease-out,background-color .15s ease;
  mix-blend-mode:difference;will-change:transform
}
@media(max-width:768px){
  .custom-cursor{display:none}
  *{cursor:auto}
}

.bg-gradient-1{
  position:fixed;top:-50%;left:-50%;width:200%;height:200%;
  background:radial-gradient(circle at 30% 30%,rgba(99,102,241,0.08) 0%,transparent 50%);
  animation:float 20s ease-in-out infinite;pointer-events:none;z-index:0
}
.bg-gradient-2{
  position:fixed;top:-50%;right:-50%;width:200%;height:200%;
  background:radial-gradient(circle at 70% 70%,rgba(236,72,153,0.05) 0%,transparent 50%);
  animation:float 25s ease-in-out infinite reverse;pointer-events:none;z-index:0
}
.noise-overlay{
  position:fixed;top:0;left:0;width:100%;height:100%;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity:0.03;pointer-events:none;z-index:1
}

@keyframes float{
  0%,100%{transform:translate(0,0) rotate(0deg)}
  33%{transform:translate(30px,-30px) rotate(5deg)}
  66%{transform:translate(-20px,20px) rotate(-5deg)}
}

.nav-blur{backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%)}
.nav-link{position:relative;animation:fadeInDown .5s ease forwards;opacity:0}
.nav-link:hover{color:#fff!important;background:rgba(99,102,241,0.1)!important}
.nav-indicator{
  position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);
  width:20px;height:2px;background:linear-gradient(90deg,#6366f1,#ec4899);border-radius:2px
}
.logo-animate{animation:logoReveal 1s ease forwards}
@keyframes logoReveal{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}

.hero-content{
  opacity:0;transform:translateY(40px);
  transition:all 1s cubic-bezier(0.16,1,0.3,1);
  text-align:center
}
.hero-loaded{opacity:1;transform:translateY(0)}
.badge-dot{
  display:inline-block;width:8px;height:8px;background:#10b981;border-radius:50%;
  margin-right:8px;animation:dot-pulse 1.5s ease-in-out infinite
}
@keyframes dot-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.2)}}

.title-line{display:block;animation:slideUp .8s ease forwards;animation-delay:.2s;opacity:0;transform:translateY(100%)}
.title-accent{
  background:linear-gradient(135deg,#6366f1 0%,#ec4899 50%,#f59e0b 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation-delay:.4s
}
@keyframes slideUp{to{opacity:1;transform:translateY(0)}}

.hero-roles{animation:fadeIn .8s ease forwards;animation-delay:.6s;opacity:0}
@keyframes fadeIn{to{opacity:1}}
.hero-contact{animation:fadeIn .8s ease forwards;animation-delay:.8s;opacity:0}
.hero-stats{animation:fadeIn .8s ease forwards;animation-delay:.9s;opacity:0}

.role-tag{
  display:inline-block;padding:4px 12px;
  background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);
  border-radius:20px;font-size:14px;transition:all .3s ease
}
.role-tag:hover{background:rgba(99,102,241,0.2);transform:translateY(-2px)}
.role-divider{margin:0 12px;color:#6366f1;font-size:10px}

.contact-pill{transition:all .3s ease;border:1px solid rgba(255,255,255,0.1)}
.contact-pill:hover{
  background:rgba(99,102,241,0.15)!important;border-color:rgba(99,102,241,0.3);
  transform:translateY(-2px)
}

.stat-card{
  transition:all .3s ease;border:1px solid rgba(255,255,255,0.05);background:rgba(255,255,255,0.02)
}
.stat-card:hover{
  transform:translateY(-5px);border-color:rgba(99,102,241,0.3);background:rgba(99,102,241,0.05)
}
.stat-number{
  background:linear-gradient(135deg,#6366f1,#ec4899);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text
}

.section-title{position:relative}
.section-title::after{
  content:'';position:absolute;bottom:-10px;left:0;width:60px;height:3px;
  background:linear-gradient(90deg,#6366f1,#ec4899);border-radius:2px
}

.project-card{
  position:relative;padding:32px;background:rgba(20,20,22,0.8);
  border-radius:24px;border:1px solid rgba(255,255,255,0.05);
  overflow:hidden;transition:all .4s cubic-bezier(0.16,1,0.3,1)
}
.project-card:hover{
  transform:translateY(-8px) scale(1.02);border-color:var(--accent-color);
  box-shadow:0 20px 40px -20px var(--accent-color)
}
.project-glow{position:absolute;top:0;left:0;width:100%;height:4px;opacity:0.8}
.project-card:hover .project-glow{height:100%;opacity:0.05;transition:all .4s ease}

.project-content{position:relative;z-index:1;height:100%;display:flex;flex-direction:column}
.project-header{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.project-category{
  font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--accent-color)
}
.project-line{flex:1;height:1px;opacity:0.3}
.project-title{font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:16px;line-height:1.3}
.project-context{font-size:15px;color:#a3a3a3;margin-bottom:12px;flex:1}
.project-impact{font-size:14px;color:#d4d4d4;margin-bottom:20px;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px}
.project-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}
.project-tag{
  font-size:12px;font-family:'JetBrains Mono',monospace;padding:6px 12px;
  background:rgba(255,255,255,0.05);border-radius:6px;color:#a3a3a3;transition:all .2s ease
}
.project-card:hover .project-tag{background:rgba(255,255,255,0.1)}

.project-more{
  position:absolute;top:18px;right:18px;width:36px;height:36px;border-radius:8px;border:none;
  font-weight:700;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;
  transition:all .3s ease;z-index:2;color:#fff
}
.project-more:hover{transform:scale(1.1);box-shadow:0 8px 16px rgba(99,102,241,0.3)}

.skill-card{
  padding:24px;background:rgba(255,255,255,0.02);
  border-radius:16px;border:1px solid rgba(255,255,255,0.05);transition:all .3s ease
}
.skill-card:hover{transform:translateY(-4px);border-color:rgba(99,102,241,0.3);background:rgba(99,102,241,0.05)}

.edu-card{transition:all .3s ease}
.edu-card:hover{transform:translateY(-4px);border-color:rgba(99,102,241,0.3)}

.cert-box{position:relative;overflow:hidden}
.cert-number{
  position:absolute;top:-20px;right:-20px;font-family:'Space Grotesk',sans-serif;
  font-size:150px;font-weight:800;color:rgba(99,102,241,0.05);line-height:1;pointer-events:none
}
.cert-tag{transition:all .2s ease}
.cert-tag:hover{background:rgba(99,102,241,0.2);transform:translateY(-2px)}

.exp-card{transition:all .3s ease}
.exp-card:hover{transform:translateX(8px)}
.dot-pulse{position:relative}
.dot-pulse::after{
  content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:100%;height:100%;border-radius:50%;background:#3b82f6;animation:pulse-ring 1.5s ease-out infinite
}
@keyframes pulse-ring{
  0%{transform:translate(-50%,-50%) scale(1);opacity:0.5}
  100%{transform:translate(-50%,-50%) scale(2.5);opacity:0}
}

.cta-button{position:relative;overflow:hidden;transition:all .3s ease}
.cta-button::before{
  content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left .5s ease
}
.cta-button:hover{transform:translateY(-3px);box-shadow:0 10px 30px -10px rgba(99,102,241,0.5)}
.cta-button:hover::before{left:100%}

.footer-link{position:relative;transition:all .2s ease}
.footer-link::after{
  content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#6366f1;transition:width .3s ease
}
.footer-link:hover{color:#fff!important}
.footer-link:hover::after{width:100%}

.highlight-card{transition:all .3s ease}
.highlight-card:hover{transform:translateX(8px);background:rgba(99,102,241,0.05)}

.fade-in-up{animation:fadeInUp .6s ease forwards;opacity:0}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:900px){
  .hero-contact{flex-direction:column;align-items:center}
  .hero-stats{flex-direction:column;align-items:center}
}
@media(max-width:768px){
  .projects-grid{grid-template-columns:1fr!important}
  .project-more{top:12px;right:12px;width:32px;height:32px;font-size:16px}
}
`;

const modalTitle = {
  fontSize: 16,
  fontWeight: 600,
  color: "#6366f1",
  marginBottom: 8,
  textTransform: "uppercase",
  letterSpacing: 1,
};

const modalP = {
  fontSize: 15,
  color: "#d4d4d4",
  lineHeight: 1.7,
};

const modalList = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const modalLi = {
  fontSize: 14,
  color: "#a3a3a3",
  paddingLeft: 20,
  position: "relative",
};

const modalBullet = {
  position: "absolute",
  left: 0,
  color: "#6366f1",
};

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#050505", position: "relative" },

  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "rgba(5, 5, 5, 0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  navContent: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    letterSpacing: "-0.5px",
    display: "flex",
    alignItems: "center",
  },
  navLinks: { display: "flex", gap: 8 },
  navLink: {
    background: "none",
    border: "none",
    color: "#a3a3a3",
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 18px",
    borderRadius: 10,
    cursor: "none",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  },
  navLinkActive: { color: "#ffffff", backgroundColor: "rgba(99, 102, 241, 0.1)" },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "120px 32px 80px",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    border: "1px solid rgba(16, 185, 129, 0.2)",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 500,
    color: "#10b981",
    marginBottom: 32,
  },
  heroTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(48px, 10vw, 100px)",
    fontWeight: 800,
    lineHeight: "1",
    letterSpacing: "-3px",
    marginBottom: 24,
    color: "#ffffff",
  },
  heroRoles: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 24,
  },
  heroDescription: {
    fontSize: 18,
    color: "#a3a3a3",
    maxWidth: 520,
    margin: "0 auto 32px",
    textAlign: "center",
    lineHeight: 1.7,
  },
  heroContact: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginBottom: 48,
  },
  contactLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 18px",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 10,
    color: "#a3a3a3",
    textDecoration: "none",
    fontSize: 14,
    transition: "all 0.2s ease",
  },
  heroStats: { display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" },
  stat: {
    textAlign: "center",
    padding: "24px 32px",
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 16,
    minWidth: 140,
  },
  statNumber: {
    display: "block",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 42,
    fontWeight: 800,
    marginBottom: 4,
  },
  statLabel: { fontSize: 13, color: "#737373", textTransform: "uppercase", letterSpacing: 1 },

  icon: { width: 16, height: 16 },

  section: { padding: "120px 32px", position: "relative", zIndex: 2 },
  sectionAlt: { backgroundColor: "rgba(255,255,255,0.01)" },
  sectionContent: { maxWidth: 1200, margin: "0 auto" },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 36,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 48,
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  sectionNumber: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 14,
    fontWeight: 500,
    color: "#6366f1",
    padding: "6px 12px",
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    borderRadius: 6,
  },

  aboutGrid: { display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 60, alignItems: "start" },
  aboutText: { display: "flex", flexDirection: "column", gap: 20 },
  paragraph: { fontSize: 17, color: "#d4d4d4", lineHeight: 1.8 },

  aboutHighlights: { display: "flex", flexDirection: "column", gap: 20 },
  highlight: {
    display: "flex",
    gap: 16,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.02)",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.05)",
  },
  highlightIcon: { fontSize: 28, flexShrink: 0, color: "#6366f1" },
  highlightTitle: { fontSize: 16, fontWeight: 600, color: "#ffffff", marginBottom: 4 },
  highlightText: { fontSize: 14, color: "#a3a3a3" },

  projectsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 },

  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
  skillHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 },
  skillIcon: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(99,102,241,0.25)",
    color: "#c7d2fe",
    background: "rgba(99,102,241,0.12)",
    fontFamily: "'JetBrains Mono', monospace",
  },
  skillTitle: { fontSize: 15, fontWeight: 600, color: "#ffffff" },
  skillList: { display: "flex", flexWrap: "wrap", gap: 8 },
  skillBadge: { fontSize: 13, color: "#a3a3a3", padding: "6px 12px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 6 },

  educationGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 48 },
  educationCard: { padding: 28, backgroundColor: "rgba(20, 20, 22, 0.8)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" },
  educationHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 },
  educationTitle: { fontSize: 16, fontWeight: 600, color: "#ffffff", flex: 1, lineHeight: 1.4 },
  educationStatus: { fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 999, whiteSpace: "nowrap" },
  educationInstitution: { fontSize: 14, color: "#a3a3a3", marginBottom: 4 },
  educationPeriod: { fontSize: 13, color: "#737373" },

  certificationsBox: {
    padding: 40,
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(236, 72, 153, 0.08))",
    borderRadius: 24,
    border: "1px solid rgba(255,255,255,0.05)",
    position: "relative",
    overflow: "hidden",
  },
  certTitle: { fontSize: 22, fontWeight: 700, color: "#ffffff", marginBottom: 8 },
  certSubtitle: { fontSize: 14, color: "#a3a3a3", marginBottom: 16 },
  certCategories: { display: "flex", flexWrap: "wrap", gap: 8 },
  certBadge: { fontSize: 12, color: "#c7d2fe", padding: "6px 10px", backgroundColor: "rgba(99, 102, 241, 0.12)", borderRadius: 8, border: "1px solid rgba(99, 102, 241, 0.2)" },

  experienceTimeline: { display: "flex", flexDirection: "column", gap: 16, position: "relative", paddingLeft: 8 },
  experienceCard: { position: "relative", padding: "24px 24px 24px 32px", backgroundColor: "rgba(20, 20, 22, 0.8)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" },
  experienceDot: { position: "absolute", left: 12, top: 28, width: 10, height: 10, borderRadius: "50%", backgroundColor: "#3b82f6", boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)" },
  experienceContent: { marginLeft: 24, display: "flex", flexDirection: "column", gap: 6 },
  experienceHeader: { display: "flex", alignItems: "center", gap: 12 },
  experienceTitle: { fontSize: 16, fontWeight: 700, color: "#ffffff" },
  currentBadge: { fontSize: 11, fontWeight: 700, color: "#0ea5e9", backgroundColor: "rgba(14, 165, 233, 0.15)", padding: "4px 10px", borderRadius: 999 },
  experienceCompany: { fontSize: 14, color: "#a3a3a3" },
  experiencePeriod: { fontSize: 13, color: "#737373" },
  experienceDescription: { fontSize: 14, color: "#d4d4d4", lineHeight: 1.6 },

  footer: { padding: "80px 32px", backgroundColor: "rgba(12, 12, 14, 0.9)", borderTop: "1px solid rgba(255,255,255,0.05)" },
  footerContent: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40, alignItems: "center" },
  footerMain: { display: "flex", flexDirection: "column", gap: 12 },
  footerTitle: { fontSize: 26, fontWeight: 700, color: "#ffffff" },
  footerText: { fontSize: 15, color: "#a3a3a3", lineHeight: 1.6 },
  footerCta: { display: "inline-block", marginTop: 8, padding: "12px 20px", background: "linear-gradient(135deg, #6366f1, #ec4899)", borderRadius: 12, color: "#fff", textDecoration: "none", fontWeight: 600, boxShadow: "0 10px 30px -12px rgba(99, 102, 241, 0.5)" },
  footerLinks: { display: "flex", gap: 16, justifyContent: "flex-end" },
  footerLink: { color: "#a3a3a3", textDecoration: "none", fontSize: 14 },
  footerBottom: { gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20 },
  footerCopy: { fontSize: 13, color: "#737373" },
  footerLang: { display: "flex", gap: 10, flexWrap: "wrap" },
  langBadge: { fontSize: 12, color: "#d4d4d4", padding: "6px 10px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" },
};
