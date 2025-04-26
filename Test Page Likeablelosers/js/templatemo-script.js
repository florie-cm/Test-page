



$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});



  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Start on load
  showSlide(currentIndex);
  startAutoSlide();

  // Optional: Reset auto slide timer after manual clicks
  document.querySelector('.nav-buttons').addEventListener('click', () => {
    stopAutoSlide();
    startAutoSlide();
  });

