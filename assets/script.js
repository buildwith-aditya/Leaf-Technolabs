/* Leaf Technolabs — shared scripts */

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Animated counters (elements with [data-count])
const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1400, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    cio.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

// Contact form (front-end only — wire to backend / Frappe CRM web form later)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Thank you! We\u2019ll be in touch shortly.';
    btn.disabled = true;
    btn.style.opacity = .75;
  });
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
