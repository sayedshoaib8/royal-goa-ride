document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const closeBtn = document.querySelector('[data-mobile-close]');
  const open = () => { mobileNav?.classList.add('is-open'); toggle?.setAttribute('aria-expanded','true'); };
  const close = () => { mobileNav?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded','false'); };
  toggle?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.querySelectorAll('.faq-item__question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item?.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach((entry) => entry.classList.remove('is-open'));
      if (!isOpen) item?.classList.add('is-open');
    });
  });
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
});
