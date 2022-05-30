const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".header-mobile>a:nth-of-type(1)");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.style.left = "0";
  let body = document.querySelector(".containerr");
  body.style.filter = "blur(2px)";
});

closeIcon.addEventListener("click", () => {
  hamburgerMenu.style.left = "-340px";
  let body = document.querySelector(".containerr");
  body.style.filter = "blur(0px)";
});

const hamburgerItems_list = document.querySelectorAll(
  "body > .hamburger-menu > ul > li > div"
); // returns NodeList

var hamburgerItems_array = [...hamburgerItems_list]; // converts NodeList to Array

hamburgerItems_array.forEach(topItem => {
  // do something awesome with each div
  topItem.addEventListener(
    "click",
    () => {
      if (topItem.nextElementSibling.style.display == "none") {
        topItem.nextElementSibling.style.display = "block";
        let spanElement = topItem.children[1];
        console.log(spanElement);
        let imageElement = spanElement.children[0];
        console.log(imageElement);
        imageElement.style.transform = "rotate(180deg)";
      } else {
        topItem.nextElementSibling.style.display = "none";
        let spanElement = topItem.children[1];
        console.log(spanElement);
        let imageElement = spanElement.children[0];
        console.log(imageElement);
        imageElement.style.transform = "rotate(0deg)";
      }
    },
    false
  );
});

const mqLarge = window.matchMedia("(min-width: 991.98px)");
mqLarge.addEventListener("change", mqHandler);

// media query handler function
function mqHandler(e) {
  if (e.matches) {
    hamburgerMenu.style.left = "-340px";
    let body = document.querySelector(".containerr");
    body.style.filter = "blur(0px)";
  }
}
