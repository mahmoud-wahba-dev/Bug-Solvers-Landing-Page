document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4, // Default number of slides
    spaceBetween: 24, // Space between slides
    loop: true, // Enable looping for infinite scrolling
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Keep autoplay even after interaction
    },
    pagination: {
      el: ".swiper-pagination", // Pagination element
      clickable: true, // Allow clicking on pagination bullets
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button element
      prevEl: ".swiper-button-prev", // Previous button element
    },
    scrollbar: {
      el: ".swiper-scrollbar", // Scrollbar element
      draggable: true, // Allow the scrollbar to be draggable
    },
    // Add breakpoints to control slides per view for different screen sizes
    breakpoints: {
      320: {
        slidesPerView: 1, // Show 1 slide on mobile
      },
      768: {
        slidesPerView: 2, // Show 2 slides on tablets
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on small laptops/desktops
      },
      1440: {
        slidesPerView: 4, // Show 4 slides on larger screens
      },
    },
  });
  
});

function closeWhatsappContainer() {
  const container = document.getElementById("whatsapp_container");

  // Add the 'hide' class to initiate the transition
  container.classList.add("hide");

  // Optionally, after the animation, remove the container from the DOM completely
  setTimeout(() => {
    container.style.display = "none"; // To completely remove it from the layout
  }, 500); // Matches the duration of the transition (0.5s)
}
