import { useEffect, useRef, useState } from "react";
import "../../portfolio/styles.css";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

const EXPERIENCE = [
  {
    date: "Feb 2026 — Jun 2026",
    role: "Especialista de Ciberseguridad (SOC & GRC)",
    company: "Semantic-Systems · Derio, Bizkaia",
    summary: "Diseño de SOC, implantación de SGSI y consultoría de cumplimiento en ISO 27001 y ENS.",
    highlights: [
      <>Participé en el <strong>diseño de la arquitectura y stack de herramientas</strong> de un nuevo Centro de Operaciones de Seguridad (SOC).</>,
      <>Contribuí al desarrollo del <strong>SGSI/ISMS</strong> para la certificación <strong>ISO 27001</strong> e implantación del <strong>ENS</strong>: inventario de activos, análisis de riesgos, SoA y planes de tratamiento.</>,
      <>Ejecuté <strong>consultorías de madurez de seguridad</strong> a empresas externas, evaluando cumplimiento del ENS y priorizando refuerzos según criticidad de sistemas.</>,
    ],
  },
  {
    date: "Feb 2025 — May 2025",
    role: "Técnico de Sistemas Informáticos",
    company: "Campus CST San Mamés · Bilbao",
    summary: "Soporte L1/L2 y bastionado de infraestructura en un entorno corporativo de alto volumen.",
    highlights: [
      <>Administré y <strong>bastioné (hardening)</strong> entornos Linux (CentOS, Debian, Ubuntu) y Windows Server con Active Directory y GPOs.</>,
      <>Desplegué y aprovisioné servidores virtualizados sobre <strong>VMware ESXi</strong> y VirtualBox, incluyendo monitorización y mantenimiento operativo.</>,
      <>Resolví incidencias de hardware y software directamente en planta, minimizando el impacto sobre los usuarios.</>,
    ],
  },
  {
    date: "Mar 2023 — Jun 2023",
    role: "Técnico de Sistemas Microinformáticos",
    company: "Diss-process Bilbao · Bilbao",
    summary: "Diagnóstico, reparación y puesta a punto de equipos y redes en cliente.",
    highlights: [
      <>Diagnostiqué y reparé averías físicas y lógicas en equipos, tablets y periféricos.</>,
      <>Realicé instalaciones de SO, configuración de aplicaciones y <strong>gestión de licencias</strong> en equipos nuevos.</>,
      <>Ejecuté <strong>cableado estructurado Ethernet</strong> y montaje de dispositivos en las instalaciones del cliente.</>,
    ],
  },
];

const PROJECTS = [
  {
    color: "#FF4D00",
    title: "Laboratorio SOC con Wazuh + ELK",
    summary: "Mini-SOC en entorno virtualizado: ingesta de logs de endpoints Linux/Windows, reglas de detección con Wazuh, visualización en Kibana y alertas correlacionadas con MITRE ATT&CK.",
    tags: ["Wazuh", "ELK Stack", "Suricata", "VMware"],
  },
  {
    color: "#00C2A0",
    title: "Implantación de SGSI para PYME",
    summary: "Diseño completo de un Sistema de Gestión de Seguridad de la Información: inventario de activos, análisis de riesgos, SoA y plan de tratamiento, alineado con ISO 27001 y el ENS.",
    tags: ["ISO 27001", "ENS", "Análisis de riesgos", "SoA"],
  },
  {
    color: "#FFD600",
    title: "Hardening y Active Directory Lab",
    summary: "Entorno Windows Server con AD, GPOs restrictivas, auditoría de eventos y bastionado de servidores Linux, documentado como guía reproducible.",
    tags: ["Windows Server", "Active Directory", "GPOs", "Debian"],
  },
];

const SKILLS: { title: string; items: string[] }[] = [
  { title: "Blue Team / Defensa", items: ["Wazuh (SIEM/XDR)", "ELK Stack", "Suricata (IDS/IPS)", "Volatility", "FTK Imager", "Autopsy", "Hardening", "MISP", "MITRE ATT&CK", "Cyber Kill Chain"] },
  { title: "Red Team / Ofensiva", items: ["Nmap", "Metasploit", "Burp Suite", "Shodan", "Maltego", "DNSDumpster"] },
  { title: "GRC y Normativa", items: ["ISO 27001", "ENS", "SGSI/ISMS", "Análisis de riesgos"] },
  { title: "Sistemas y Virtualización", items: ["Linux (Ubuntu, CentOS, Debian, Fedora)", "Windows Server", "Active Directory", "Docker", "VMware", "VirtualBox"] },
  { title: "Redes y Protocolos", items: ["LAN/WAN", "Wireshark", "DNS", "DHCP", "FTP", "SSH", "IPv4/IPv6", "NAT", "SMTP"] },
  { title: "Bases de datos e Idiomas", items: ["MySQL", "MariaDB", "Español (nativo)", "Inglés B1/B2"] },
  { title: "Soft skills", items: ["Pensamiento analítico bajo presión", "Rigor y orientación al cumplimiento", "Comunicación técnica clara", "Aprendizaje continuo y autonomía"] },
];

const EDUCATION = [
  { date: "2025 — 2026", title: "Especialista en Ciberseguridad en Entorno IT", institution: "Maristak Durango Ikastetxea", desc: "Formación avanzada en Blue Team, GRC, análisis forense e inteligencia de amenazas." },
  { date: "2023 — 2025", title: "Técnico Superior en Administración de Sistemas Informáticos en Red", institution: "Centro de Estudios Mikeldi", desc: "Administración de sistemas Linux/Windows Server, redes, virtualización y bases de datos." },
  { date: "2021 — 2023", title: "Técnico en Sistemas Microinformáticos y Redes", institution: "CIFP Construcción Bizkaia", desc: "Fundamentos de hardware, software, redes locales y soporte técnico." },
  { date: "2026", title: "Cisco CyberOps Associate", institution: "Cisco Networking Academy / Maristak Durango", desc: "Operaciones de ciberseguridad, monitorización y respuesta a incidentes en un SOC." },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());

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
        <a href="#inicio" className="logo">ADH.</a>
        <nav
          ref={navRef}
          className={`main-nav${menuOpen ? " open" : ""}`}
          aria-label="Navegación principal"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link" onClick={closeMenu}>
              {n.label}
            </a>
          ))}
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="pf-container">
            <p className="hero-eyebrow">Hola, soy Asier Del Hoyo</p>
            <h1 className="hero-title">Defiendo sistemas. Reduzco riesgos. Aseguro tu negocio.</h1>
            <p className="hero-role">Analista de Ciberseguridad · Blue Team &amp; GRC · SOC · ISO 27001 · ENS</p>
            <p className="hero-desc">
              Experiencia en diseño de SOC, implantación de SGSI y consultoría de madurez de seguridad, con una base sólida como técnico de sistemas Linux y Windows Server.
            </p>
            <div className="hero-actions">
              <a href="#experiencia" className="btn btn-primary">Ver mi experiencia</a>
              <a href="#contacto" className="btn btn-secondary">Hablemos de tu seguridad</a>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>BLUE TEAM</span>
            <span>GRC</span>
            <span>ISO 27001</span>
            <span>ENS</span>
            <span>SOC</span>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Quién soy</p>
              <h2 className="section-title">Sobre mí</h2>
            </div>
            <div className="about-content">
              <p>
                Soy Asier Del Hoyo, analista de ciberseguridad enfocado en <strong>Blue Team y GRC</strong>. Mi trabajo consiste en detectar antes, responder mejor y dejar a las organizaciones más preparadas de lo que estaban ayer, combinando visión técnica con cumplimiento normativo.
              </p>
              <p>
                He participado en el diseño de un SOC desde cero, en procesos de certificación <strong>ISO 27001</strong> e implantación del <strong>ENS</strong>, y en consultoría de madurez de seguridad para empresas externas. Vengo de una base sólida como técnico de sistemas (Linux, Windows Server, virtualización y redes), lo que me permite entender la seguridad desde la infraestructura, no solo desde el papel.
              </p>
              <p>
                Me mueve la curiosidad, el rigor y la idea de que la seguridad se construye con procesos claros y personas que entienden por qué importan. Siempre estoy aprendiendo: ahora mismo, certificado en <strong>Cisco CyberOps Associate</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section section-alt">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Trayectoria profesional</p>
              <h2 className="section-title">Experiencia</h2>
            </div>
            <div className="timeline">
              {EXPERIENCE.map((item) => (
                <div key={item.role} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-desc">{item.summary}</p>
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Trabajo técnico</p>
              <h2 className="section-title">Proyectos</h2>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p) => (
                <article key={p.title} className="project-card">
                  <div className="project-thumb" style={{ ["--thumb-color" as string]: p.color }}></div>
                  <div className="project-body">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>
                    <ul className="project-tags">
                      {p.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section section-alt">
          <div className="pf-container">
            <div className="section-header">
              <p className="section-eyebrow">Stack técnico</p>
              <h2 className="section-title">Habilidades</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map((g) => (
                <div key={g.title} className="skill-group">
                  <h3 className="skill-title">{g.title}</h3>
                  <ul className="skill-list">
                    {g.items.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
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
              {EDUCATION.map((e) => (
                <article key={e.title} className="education-card">
                  <span className="education-date">{e.date}</span>
                  <h3 className="education-title">{e.title}</h3>
                  <p className="education-institution">{e.institution}</p>
                  <p className="education-desc">{e.desc}</p>
                </article>
              ))}
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
                  ¿Tienes un proyecto de ciberseguridad, una oportunidad profesional o quieres reforzar tu postura de seguridad? Escríbeme y te respondo pronto.
                </p>
                <div className="contact-links">
                  <a href="mailto:asierdelhoyoalvarez@gmail.com" className="contact-link">
                    asierdelhoyoalvarez@gmail.com
                  </a>
                  <a href="tel:+34616861701" className="contact-link">+34 616 861 701</a>
                  <a href="#" className="contact-link">LinkedIn</a>
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
                  <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Cuéntame en qué puedo ayudarte..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Enviar mensaje
                </button>
                <p className="form-note">
                  Reemplaza la URL de Formspree con la tuya para activar el formulario.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="pf-container footer-inner">
          <p>&copy; {year ?? ""} Asier Del Hoyo Álvarez. Portugalete, Bizkaia.</p>
          <a href="#inicio" className="back-top">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
}
