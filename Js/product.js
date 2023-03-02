let products = [
  {
    id: 1,
    slides: [
      "Imgs/wallpaperflare.com_wallpaper_15.jpg",
      "Imgs/wallpaperflare.com_wallpaper_2.jpg",
      "Imgs/wallpaperflare.com_wallpaper_5.jpg",
    ],
  },
  {
    id: 2,
    slides: [
      "Imgs/wallpaperflare.com_wallpaper_15.jpg",
      "Imgs/wallpaperflare.com_wallpaper_5.jpg",
      "Imgs/wallpaperflare.com_wallpaper_2.jpg",
    ],
  },
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

  targetSlider = mainProduct;

  createButtons(targetSlider, i);
}
findTargetObj(targetSearchID);

// create Click slides
function createButtons(targetSlider) {
  targetSlider.slides.forEach(function (slide) {
    i++;
    productSlides.insertAdjacentHTML(
      "beforeend",
      "<button class='slides' style='background-image: url(" +
        targetSlider.slides[i - 1] +
        ")' onclick='changeSlideImg(" +
        i +
        ")'>" +
        i +
        "</button>" // set the same background for main slider
    );
  });
  //onload
  productSlider.style.backgroundImage = "url(" + targetSlider.slides[0] + ")";
  +");";
}

function changeSlideImg(slideID) {
  productSlider.style.backgroundImage =
    "url(" + targetSlider.slides[slideID - 1];
  +");";
}
