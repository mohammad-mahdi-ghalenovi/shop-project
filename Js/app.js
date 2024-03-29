// basket
let userBasket = [];
let basketBtnElem = document.querySelector(".basket-btn");
let userBasketContainerElem = document.querySelector(
  ".basket-products-container"
);
let totalPriceElem = document.querySelector(".total-price");
let purchaceAllBtn = document.querySelector(".purchace-all");
// sections
let maincontainerElem = document.querySelector(".main-container");
const topRatedProducts = document.querySelector(".top-rated-products");
const featuredProducts = document.querySelector(".featured-products");
const recentlyProduct = document.querySelector(".recently-products");
let hamMenuButton = document.querySelector(".ham-menu-btn");
let hamMenuElem = document.querySelector(".ham-menu");
let i = 0;
//navigation
const navigationElem = document.querySelector(".top-navigation-container");
const navigationLiChilds = document.querySelectorAll(
  ".top-navigation-container li"
);
const successNotfi = document.querySelector(".success-notfi")
// animated
const topRateBanner = document.querySelectorAll(".top-rate-banner");
const bigBannerImg = document.querySelector(".big-banner-img");
const bannerProductName = document.querySelector(
  ".banner-product-name-container"
);
let tripleProduct = document.querySelectorAll(".triple-product");
// 

let isFirstTemplate = true;
products.forEach(function (product) {
  i++;
  if (i < 6) {
    createDynamicProducts(topRatedProducts, product, isFirstTemplate); // 5 products
  } else if (i > 5 && i < 13) {
    createDynamicProducts(featuredProducts, product, isFirstTemplate); // 7 products
  } else {
    isFirstTemplate = false;
    createDynamicProducts(recentlyProduct, product, isFirstTemplate); // 8 products
  }
});

// two type of product designs
function createDynamicProducts(container, product, isFirstTemplate) {
  if (isFirstTemplate == true) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="product-card"><p>METTI SHOP</p><div class="static-title"></div><div class="product-icon heart-icon"></div><div class="product-card-img" style="background-image: url(' +
      product.src +
      ')" onclick="testOne(' + //
      product.id +
      ');"></div><div class="product-card-title" onclick="testOne(' + //
      product.id +
      ');"> ' +
      product.title +
      '</div><div class="product-card-price">' +
      "$" +
      product.price +
      '</div> <div class="product-icon basket-icon"></div> <div class="add-product" onclick="addToBasket(' +
      product.id +
      ')">Select Options</div></div>'
    );
  } else if (isFirstTemplate == false) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="recently-product"><div class="recently-static-title">Metti</div><div class="recently-icon heart-icon2"></div><div class="recently-card-img" style="background-image: url(' +
      product.src +
      ')" onclick="testOne(' + //
      product.id +
      ');"></div><div class="recently-card-title"  onclick="testOne(' + //
      product.id +
      ');"> ' +
      product.title +
      ' </div><div class="recently-card-price">' +
      "$" +
      "  " +
      product.price +
      '</div><div class="recently-icon basket-icon2"></div><button class="recently-add-shop" onclick="addToBasket(' +
      product.id +
      ')"></button></div>'
    );
  }
}

// go to product page
function testOne(productID) {
  location.href = "product.html?id=" + productID;
}

// add to Basket
function addToBasket(productID) {
  // find target product
  let mainProduct = products.find(function (product) {
    return product.id === productID;
  });

  sendToShopCart(mainProduct)
}

let isAdded;
function sendToShopCart(product) {
  fetch(
    "https://competition-shop-default-rtdb.firebaseio.com/products.json",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      isAdded = true
      showNotif(isAdded)
    })
    .catch((err) => {
      isAdded = false
      showNotif(isAdded)
    });
}

function showNotif(isAdded) {
  if (isAdded) {
    successNotfi.innerHTML  = "Product added successfully ✅"
  } else {
    successNotfi.innerHTML  = "Product not added successfully ❌"
  }

  
  successNotfi.classList.add("active")
  setTimeout(() => {
    successNotfi.classList.remove("active")
  }, 3000);
}

// add scroll animations
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  // navigation
  if (scrolled > 0) {
    navigationElem.classList.add("active-nav");
    navigationLiChilds.forEach(function (li) {
      li.style.color = "white";
    });
    hamMenuElem.classList.remove("ham-active");
    //basket
  } else {
    navigationElem.classList.remove("active-nav");
    navigationLiChilds.forEach(function (li) {
      li.style.color = "white";
    });
    //basket
  }
  // twice banners
  if (scrolled > 750) {
    topRateBanner.forEach(function (banner) {
      banner.classList.add("animated-banner");

      banner.addEventListener("animationend", function () {
        banner.classList.remove("animated-banner");
      });
    });
  } else {
    topRateBanner.forEach(function (banner) {
      banner.classList.remove("animated-banner");
    });
  }
  // big banner
  if (scrolled > 1772) {
    bigBannerImg.classList.add("big-banner-animate");
    bannerProductName.classList.add("big-banner-animate");
  } else {
    bigBannerImg.classList.remove("big-banner-animate");
    bannerProductName.classList.remove("big-banner-animate");
  }
  // triple banner
  if (scrolled > 2755) {
    tripleProduct.forEach(function (banner) {
      banner.classList.add("animated-banner");
    });
  } else {
    tripleProduct.forEach(function (banner) {
      banner.classList.remove("animated-banner");
    });
  }
});

// show hamburger Menu
function showHamMenu(menu) {
  menu.classList.toggle("ham-active");
}

hamMenuButton.addEventListener("click", function () {
  showHamMenu(hamMenuElem);
});

window.addEventListener("load", () => {
  document.querySelector(".loading").classList.add("invisible")
})