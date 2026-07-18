const slides = Array.from(document.querySelectorAll('.hero__slide'));
const dotsContainer = document.querySelector('.hero__dots');
let currentSlide = 0;

if (slides.length) {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  setInterval(() => showSlide(currentSlide + 1), 4500);
  showSlide(0);
}

const countdownEl = document.querySelector('[data-countdown]');
if (countdownEl) {
  const endTime = Date.now() + (2 * 60 * 60 + 15 * 60 + 32) * 1000;
  const updateCountdown = () => {
    const remaining = Math.max(0, endTime - Date.now());
    const hours = String(Math.floor(remaining / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
    countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const buttons = document.querySelectorAll('.button');
const toast = document.getElementById('toast');
buttons.forEach((button) => {
  if (button.textContent.includes('Add to Cart') || button.textContent.includes('Join Now')) {
    button.addEventListener('click', () => {
      toast.textContent = 'Added to cart successfully';
      toast.classList.add('show');
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
    });
  }
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 420) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
