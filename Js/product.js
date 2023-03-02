let products = [
  { id: 1, slides: ["1", "2", "3"] },
  { id: 2, slides: ["4", "5", "6"] },
  { id: 3, slides: ["7", "8", "9"] },
];
let productSlider = document.querySelector(".product-slider");
let productSlides = document.querySelector(".product-slides");
// URL PARAM
let locationSearch = location.search;
let SearchUrlParam = new URLSearchParams(locationSearch);
let targetSearchID = SearchUrlParam.get("id");
//slider
let targetSlider = [];

// find target Obj
function findTargetObj(searchID) {
  let mainProduct = products.find(function (product) {
    return product.id == searchID;
  });

  targetSlider = mainProduct;

  createButtons(targetSlider);
}
findTargetObj(targetSearchID);

// create Click slides
function createButtons(targetSlider) {
  targetSlider.slides.forEach(function (slide) {
    productSlides.insertAdjacentHTML(
      "beforeend",
      "<button onclick='changeSlideImg()'>Slide no</button>" // set the same background for main slider
    );
  });
}

function changeSlideImg(slideID) {
  productSlider.textContent = targetSlider[slideID - 1];
}
