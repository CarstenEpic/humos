window.HELP_IMPROVE_VIDEOJS = false;
window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  let options = {
    slidesToScroll: 2,
    slidesToShow: 6,
    loop: true,
    infinite: false,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Initialize all div with carousel class
  let carousels = bulmaCarousel.attach(".carousel", options);

  // Loop on each carousel initialized
  for (let i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on("before:show", (state) => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  let element = document.querySelector("#my-element");
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on("before-show", function (state) {
      console.log(state);
    });
  }
});

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};