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
// changeable section
let changeableSection = document.querySelector(".changeable-section");
let detailsContainerElem = document.querySelector(".details-container");
let changeableButton = document.querySelectorAll(".changeable-btn");
let specificationItems = [
  { name: "Weight", desc: "7.25kg" },
  { name: "dimes", desc: "80 * 89 * 78" },
  { name: "size", desc: "one size fits all" },
];

// find target Obj
function findTargetObj(searchID) {
  let mainProduct = products.find(function (product) {
    return product.id == searchID;
  });

  targetSlider = mainProduct;

  createButtons(targetSlider, i);
}
// findTargetObj(targetSearchID);

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

// dynamic changeable section
function addSectionInnerHtml() {
  // changeableSection.insertAdjacentHTML(
  //   "beforeend",
  //   '<div class="details-container dynamic-desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempincid idunt ut labore et dolore magna aliqua. nisi ut aliquip ex eacommodo consat. Duis aute irure dolor in reprehenderit n volup tate velitesse cillum dolore euy elit ale ruin irure dolor in. Adipisci accusatainterpretaris nec ea. In etiam neglegentur has, his iudico vidisse feugiatid. An nibh homero pri, mutat feugait salutandi id me.</div>'
  // );
  // changeableSection.insertAdjacentHTML(
  //   "beforeend",
  //   '<div class="details-container dynamic-additional">  <div>    <p>RAM Size :</p>    16GB , 32Gb , 8GB  </div>  <div>    <p>Colors :</p>    White , Orange , Grey  </div></div>'
  // );
}
addSectionInnerHtml();

specificationItems.forEach(function (item) {
  detailsContainerElem.insertAdjacentHTML(
    "beforeend",
    '<div class="spec-item">' + item.name + " :<p> " + item.desc + "</p></div>"
  );
});

let targetButtonId = null;

changeableButton.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    targetButtonId = event.target.id;
    switch(targetButtonId){
    }
  });
});
