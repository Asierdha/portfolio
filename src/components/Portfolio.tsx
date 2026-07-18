import { useEffect, useRef, useState } from "react";
import "../../portfolio/styles.css";

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = document.querySelectorAll(".main-nav .nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              link.classList.toggle("active", href === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        toggleRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="logo">
          TN.
        </a>
        <nav
          ref={navRef}
          className={`main-nav${menuOpen ? " open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="nav-link" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#proyectos" className="nav-link" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#experiencia" className="nav-link" onClick={closeMenu}>
            Experiencia
          </a>
          <a href="#formacion" className="nav-link" onClick={closeMenu}>
            Formación
          </a>
          <a href="#contacto" className="nav-link" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="pf-container">
            <p className="hero-eyebrow">Hola, soy</p>
            <h1 className="hero-title">Tu Nombre</h1>
            <p className="hero-role">Desarrollador · Diseñador · Creador</p>
            <p className="hero-desc">
              Construyo experiencias digitales con atención al detalle, rendimiento y diseño. Este es un punto de partida: edítalo con tu información y ponlo en línea en minutos.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Contactar
              </a>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>PORTAFOLIO</span>
            <span>PORTAFOLIO</span>
            <span>PORTAFOLIO</span>
            <span>PORTAFOLIO</span>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Trabajo reciente</p>
              <h2 className="section-title">Proyectos</h2>
            </div>
            <div className="projects-grid">
              <article className="project-card">
                <div className="project-thumb" style={{ ["--thumb-color" as string]: "#FF4D00" }}></div>
                <div className="project-body">
                  <h3 className="project-title">Nombre del proyecto</h3>
                  <p className="project-summary">
                    Breve descripción del proyecto, el problema que resuelve y tu rol en él.
                  </p>
                  <ul className="project-tags">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind</li>
                  </ul>
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Ver sitio
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Código
                    </a>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-thumb" style={{ ["--thumb-color" as string]: "#00C2A0" }}></div>
                <div className="project-body">
                  <h3 className="project-title">Nombre del proyecto</h3>
                  <p className="project-summary">
                    Breve descripción del proyecto, el problema que resuelve y tu rol en él.
                  </p>
                  <ul className="project-tags">
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>API REST</li>
                  </ul>
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Ver sitio
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Código
                    </a>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-thumb" style={{ ["--thumb-color" as string]: "#FFD600" }}></div>
                <div className="project-body">
                  <h3 className="project-title">Nombre del proyecto</h3>
                  <p className="project-summary">
                    Breve descripción del proyecto, el problema que resuelve y tu rol en él.
                  </p>
                  <ul className="project-tags">
                    <li>Python</li>
                    <li>Machine Learning</li>
                    <li>Data</li>
                  </ul>
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Ver sitio
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Código
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section section-alt">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Donde he trabajado</p>
              <h2 className="section-title">Experiencia</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2023 — Presente</span>
                  <h3 className="timeline-role">Cargo actual</h3>
                  <p className="timeline-company">Nombre de la empresa</p>
                  <p className="timeline-desc">
                    Describe tus responsabilidades, logros medibles y tecnologías que usaste.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2021 — 2023</span>
                  <h3 className="timeline-role">Cargo anterior</h3>
                  <p className="timeline-company">Nombre de la empresa</p>
                  <p className="timeline-desc">
                    Describe tus responsabilidades, logros medibles y tecnologías que usaste.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2019 — 2021</span>
                  <h3 className="timeline-role">Primer cargo</h3>
                  <p className="timeline-company">Nombre de la empresa</p>
                  <p className="timeline-desc">
                    Describe tus responsabilidades, logros medibles y tecnologías que usaste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formacion" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Estudios y certificaciones</p>
              <h2 className="section-title">Formación</h2>
            </div>
            <div className="education-grid">
              <article className="education-card">
                <span className="education-date">2018 — 2022</span>
                <h3 className="education-title">Título universitario</h3>
                <p className="education-institution">Nombre de la universidad</p>
                <p className="education-desc">Carrera, especialización o mención relevante.</p>
              </article>
              <article className="education-card">
                <span className="education-date">2023</span>
                <h3 className="education-title">Certificación profesional</h3>
                <p className="education-institution">Plataforma o institución</p>
                <p className="education-desc">Lo que aprendiste y cómo lo aplicas.</p>
              </article>
              <article className="education-card">
                <span className="education-date">2024</span>
                <h3 className="education-title">Curso especializado</h3>
                <p className="education-institution">Plataforma o institución</p>
                <p className="education-desc">
                  Herramientas o metodologías que dominas gracias a este curso.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="section section-contact">
          <div className="pf-container">
            <div className="contact-layout">
              <div className="contact-intro">
                <p className="section-eyebrow">Hablemos</p>
                <h2 className="section-title">Contacto</h2>
                <p className="contact-desc">
                  ¿Tienes un proyecto, una oportunidad o simplemente quieres saludar? Escríbeme y te respondo pronto.
                </p>
                <div className="contact-links">
                  <a href="mailto:tu@email.com" className="contact-link">
                    tu@email.com
                  </a>
                  <a
                    href="https://linkedin.com/in/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <form
                className="contact-form"
                action="https://formspree.io/f/tu-formulario"
                method="POST"
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" name="name" required placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Enviar mensaje
                </button>
                <p className="form-note">
                  Formulario de ejemplo. Reemplaza la URL de Formspree o conecta tu propio backend.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="pf-container footer-inner">
          <p>
            &copy; <span id="year"></span> Tu Nombre. Plantilla de portafolio.
          </p>
          <a href="#inicio" className="back-top">
            Volver arriba ↑
          </a>
        </div>
      </footer>
    </>
  );
}
