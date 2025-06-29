// Skills data and rendering
const skillsData = [
  { title: 'HTML & CSS', level: '70%', category: 'frontend' },
  { title: 'JavaScript ', level: '40%', category: 'frontend' },
  { title: 'SQL', level: '60%', category: 'backend' },
  { title: 'Python', level: '80%', category: 'languages' },
  { title: 'C++', level: '90%', category: 'languages' },
  { title: 'C', level: '90%', category: 'languages' },
  { title: 'Java', level: '60%', category: 'languages' },
  { title: 'Bash', level: '40%', category: 'languages' },
  { title: 'Algorithms & Data Structures', level: '50%', category: 'others' },
  { title: 'Git / GitHub', level: '70%', category: 'others' },
  { title: 'AI/ML', level: '70%', category: 'others' },
  { title: 'Cybersecurity', level: '70%', category: 'others' },
];

const grid = document.getElementById('skills-grid');
skillsData.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.dataset.category = skill.category;
  card.innerHTML = `
    <div class="corner"></div>
    <div class="skill-title">${skill.title}</div>
    <div class="skill-bar"><div class="skill-level" style="--level:${skill.level}"></div></div>
  `;
  grid.appendChild(card);
});

// Animate bars on intersection
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.skill-card').forEach(card => observer.observe(card));

// Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  document.querySelector('.filter-btn.active').classList.remove('active');
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.skill-card').forEach(card => {
    if(filter === 'all' || card.dataset.category === filter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}));

// Particle effect
const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;
for (let i = 0; i < particleCount; i++) {
  createParticle();
}
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 3 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  resetParticle(particle);
  particlesContainer.appendChild(particle);
  animateParticle(particle);
}
function resetParticle(particle) {
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.opacity = '0';
  return { x: posX, y: posY };
}
function animateParticle(particle) {
  const pos = resetParticle(particle);
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  setTimeout(() => {
    particle.style.transition = `all ${duration}s linear`;
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    const moveX = pos.x + (Math.random() * 20 - 10);
    const moveY = pos.y - Math.random() * 30;
    particle.style.left = `${moveX}%`;
    particle.style.top = `${moveY}%`;
    setTimeout(() => {
      animateParticle(particle);
    }, duration * 1000);
  }, delay * 1000);
}
document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth) * 100;
  const mouseY = (e.clientY / window.innerHeight) * 100;
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${mouseX}%`;
  particle.style.top = `${mouseY}%`;
  particle.style.opacity = '0.6';
  particlesContainer.appendChild(particle);
  setTimeout(() => {
    particle.style.transition = 'all 2s ease-out';
    particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
    particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
    particle.style.opacity = '0';
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }, 10);
  const spheres = document.querySelectorAll('.gradient-sphere');
  const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
  spheres.forEach(sphere => {
    sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// Navbar fade on scroll (window scroll)
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('nav');
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          nav.classList.add('nav-hidden');
        } else {
          nav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  });
});
