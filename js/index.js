
   const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Show first slide
  showSlide(currentIndex);

  // Change slide every 4 seconds
  setInterval(nextSlide, 2000);


document.addEventListener("DOMContentLoaded", function () {
  const reviewArea = document.querySelector(".review-area");
  const reviews = document.querySelectorAll(".review-box-wrapper");
  const totalReviews = reviews.length;
  const itemsPerSlide = 2;
  let currentIndex = 0;

  document.getElementById("nextReview").addEventListener("click", () => {
    if (currentIndex < totalReviews - itemsPerSlide) {
      currentIndex += itemsPerSlide;
    } else {
      currentIndex = 0;
    }
    updateSlide();
  });

  document.getElementById("prevReview").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= itemsPerSlide;
    } else {
      currentIndex = totalReviews - itemsPerSlide;
    }
    updateSlide();
  });

  function updateSlide() {
    const slideWidth = reviews[0].offsetWidth + 40; // 40px gap
    reviewArea.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});





