(function () {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -200, y: -200 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const isDark = document.body.dataset.theme === 'dark' || document.documentElement.dataset.theme === 'dark';
    const color = isDark ? '212, 105, 79' : '244, 132, 95';

    for (let i = 0; i < 2; i++) {
      particles.push({
        x: mouse.x + (Math.random() - 0.5) * 6,
        y: mouse.y + (Math.random() - 0.5) * 6,
        size: Math.random() * 3.5 + 1.5,
        opacity: 0.7 + Math.random() * 0.2,
        decay: 0.045 + Math.random() * 0.025,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 - 0.4,
        color: color
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.opacity -= p.decay;
      if (p.opacity <= 0.01) { particles.splice(i, 1); continue; }
      p.x += p.vx;
      p.y += p.vy;
      p.size *= 0.96;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = 'rgb(' + p.color + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // cap particles for performance
    if (particles.length > 120) particles.splice(0, particles.length - 120);

    requestAnimationFrame(animate);
  }

  animate();
})();
