let products = [
  { id: 1, slides: ["1", "2", "3"] },
  { id: 2, slides: ["1", "2", "3"] },
  { id: 3, slides: ["1", "2", "3"] },
];
let productSlider = document.querySelector(".product-slider");
let i = 0;
// URL PARAM
let locationSearch = location.search;
let SearchUrlParam = new URLSearchParams(locationSearch);
let targetSearchID = SearchUrlParam.get("id");

function setSliderId(searchID) {
  let mainProduct = products.find(function (product) {
    return product.id == searchID;
  });

  console.log(mainProduct);
}

setSliderId(targetSearchID);
// slider
// document.body.addEventListener("click", function () {
//   i++;
//   targetSlider = products[0].slides;

//   if (i > targetSlider.length - 1) {
//     i = 0;
//     productSlider.textContent = targetSlider[i];
//   }

//   productSlider.textContent = targetSlider[i];
// });
