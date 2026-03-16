// ============================================
// Bikecare360 — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFAQ();
  initScrollTop();
  initHeaderScroll();
  initMobileBottomNav();
});

// Mobile Navigation (hamburger menu)
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close on outside tap
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target) && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

// FAQ Accordion
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Scroll to top button
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Header shadow on scroll
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Mobile bottom nav — hide on scroll down, show on scroll up
function initMobileBottomNav() {
  const bottomNav = document.querySelector('.mobile-bottom-nav');
  if (!bottomNav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 200) {
      bottomNav.classList.add('hidden');
    } else {
      bottomNav.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}
