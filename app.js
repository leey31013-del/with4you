(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  document.addEventListener('contextmenu', (e) => { e.preventDefault(); });
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const el = id && document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
