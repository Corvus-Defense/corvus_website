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
