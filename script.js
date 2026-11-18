document.addEventListener('DOMContentLoaded', () => {
  // 1. Tahun Otomatis di Footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Toggle Menu Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Filter Kategori Keahlian (Semua / UI/UX / Web Dev)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // 4. Modal Detail Proyek
  const openModalBtn = document.getElementById('openProjectModal');
  const closeModalBtn = document.getElementById('closeProjectModal');
  const projectModal = document.getElementById('projectModal');

  if (openModalBtn && closeModalBtn && projectModal) {
    openModalBtn.addEventListener('click', () => {
      projectModal.classList.add('open');
      projectModal.setAttribute('aria-hidden', 'false');
    });

    closeModalBtn.addEventListener('click', () => {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // 5. Animasi Muncul Saat di-Scroll (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
});