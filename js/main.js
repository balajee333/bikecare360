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

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    links.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Dropdown toggles on mobile (click instead of hover)
  links.querySelectorAll('.nav-dropdown-toggle').forEach(dt => {
    dt.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = dt.closest('.nav-dropdown');
      // Close other dropdowns
      links.querySelectorAll('.nav-dropdown').forEach(d => {
        if (d !== dropdown) d.classList.remove('expanded');
      });
      dropdown.classList.toggle('expanded');
    });
  });

  // Close menu when clicking a real link (not dropdown toggles)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close on outside tap
  document.addEventListener('click', (e) => {
    const toggleParent = toggle.parentElement;
    if (!toggleParent.contains(e.target) && !links.contains(e.target) && links.classList.contains('open')) {
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

// Search
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => input && input.focus(), 100);
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  if (input) input.value = '';
  if (results) results.innerHTML = '';
}

// Determine base path for product links based on current page depth
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/products/') || path.includes('/pages/brands/') || path.includes('/pages/categories/')) {
    return '../../';
  } else if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const q = input.value.trim();
      if (q.length < 2) { results.innerHTML = ''; return; }
      if (typeof searchProducts !== 'function') return;
      const matches = searchProducts(q).slice(0, 8);
      const base = getBasePath();
      if (matches.length === 0) {
        results.innerHTML = '<div class="search-empty">No products found</div>';
        return;
      }
      results.innerHTML = matches.map(p => `
        <a href="${base}pages/products/${p.id}.html" class="search-result-item">
          <img src="${base}${p.image}" alt="${p.name}" loading="lazy">
          <div class="search-result-info">
            <h4>${p.name}</h4>
            <div class="search-result-meta">${p.brand} · ${p.category.replace(/-/g,' ')}</div>
          </div>
          <div class="search-result-price">${formatPrice(p.price)}</div>
        </a>
      `).join('');
    }, 200);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });
});
