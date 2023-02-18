let sliderElem = document.querySelector(".slider");
let nxtButton = document.querySelector(".nxt");
let PreButton = document.querySelector(".pre");
let slidesSelection = document.querySelector(".slides");
let sliderInfoContainer = document.querySelector(
  ".slider-product-name-container"
);
let sliderInfoName = document.querySelector(".name");
let sliderInfoCode = document.querySelector(".code");
let imgs = [
  { id: 0, src: "imgs/download.png", name: "Computer & Laptops", icon: "WP-213131" },
  { id: 1, src: "img.png", name: "Headphones & AirPods", icon: "WP-213131-ME" },
  { id: 2, src: "img1.png", name: "Cameras & Lenses", icon: "WP-213131-ME" },
  { id: 3, src: "img2.png", name: "Mouse & Keyboards", icon: "WP-213131-ME" },
  { id: 4, src: "img3.png", name: "Washing Machines", icon: "WP-213131-ME" },
  {
    id: 5,
    src: "fast-forward.png",
    name: "TV & Audio Speakers",
    icon: "WP-213131-ME",
  },
];
let slideCounter = 0;
//onload
window.onload = function () {
  setTimeout(() => {
    setImgSrc(slideCounter);
  }, 400);
};

function nxtImgHandler() {
  slideCounter++;
  if (slideCounter > imgs.length - 1) {
    slideCounter = 0;
  }
  setImgSrc(slideCounter);
}

function preImgHandler() {
  slideCounter--;
  if (slideCounter < 0) {
    slideCounter = imgs.length - 1;
  }
  setImgSrc(slideCounter);
}

//set details & src
function setImgSrc(i) {
  sliderElem.classList.add("transition");
  sliderInfoContainer.classList.add("animated");

  setTimeout(function () {
    sliderElem.classList.remove("transition");
  }, 400);

  sliderInfoContainer.addEventListener("animationend", function () {
    sliderInfoContainer.classList.remove("animated");
  });

  setTimeout(function () {
    sliderElem.setAttribute("src", imgs[i].src);
  }, 300);

  sliderInfoName.textContent = imgs[i].name;
  sliderInfoCode.textContent = imgs[i].icon;

  slideCounter = i;
}

imgs.forEach(function (img) {
  slidesSelection.insertAdjacentHTML(
    "beforeend",
    '<div  class="slide" onclick="goToSlide(' +
      img.id +
      ')"><div class="slide-icon"></div><p>' +
      img.name +
      "</p></div>"
  );
});

function goToSlide(imgID) {
  setImgSrc(imgID);
}

nxtButton.addEventListener("click", nxtImgHandler);
PreButton.addEventListener("click", preImgHandler);
