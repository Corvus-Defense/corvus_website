const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
});
