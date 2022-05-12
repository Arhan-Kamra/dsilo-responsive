$(".testimonial-owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const prevIcon = document.querySelector('.owl-prev>span[aria-label="Previous"');
const nextIcon = document.querySelector('.owl-next>span[aria-label="Next"');

prevIcon.style.position = "relative";
nextIcon.style.position = "relative";

prevIcon.innerHTML =
  "<img src='./assets/images/dot.svg' style='position:absolute;top:-5px;left:-16px;opacity:0.6' /><img src='./assets/images/previous-icon.svg' />";
nextIcon.innerHTML =
  "<img src='./assets/images/next-icon.svg' /><img src='./assets/images/dot.svg' style='position:absolute;top:-5px;right:-16px;opacity:0.6' />";
