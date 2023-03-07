let sliderElem = document.querySelector(".slider");
let nxtButton = document.querySelector(".nxt");
let PreButton = document.querySelector(".pre");
const slidesSelection = document.querySelector(".slides");
let sliderInfoContainer = document.querySelector(
  ".slider-product-name-container"
);
let sliderInfoName = document.querySelector(".name");
let sliderInfoCode = document.querySelector(".code");
let imgs = [
  {
    id: 0,
    src: "Imgs/products/game-headphone.png",
    name: "Headphones & AirPods",
    icon: "WP-213131-ME",
    activeClass: "",
    icon: "Imgs/Icons/icons8-headphones-40.png",
  },
  {
    id: 1,
    src: "imgs/download.png",
    name: "Computer & Laptops",
    icon: "WP-213131",
    activeClass: "",
    icon: "Imgs/Icons/icons8-monitor-40.png",
  },

  {
    id: 2,
    src: "Imgs/products/camera.png",
    name: "Cameras & Lenses",
    icon: "WP-213131-ME",
    activeClass: "",
    icon: "Imgs/Icons/icons8-camera-40.png",
  },
  {
    id: 3,
    src: "Imgs/products/keyboard.png",
    name: "Mouse & Keyboards",
    icon: "WP-213131-ME",
    activeClass: "",
    icon: "Imgs/Icons/icons8-keyboard-40.png",
  },
  {
    id: 4,
    src: "Imgs/products/cable.png",
    name: "Network Cable",
    icon: "WP-213131-ME",
    activeClass: "",
    icon: "Imgs/Icons/cable.png",
  },
  {
    id: 5,
    src: "Imgs/products/tv.png",
    name: "TV & Audio Speakers",
    icon: "WP-213131-ME",
    activeClass: "",
    icon: "Imgs/Icons/icons8-tv-show-40.png",
  },
];
let slideCounter = 0;
//onload
window.onload = function () {
  setTimeout(() => {
    setImgSrc(slideCounter);
  }, 400);

  createSlideSigns();
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

  btnClassSetHandler(i);

  slideCounter = i;
}

function btnClassSetHandler(ID) {
  imgs.forEach(function (img) {
    img.activeClass = "";
  });
  imgs[ID].activeClass = "slide-active";
  createSlideSigns();
}

function createSlideSigns() {
  slidesSelection.innerHTML = "";

  imgs.forEach(function (img) {
    slidesSelection.insertAdjacentHTML(
      "beforeend",
      '<div  class="slide ' +
        img.activeClass +
        '" onclick="goToSlide(' +
        img.id +
        ')"><div class="slide-icon" style="background-image: url(' +
        img.icon +
        ')"></div><p>' +
        img.name +
        "</p></div>"
    );
  });
}

function goToSlide(imgID) {
  setImgSrc(imgID);
}

nxtButton.addEventListener("click", nxtImgHandler);
PreButton.addEventListener("click", preImgHandler);
