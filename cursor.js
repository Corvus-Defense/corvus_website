if (!('ontouchstart' in window)) {
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  cursorDot.style.opacity = "0"; // start hidden
  document.body.appendChild(cursorDot);

  document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';

    // Always restore opacity if needed
    if (cursorDot.style.opacity !== "1") {
      cursorDot.style.opacity = "1";
    }
  });
}