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
  { name: "Dimensions", desc: "90 x 60 x 90 cm" },
  { name: "Size", desc: "One Size Fits All" },
  { name: "Color", desc: "Black with Red, White with Gold" },
  { name: "Guarantee", desc: "5 years" },
  { name: "Brand", desc: "Metti" },
  { name: "Item Height", desc: "18 Millimeters" },
  { name: "Item Width", desc: "one size fits all" },
  { name: "Screen Size", desc: "13 Inches" },
  { name: "Item Weight", desc: "1.6kg" },
  { name: "Product Dimensions", desc: "21.9 x 31.4 x 1.8 cm" },
  { name: "Item Model Number", desc: "MF841HN/A" },
  { name: "Processor Brand", desc: "Intel" },
  { name: "Processor Type", desc: "Core I7" },
  { name: "Processor Speed", desc: "3.4 Ghz" },
  { name: "RAM Size", desc: "8 GB" },
  { name: "Hard Drive Size", desc: "512 GB" },
  { name: "Hard Disk Technology", desc: "Solid State Drive" },
  { name: "Graphics Coprocessor", desc: "Intel Integrated Graphics" },
  { name: "Graphic Card Description", desc: "Integrated Graphics Card" },
  { name: "Hardware Platform", desc: "Windows" },
];
// related producrs
let relatedProductSection = document.querySelector(".related-product-section");
// let relatedProducts
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
  window.scrollTo(0, 533);
  detailsContainerElem.insertAdjacentHTML(
    "beforeend",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Loremipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempincid idunt ut labore et dolore magna aliqua. nisi ut aliquip ex eacommodo consat. Duis aute irure dolor in reprehenderit n volup tate velitesse cillum dolore euy elit ale ruin irure dolor in. Adipisci accusatainterpretaris nec ea. In etiam neglegentur has, his iudico vidisse feugiatid. An nibh homero pri, mutat feugait salutandi id me."
  );
}

function aditionalInfoSetHandler() {
  detailsContainerElem.className = "details-container  dynamic-additional";
  detailsContainerElem.innerHTML = "";
  window.scrollTo(0, 533);
  detailsContainerElem.insertAdjacentHTML(
    "beforeend",
    "<div>    <p>RAM Size :</p>    16GB , 32Gb , 8GB  </div>  <div>    <p>Colors :</p>    White , Orange , Grey  </div>"
  );
}

function specInfoSetHandler() {
  detailsContainerElem.classList = "details-container  dynamic-spec ";
  detailsContainerElem.innerHTML = "";
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
        window.scrollTo(0, 933);
        break;
      case 4:
        reviewInfoSetHandler();
        break;
    }
  });
});
//onload
specInfoSetHandler();
// related products

let q = 0;
function setRelatedProducts() {
  products.forEach(function (product) {
    q++;
    if (q > 5) {
      return false;
    } else {
      relatedProductSection.insertAdjacentHTML(
        "beforeend",
        '<div class="product-card" onclick="referToProductPage(' +
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
    }
  });
}
setRelatedProducts();

function referToProductPage(productID) {
  location.href =
    "file:///C:/Users/Win%20Green/Desktop/newProject/product.html?id=" +
    productID;
}

document.body.style.zoom = "90%";
