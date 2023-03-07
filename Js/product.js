let products = [
  {
    id: 1,
    title: "Gaming Glass Case ",
    price: 3000,
    src: "Imgs/products/case.png",
    slides: [
      "Imgs/products/case.png",
      "Imgs/products/case.png",
      "Imgs/products/case.png",
    ],
  },
  {
    id: 2,
    title: "HDMI Cable ",
    price: 30,
    src: "Imgs/products/cable.png",
    slides: [
      "Imgs/products/cable.png",
      "Imgs/products/cable.png",
      "Imgs/products/cable.png",
    ],
  },
  {
    id: 3,
    title: "Camera",
    price: 500,
    src: "Imgs/products/camera.png",
    slides: [
      "Imgs/products/camera.png",
      "Imgs/products/camera.png",
      "Imgs/products/camera.png",
    ],
  },
  {
    id: 4,
    title: "Graphic Card",
    price: 2000,
    src: "Imgs/products/card.png",
    slides: [
      "Imgs/products/card.png",
      "Imgs/products/card.png",
      "Imgs/products/card.png",
    ],
  },
  {
    id: 5,
    title: "Controller",
    price: 500,
    src: "Imgs/products/control.png",
    slides: [
      "Imgs/products/control.png",
      "Imgs/products/control.png",
      "Imgs/products/control.png",
    ],
  },
  {
    id: 6,
    title: "I5 Cpu",
    price: 1200,
    src: "Imgs/products/cpu.png",
    slides: [
      "Imgs/products/cpu.png",
      "Imgs/products/cpu.png",
      "Imgs/products/cpu.png",
    ],
  },
  {
    id: 7,
    title: "Cpu Fan",
    price: 200,
    src: "Imgs/products/cpu-fan.png",
    slides: [
      "Imgs/products/cpu-fan..png",
      "Imgs/products/cpu-fan..png",
      "Imgs/products/cpu-fan..png",
    ],
  },
  {
    id: 8,
    title: "HeadPhone",
    price: 450,
    src: "Imgs/products/game-headphone.png",
    slides: [
      "Imgs/products/game-headphone.png",
      "Imgs/products/game-headphone.png",
      "Imgs/products/game-headphone.png",
    ],
  },
  {
    id: 9,
    title: "Gaming Keyboard",
    price: 340,
    src: "Imgs/products/keyboard.png",
    slides: [
      "Imgs/products/keyboard.png",
      "Imgs/products/keyboard.png",
      "Imgs/products/keyboard.png",
    ],
  },
  {
    id: 10,
    title: "Gaming Mouse",
    price: 150,
    src: "Imgs/products/mouse.png",
    slides: [
      "Imgs/products/mouse.png",
      "Imgs/products/mouse.png",
      "Imgs/products/mouse.png",
    ],
  },
  {
    id: 11,
    title: "Gaming Table",
    price: 1000,
    src: "Imgs/products/table.png",
    slides: [
      "Imgs/products/table.png",
      "Imgs/products/table.png",
      "Imgs/products/table.png",
    ],
  },
  {
    id: 12,
    title: " SAM TV",
    price: 1300,
    src: "Imgs/products/tv.png",
    slides: [
      "Imgs/products/tv.png",
      "Imgs/products/tv.png",
      "Imgs/products/tv.png",
    ],
  },
  {
    id: 13,
    title: "USB",
    price: 30,
    src: "Imgs/products/usb.png",
    slides: [
      "Imgs/products/usb.png",
      "Imgs/products/usb.png",
      "Imgs/products/usb.png",
    ],
  },
  {
    id: 14,
    title: "Gaming Mouse",
    price: 150,
    src: "Imgs/products/mouse.png",
    slides: [
      "Imgs/products/mouse.png",
      "Imgs/products/mouse.png",
      "Imgs/products/mouse.png",
    ],
  },
];
// onload elems
let infoNameElem = document.querySelector(".info-name");
let infoPriceElem = document.querySelector(".info-price");

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
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
  { name: "size", desc: "one size fits all" },
];
// related producrs
let relatedProductSection = document.querySelector(".related-product-section");
let relatedProducts = [
  {
    id: 6,
    title: "I5 Cpu",
    price: 1200,
    src: "Imgs/products/cpu.png",
  },
  {
    id: 7,
    title: "Cpu Fan",
    price: 200,
    src: "Imgs/products/cpu-fan.png",
  },
  {
    id: 8,
    title: "HeadPhone",
    price: 450,
    src: "Imgs/products/game-headphone.png",
  },
  {
    id: 9,
    title: "Gaming Keyboard",
    price: 340,
    src: "Imgs/products/keyboard.png",
  },
  {
    id: 7,
    title: "Cpu Fan",
    price: 200,
    src: "Imgs/products/cpu-fan.png",
  },
];

// find target Obj
function findTargetObj(searchID) {
  let mainProduct = products.find(function (product) {
    return product.id == searchID;
  });

  targetSlider = mainProduct;

  createButtons(targetSlider, i);
  setProductsInformation(mainProduct);
  console.log(mainProduct);
}
findTargetObj(targetSearchID);

function setProductsInformation(mainProduct) {
  infoNameElem.textContent = mainProduct.title;
  infoPriceElem.textContent = "$" + mainProduct.price;
}

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

function descInfoSetHandler() {
  detailsContainerElem.className = "details-container dynamic-desc";
  detailsContainerElem.innerHTML = "";
  detailsContainerElem.insertAdjacentHTML(
    "beforeend",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempincid idunt ut labore et dolore magna aliqua. nisi ut aliquip ex eacommodo consat. Duis aute irure dolor in reprehenderit n volup tate velitesse cillum dolore euy elit ale ruin irure dolor in. Adipisci accusatainterpretaris nec ea. In etiam neglegentur has, his iudico vidisse feugiatid. An nibh homero pri, mutat feugait salutandi id me."
  );
}

function aditionalInfoSetHandler() {
  detailsContainerElem.className = "details-container  dynamic-additional";
  detailsContainerElem.innerHTML = "";
  detailsContainerElem.insertAdjacentHTML(
    "beforeend",
    "<div>    <p>RAM Size :</p>    16GB , 32Gb , 8GB  </div>  <div>    <p>Colors :</p>    White , Orange , Grey  </div>"
  );
}

function specInfoSetHandler() {
  detailsContainerElem.classList = "details-container  dynamic-spec ";
  detailsContainerElem.innerHTML = "";
  window.scrollTo(0, 933);
  specificationItems.forEach(function (item) {
    detailsContainerElem.insertAdjacentHTML(
      "beforeend",
      '<div class="spec-item">' +
        item.name +
        " :<p> " +
        item.desc +
        "</p></div>"
    );
  });
}

function reviewInfoSetHandler() {
  detailsContainerElem.className = "details-container dynamic-review";
  detailsContainerElem.innerHTML = "";
  window.scrollTo(0, 933);
  for (let i = 0; i < 2; i++) {
    detailsContainerElem.insertAdjacentHTML(
      "beforeend",
      '<div class="review-container">    <div class="review-profile"></div>    <div class="info-rate-container">      <div class="rate-stars"></div>      <div class="rate-stars"></div>      <div class="rate-stars"></div>      <div class="rate-stars"></div>      <div class="rate-stars"></div>    </div>    <div class="review-since">OCTOBER 19, 2022</div>    <div class="review-name">Metti Gh</div>    <div class="review-desc">      eserunt, voluptates cumque! Perferendis rem distinctio sapiente      laudantium exercitationem, maxime ad mollitia, quisquam deserunt      sequi eligendi molestiae excepturi!     </div>   </div>'
    );
  }
}

let targetButtonId = null;
changeableButton.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    targetButtonId = event.target.id * 1;
    detailsContainerElem.innerHTML = "";

    switch (targetButtonId) {
      case 1:
        descInfoSetHandler();
        break;
      case 2:
        aditionalInfoSetHandler();
        break;
      case 3:
        specInfoSetHandler();
        break;
      case 4:
        reviewInfoSetHandler();
        break;
    }
  });
});

// related products

function setRelatedProducts() {
  relatedProducts.forEach(function (product) {
    relatedProductSection.insertAdjacentHTML(
      "beforeend",
      '<div class="product-card" onclick="testOne(' +
        product.id +
        ');" ><p>METTI SHOP</p><div class="static-title"></div><div class="product-icon heart-icon"></div><div class="product-card-img" style="background-image: url(' +
        product.src +
        ')"></div><div class="product-card-title"> ' +
        product.title +
        '</div><div class="product-card-price">' +
        "$" +
        product.price +
        '</div> <div class="product-icon basket-icon"></div> <div class="add-product">Select Options</div></div>'
    );
  });
}
setRelatedProducts();

document.body.style.zoom = "90%";
