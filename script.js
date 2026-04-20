// Animación de partículas simples (fondo)
const createParticle = () => {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '6px';
  particle.style.height = '6px';
  particle.style.background = 'rgba(0, 255, 204, 0.6)';
  particle.style.borderRadius = '50%';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = '-10px';
  particle.style.zIndex = '-1';
  particle.style.pointerEvents = 'none';
  document.body.appendChild(particle);

  let y = -10;
  const speed = Math.random() * 3 + 2;

  const fall = setInterval(() => {
    y += speed;
    particle.style.top = y + 'px';
    if (y > window.innerHeight) {
      clearInterval(fall);
      particle.remove();
    }
  }, 30);
};

setInterval(() => {
  if (Math.random() > 0.6) createParticle();
}, 100);
