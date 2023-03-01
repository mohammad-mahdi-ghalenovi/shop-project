let products = [
  { id: 1, slides: ["1", "2", "3"] },
  { id: 2, slides: ["4", "5", "6"] },
  { id: 3, slides: ["7", "8", "9"] },
];
let productSlider = document.querySelector(".product-slider");
let productSlides = document.querySelector(".product-slides");
let i = 0;
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

  targetSlider = mainProduct.slides;
}
findTargetObj(targetSearchID);

// create Click slides

products.forEach(function (product) {
  productSlides.insertAdjacentHTML(
    "beforeend",
    "<button onclick='changeSlideImg(" +
      product.id +
      ")'>Slide no." +
      product.id +
      "</button>"
  );
});

function changeSlideImg(slideID) {
  productSlider.textContent = targetSlider[slideID - 1];
}
