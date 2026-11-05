(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var burger = document.getElementById('nav-hamburger');
    var ul = document.querySelector('nav ul');
    if (!burger || !ul) return;

    ul.id = ul.id || 'primary-navigation';
    burger.setAttribute('aria-controls', ul.id);
    burger.setAttribute('aria-expanded', 'false');

    function setMenu(open) {
      ul.classList.toggle('nav-open', open);
      burger.textContent = open ? '✕' : '☰';
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    burger.addEventListener('click', function () {
      setMenu(!ul.classList.contains('nav-open'));
    });

    ul.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('nav')) {
        setMenu(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && ul.classList.contains('nav-open')) {
        setMenu(false);
        burger.focus();
      }
    });
  });
})();

// Scroll reveal for cards — runs on every page
(function () {
  if (!window.IntersectionObserver) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll(
      '.work-card, .number-card, .proof-card, .fit-card, .service-card, .stat-card, .cred-card'
    );

    els.forEach(function (el, i) {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = (i % 4 * 60) + 'ms';
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    els.forEach(function (el) { obs.observe(el); });
  });
})();
