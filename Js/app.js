let products = [
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "Imgs/download.png",
  },
];
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
// animated
const topRateBanner = document.querySelectorAll(".top-rate-banner");
const bigBannerImg = document.querySelector(".big-banner-img");
const bannerProductName = document.querySelector(
  ".banner-product-name-container"
);

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

function createDynamicProducts(container, product, isFirstTemplate) {
  // first template of product
  if (isFirstTemplate == true) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="product-card" onclick="testOne(' +
        product.id +
        ');" onload="testOnload() "><p>METTI SHOP</p><div class="static-title"></div><div class="product-icon heart-icon"></div><div class="product-card-img" style="background-image: url(' +
        product.src +
        ')"></div><div class="product-card-title"> ' +
        product.title +
        '</div><div class="product-card-price">' +
        "$" +
        product.price +
        '</div> <div class="product-icon basket-icon"></div> <div class="add-product">Select Options</div></div>'
    );
  } else if (isFirstTemplate == false) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="recently-product"><div class="recently-static-title">Metti</div><div class="recently-icon heart-icon2"></div><div class="recently-card-img" style="background-image: url(' +
        product.src +
        ')"></div><div class="recently-card-title"> ' +
        product.title +
        ' </div><div class="recently-card-price">' +
        "$" +
        "  " +
        product.price +
        '</div><div class="recently-icon basket-icon2"></div><button class="recently-add-shop"></button></div>'
    );
  }
}

function testOne(productID) {
  location.href =
    "file:///C:/Users/Win%20Green/Desktop/newProject/index.html?id=" +
    productID;
}

// add scroll animations
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  // navigation
  if (scrolled > 0) {
    navigationElem.classList.add("active-nav");
    navigationLiChilds.forEach(function (li) {
      li.style.color = "black";
    });
    hamMenuElem.classList.remove("ham-active");
  } else {
    navigationElem.classList.remove("active-nav");
    navigationLiChilds.forEach(function (li) {
      li.style.color = "white";
    });
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
});

function showHamMenu(menu) {
  menu.classList.toggle("ham-active");
}

hamMenuButton.addEventListener("click", function () {
  showHamMenu(hamMenuElem);
});