(() => {
  'use strict';

  /* ---------------------------------------------------------------------
     Dual Theme Engine
     --------------------------------------------------------------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'mbeh-theme';

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
  };

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  applyTheme(storedTheme || getSystemTheme());

  // Follow system changes only if the user hasn't made an explicit choice.
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------------------------------------------------------------------
     Mobile nav — hamburger unfurls a spatial glass panel
     --------------------------------------------------------------------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavScrim = document.getElementById('mobile-nav-scrim');
  const MOBILE_NAV_BREAKPOINT = '(min-width: 769px)';

  if (menuToggle && mobileNav && mobileNavScrim) {
    const focusableSelector = 'a, button';
    const mobileNavFocusable = mobileNav.querySelectorAll(focusableSelector);

    const setMenuOpen = (open) => {
      menuToggle.classList.toggle('is-open', open);
      mobileNav.classList.toggle('is-open', open);
      mobileNavScrim.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      mobileNav.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('nav-open', open);
      mobileNavFocusable.forEach((el) => {
        el.tabIndex = open ? 0 : -1;
      });
    };

    setMenuOpen(false);

    menuToggle.addEventListener('click', () => {
      setMenuOpen(!mobileNav.classList.contains('is-open'));
    });

    mobileNavScrim.addEventListener('click', () => setMenuOpen(false));

    mobileNavFocusable.forEach((el) => {
      el.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    const desktopQuery = window.matchMedia(MOBILE_NAV_BREAKPOINT);
    desktopQuery.addEventListener('change', (e) => {
      if (e.matches) setMenuOpen(false);
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — spatial depth elevation via IntersectionObserver
     --------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------------------------------------------------------------------
     Contact form (client-side only demo submission)
     --------------------------------------------------------------------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Please fill in every field before sending.';
        status.style.color = 'var(--accent-blue)';
        return;
      }
      status.textContent = `Thanks, ${form.name.value.split(' ')[0]}! Your message has been noted — I'll be in touch soon.`;
      status.style.color = 'var(--accent-green)';
      form.reset();
    });
  }

  /* ---------------------------------------------------------------------
     Footer year
     --------------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
