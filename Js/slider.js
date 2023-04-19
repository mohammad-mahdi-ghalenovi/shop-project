let sliderElem = document.querySelector(".slider");
let nxtButton = document.querySelector(".nxt");
let PreButton = document.querySelector(".pre");
const slidesSelection = document.querySelector(".slides");
let sliderInfoContainer = document.querySelector(
  ".slider-product-name-container"
);
let sliderInfoName = document.querySelector(".name");
let sliderInfoCode = document.querySelector(".code");
let sliderImgs = [
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
// Start of TopSlider  \\
let slideCounter = 0;
//onload
window.onload = function () {
  setTimeout(() => {
    setImgSrc(slideCounter); // when window loaded , first slide will show
  }, 400);

  createSlideHandlers();
};

function nxtImgHandler() {
  slideCounter++;
  if (slideCounter > sliderImgs.length - 1) {
    slideCounter = 0;
  }
  setImgSrc(slideCounter);
}

function preImgHandler() {
  slideCounter--;
  if (slideCounter < 0) {
    slideCounter = sliderImgs.length - 1;
  }
  setImgSrc(slideCounter);
}

//set details & src
function setImgSrc(i) {
  sliderElem.classList.add("transition");
  sliderInfoContainer.classList.add("animated"); // add some animations to have a smooth change

  setTimeout(function () {
    sliderElem.classList.remove("transition");
  }, 400);

  sliderInfoContainer.addEventListener("animationend", function () {
    sliderInfoContainer.classList.remove("animated");
  });

  setTimeout(function () {
    sliderElem.setAttribute("src", sliderImgs[i].src); // set new src of img
  }, 300);

  sliderInfoName.textContent = sliderImgs[i].name; // set new name of img
  sliderInfoCode.textContent = sliderImgs[i].icon; // set new code of img

  btnClassSetHandler(i);

  slideCounter = i; // counter number reset
}

function btnClassSetHandler(ID) {
  sliderImgs.forEach(function (img) {
    // set active class to the btns
    img.activeClass = "";
  });
  sliderImgs[ID].activeClass = "slide-active";
  createSlideHandlers();
}

function createSlideHandlers() {
  // the handler btns created and onclick seted
  slidesSelection.innerHTML = "";

  sliderImgs.forEach(function (img) {
    slidesSelection.innerHTML += `
    <div  class="slide ${img.activeClass}" onclick="goToSlide(${img.id})"> 
            <div class="slide-icon" style="background-image: url(${img.icon})"></div>
            <p>${img.name}</p>
    </div>`;
  });
}

function goToSlide(imgID) {
  // go to target of handlers  img
  setImgSrc(imgID);
}

nxtButton.addEventListener("click", nxtImgHandler);
PreButton.addEventListener("click", preImgHandler);
// End of TopSlider \\
