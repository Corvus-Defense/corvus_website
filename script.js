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

window.onload = typeLetter;

document.getElementById("waitlist-btn").onclick = () => {
  window.location.href = "waitlist.html";
};

// 🌌 Starfield animation
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
  radius: Math.random() * 1.2 + 0.3,
  opacity: Math.random(),
  speed: Math.random() * 0.003 + 0.001,
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
    star.opacity += star.speed * (Math.random() < 0.5 ? 1 : -1);
    if (star.opacity < 0) star.opacity = 0;
    if (star.opacity > 1) star.opacity = 1;
  }
  requestAnimationFrame(drawStars);
}
drawStars();

// --- Revised Starfield ---

const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const stars = Array.from({ length: 100 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2.5 + 0.8,
  opacity: Math.random(),
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
    star.opacity += star.speed * (Math.random() < 0.5 ? 1 : -1);
    star.opacity = Math.max(0, Math.min(1, star.opacity));
  }
  requestAnimationFrame(drawStars);
}
drawStars();
