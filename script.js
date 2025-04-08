const text = "corvus defense";
const el = document.getElementById("typing-text");

let i = 0;

function typeLetter() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeLetter, 150);
  } else {
    el.style.borderRight = "none"; // Remove cursor after typing
  }
}

window.onload = typeLetter;