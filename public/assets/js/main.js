$(document).ready(function () {
  // Initialize Glide
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    hoverpause: true,
    navigation: {
      nextEl: ".glide__arrow--next",
      prevEl: ".glide__arrow--prev",
    },
    pagination: {
      el: ".glide__bullets",
      clickable: true,
    },
  }).mount();

  // Initialize Swiper
  var gallerySwiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1, // Set to show only one slide
    spaceBetween: 0, // No space between slides
    loop: true, // Enable loop
  });
});
