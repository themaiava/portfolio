(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var burger = document.getElementById('nav-hamburger');
    var ul = document.querySelector('nav ul');
    if (!burger || !ul) return;

    burger.addEventListener('click', function () {
      var isOpen = ul.classList.toggle('nav-open');
      burger.textContent = isOpen ? '✕' : '☰';
    });

    ul.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        ul.classList.remove('nav-open');
        burger.textContent = '☰';
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('nav')) {
        ul.classList.remove('nav-open');
        burger.textContent = '☰';
      }
    });
  });
})();
