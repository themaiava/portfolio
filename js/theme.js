(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function updateBtn(theme) {
      const dark = theme === 'dark';
      btn.innerHTML = dark
        ? '<span aria-hidden="true">☀️</span><span class="theme-label">Light</span>'
        : '<span aria-hidden="true">🌙</span><span class="theme-label">Dark</span>';
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    updateBtn(root.getAttribute('data-theme') || 'light');

    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateBtn(next);
    });
  });
})();
