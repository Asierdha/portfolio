document.addEventListener('DOMContentLoaded', () => {
  // Actualizar año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  }

  // Resaltar enlace activo al hacer scroll
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const observerOptions = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Validación simple del formulario
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      }
    });
  }
});
