// Filter tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.work-card[data-category]');
const emptyState = document.getElementById('empty-state');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    emptyState.style.display = visible === 0 ? 'block' : 'none';
  });
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.work-card').forEach(el => observer.observe(el));
