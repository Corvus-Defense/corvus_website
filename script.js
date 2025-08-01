const text = "corvus defense";
const el = document.getElementById("typing-text");

let i = 0;

function typeLetter() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeLetter, 120);
  } else {
    el.style.borderRight = "none";
  }
}

window.onload = () => {
  const cursorDot = document.getElementById("cursorDot");
  if (cursorDot) {
    document.addEventListener("mousemove", (e) => {
      cursorDot.style.opacity = "1";
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    });
  }

  // Starfield
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const stars = Array.from({ length: 120 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1.5,
    opacity: Math.random(),
    phase: Math.random() * Math.PI * 2,
    frequency: Math.random() * 0.01 + 0.003,
    speed: Math.random() * 0.002 + 0.001,
  }));

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      star.phase += star.frequency;
      star.opacity = 0.5 + 0.5 * Math.sin(star.phase);
    }
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // Menu button functionality
  const menuBtn = document.getElementById('menu-btn');
  const menuBtnContact = document.getElementById('menu-btn-contact');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.getElementById('menu-close');
  const contactOverlay = document.getElementById('contact-overlay');
  const contactLink = document.getElementById('contact-link');
  const homeLink = document.getElementById('home-link');

  function openMenuOverlay() {
    menuOverlay.classList.add('active');
    document.body.classList.add('menu-open');
  }
  function closeMenuOverlay() {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      if (menuOverlay.classList.contains('active')) {
        closeMenuOverlay();
      } else {
        openMenuOverlay();
      }
    });
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        closeMenuOverlay();
      }
    });
  }

  if (menuBtnContact && menuOverlay && contactOverlay) {
    menuBtnContact.addEventListener('click', () => {
      contactOverlay.classList.remove('active');
      openMenuOverlay();
    });
  }

  if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', () => {
      closeMenuOverlay();
    });
  }

  // Contact Us overlay functionality
  if (contactLink && contactOverlay && menuOverlay) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenuOverlay();
      contactOverlay.classList.add('active');
    });
    contactOverlay.addEventListener('click', (e) => {
      if (e.target === contactOverlay) {
        contactOverlay.classList.remove('active');
      }
    });
  }

  // Home button closes all overlays
  if (homeLink && menuOverlay && contactOverlay) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenuOverlay();
      contactOverlay.classList.remove('active');
    });
  }

  // Contact form AJAX submission
  const contactForm = document.getElementById('contact-form');
  const contactFormStatus = document.getElementById('contact-form-status');
  if (contactForm && contactFormStatus) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      contactFormStatus.textContent = 'Sending...';
      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          contactFormStatus.textContent = 'Thank you! Your message has been sent.';
          contactForm.reset();
        } else {
          contactFormStatus.textContent = 'Oops! There was a problem sending your message.';
        }
      } catch (err) {
        contactFormStatus.textContent = 'Oops! There was a problem sending your message.';
      }
    });
  }
};

document.getElementById("waitlist-btn").onclick = () => {
  window.location.href = "waitlist.html";
};
