// Scroll fade-in
const paragraphs = document.querySelectorAll('.story-text p');
function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  paragraphs.forEach(p => {
    const rect = p.getBoundingClientRect();
    if(rect.top < triggerBottom) p.classList.add('visible');
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Tooltip highlight
const highlights = document.querySelectorAll('.highlight');
const popup = document.getElementById('triviaPopup');
highlights.forEach(h=>{
  const showPopup = ()=>{
    popup.textContent = h.dataset.trivia;
    popup.style.display='block';
    const rect = h.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    popup.style.top = scrollTop + rect.bottom + 10 + 'px';
    popup.style.left = rect.left + 'px';
    popup.style.opacity = 1;
  };
  const hidePopup = ()=>{
    popup.style.opacity = 0;
    setTimeout(()=>popup.style.display='none',300);
  };
  h.addEventListener('mouseenter',showPopup);
  h.addEventListener('mouseleave',hidePopup);
  h.addEventListener('touchstart',(e)=>{
    e.preventDefault();
    showPopup();
    setTimeout(hidePopup,2500);
  });
});

// Music play/pause button
const bgMusic = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
playBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.textContent = "⏸️ Pause Music";
  } else {
    bgMusic.pause();
    playBtn.textContent = "▶️ Play Music";
  }
});