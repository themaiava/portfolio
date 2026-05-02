(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner) return;

    // Create hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.id = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Toggle menu');
    burger.innerHTML = '☰';
    navInner.appendChild(burger);

    const ul = navInner.querySelector('ul');

    burger.addEventListener('click', function () {
      const isOpen = ul.classList.toggle('nav-open');
      burger.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    ul.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        ul.classList.remove('nav-open');
        burger.innerHTML = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navInner.contains(e.target)) {
        ul.classList.remove('nav-open');
        burger.innerHTML = '☰';
      }
    });
  });
})();
