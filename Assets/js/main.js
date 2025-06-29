
    const sentences = [
  "Hi, I'm Jaimin Kundal.",
  "Bonjour, je m'appelle Jaimin Kundal.", // French
  "Hola, me llamo Jaimin Kundal.", // Spanish
  "Hallo, ich heiße Jaimin Kundal.", // German
  "Ciao, mi chiamo Jaimin Kundal.", // Italian
  "こんにちは、私の名前はジャイミン・クンダル です。", // Japanese (Jaimin Kundal in Katakana would be ジャイミン・クンダル)
  "Привет, меня зовут Джаймин Кундал.", // Russian (Джаймин Кундал)
  "नमस्ते, मेरा नाम जैमिन कुंडल है।", // Hindi (जैमिन कुंडल)
  "Olá, meu nome é Jaimin Kundal.", // Portuguese
  "안녕하세요, 제 이름은 자이민 쿤달입니다.", // Korean (자이민 쿤달)
  "你好，我叫贾伊明·昆达尔。", // Chinese (贾伊明·昆达尔)
  "Salut, eu sunt Jaimin Kundal.", // Romanian
  "Hej, jag heter Jaimin Kundal.", // Swedish
  "Merhaba, benim adım Jaimin Kundal.", // Turkish
  "Γεια, με λένε Τζάιμιν Κουντάλ.", // Greek (Τζάιμιν Κουντάλ)
  "નમસ્તે, મારું નામ જૈમિન કુંડલ છે."
    ];

    document.addEventListener("DOMContentLoaded", function() {
      new Typed('#typewriter', {
        strings: sentences,
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 1700,
        loop: true,
        smartBackspace: true,
        fadeOut: false,
        showCursor: true,
        cursorChar: '|'
      });
    });

    // Resume download function
    function downloadResume() {
      // Create a temporary link to download resume
      // In real implementation, this would link to an actual PDF file
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/file/d/17VtwH1lmI-Qr5E__2-Bcs4eMsslPkkCx/view?usp=sharing'; // Replace with actual resume file path
      link.download = 'Jaimin_Kundal_Resume.pdf';


      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
  
    // Create particle effect
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
