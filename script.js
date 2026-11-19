document.addEventListener('DOMContentLoaded', () => {
  // Suntikkan elemen poster & ekosistem laut berulang di tiap kartu
  document.querySelectorAll('.poster-card').forEach((card, idx) => {
    const deco = idx % 2 === 0
      ? '<div class="svg-fish-school" aria-hidden="true"></div>'
      : '<div class="svg-starfish" aria-hidden="true"></div>';
    card.insertAdjacentHTML('afterbegin', `<div class="underwater-rays" aria-hidden="true"></div><div class="card-bubbles" aria-hidden="true"><span></span><span></span><span></span></div>${deco}<div class="poster-meta"><span>RichyRivano.</span><span>Portofolio 2026</span></div>`);
    card.insertAdjacentHTML('beforeend', '<div class="halftone-strip" aria-hidden="true"></div>');
  });

  // Tahun footer & toggle menu mobile
  document.getElementById('year').textContent = new Date().getFullYear();
  const navLinks = document.getElementById('navLinks');
  document.getElementById('menuToggle')?.addEventListener('click', () => navLinks.classList.toggle('active'));
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));

  // Filter kategori kemampuan
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.skill-item').forEach(el => el.classList.toggle('hidden', f !== 'all' && el.dataset.category !== f));
  }));

  // Modal detail proyek
  const modal = document.getElementById('projectModal');
  const toggleModal = open => { modal.classList.toggle('open', open); modal.setAttribute('aria-hidden', !open); };
  document.getElementById('openProjectModal')?.addEventListener('click', () => toggleModal(true));
  document.getElementById('closeProjectModal')?.addEventListener('click', () => toggleModal(false));
  modal?.addEventListener('click', e => { if (e.target === modal) toggleModal(false); });

  // Scroll reveal & highlight menu navbar aktif
  const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-item');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', scrollY > 20);
    let current = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 130) current = s.id; });
    navItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === `#${current}`));
  });
});