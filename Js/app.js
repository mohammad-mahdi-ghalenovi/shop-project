let products = [
  {
    id: 1,
    title: "Gaming Glass Case ",
    price: 3000,
    src: "Imgs/products/case.png",
    count: 1,
  },
  {
    id: 2,
    title: "HDMI Cable ",
    price: 30,
    src: "Imgs/products/cable.png",
    count: 1,
  },
  {
    id: 3,
    title: "Camera",
    price: 500,
    src: "Imgs/products/camera.png",
    count: 1,
  },
  {
    id: 4,
    title: "Graphic Card",
    price: 2000,
    src: "Imgs/products/card.png",
    count: 1,
  },
  {
    id: 5,
    title: "Controller",
    price: 500,
    src: "Imgs/products/control.png",
    count: 1,
  },
  {
    id: 6,
    title: "I5 Cpu",
    price: 1200,
    src: "Imgs/products/cpu.png",
    count: 1,
  },
  {
    id: 7,
    title: "Cpu Fan",
    price: 200,
    src: "Imgs/products/CPUFAN.png",
    count: 1,
  },
  {
    id: 8,
    title: "HeadPhone",
    price: 450,
    src: "Imgs/products/game-headphone.png",
    count: 1,
  },
  {
    id: 9,
    title: "Gaming Keyboard",
    price: 340,
    src: "Imgs/products/keyboard.png",
    count: 1,
  },
  {
    id: 10,
    title: "Gaming Mouse",
    price: 150,
    src: "Imgs/products/mouse.png",
    count: 1,
  },
  {
    id: 11,
    title: "Gaming Table",
    price: 1000,
    src: "Imgs/products/table.png",
    count: 1,
  },
  {
    id: 12,
    title: " SAM TV",
    price: 1300,
    src: "Imgs/products/tv.png",
    count: 1,
  },
  {
    id: 13,
    title: "USB",
    price: 30,
    src: "Imgs/products/usb.png",
    count: 1,
  },
  {
    id: 14,
    title: "Gaming Mouse",
    price: 150,
    src: "Imgs/products/mouse.png",
    count: 1,
  },
  {
    id: 7,
    title: "Cpu Fan",
    price: 200,
    src: "Imgs/products/CPUFAN.png",
    count: 1,
  },
  {
    id: 8,
    title: "HeadPhone",
    price: 450,
    src: "Imgs/products/game-headphone.png",
    count: 1,
  },
  {
    id: 9,
    title: "Gaming Keyboard",
    price: 340,
    src: "Imgs/products/keyboard.png",
    count: 1,
  },
  {
    id: 3,
    title: "Camera",
    price: 500,
    src: "Imgs/products/camera.png",
    count: 1,
  },
  {
    id: 4,
    title: "Graphic Card",
    price: 2000,
    src: "Imgs/products/card.png",
    count: 1,
  },
  {
    id: 5,
    title: "Controller",
    price: 500,
    src: "Imgs/products/control.png",
    count: 1,
  },
];
let userBasket = [];
let basketBtnElem = document.querySelector(".basket-btn");
let userBasketContainerElem = document.querySelector(".user-basket-container");
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
let tripleProduct = document.querySelectorAll(".triple-product");

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
  location.href =
    "file:///C:/Users/Win%20Green/Desktop/newProject/product.html?id=" +
    productID;
}

// add to Basket
function addToBasket(productID) {
  // find target product
  let mainProduct = products.find(function (product) {
    return product.id === productID;
  });

  let isAdded = userBasket.some(function (product) {
    return product.id == productID;
  });

  if (isAdded === false) {
    userBasket.push(mainProduct);
    calculateProductPrice(userBasket);
    setBasketProducts(userBasket);
  } else {
    increaseCountHandler(mainProduct);
  }
}

function increaseCountHandler(mainProduct) {
  mainProduct.count += 1;
  calculateProductPrice(userBasket);
  setBasketProducts(userBasket);
}

function setBasketProducts(userBasket) {
  // append product to basket
  userBasketContainerElem.innerHTML = "";

  userBasket.forEach(function (product) {
    userBasketContainerElem.insertAdjacentHTML(
      "beforeend",
      '<div class="basket-product-container"><div class="basket-info">  <div class="basket-name">' +
        product.title +
        '</div>  <div class="basket-img" style="background-image: url(' +
        product.src +
        ')"></div>  <div class="basket-price">' +
        product.price +
        '</div></div><div class="basket-remove">  <i class="fa fa-trash" onclick="removeProduct(' +
        product.id +
        ')"></i></div><input value="' +
        product.count +
        '"  class="basket-count" /></div>'
    );
  });
  userBasketContainerElem.scrollTo(0, 10000);
  userBasketContainerElem.classList.add("basket-active");
}

function removeProduct(productID) {
  // remove product handler
  userBasket = userBasket.filter(function (product) {
    return product.id !== productID;
  });

  setBasketProducts(userBasket);
  calculateProductPrice(userBasket);
}

function calculateProductPrice(userBasket) {
  // calculate product prices
  let sum = null;
  userBasket.forEach(function (product) {
    sum = sum + product.price * product.count;
  });

  // console.log(sum);
}

basketBtnElem.addEventListener("click", function () {
  userBasketContainerElem.classList.toggle("basket-active");
});

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
    userBasketContainerElem.style.top = "60px";
  } else {
    navigationElem.classList.remove("active-nav");
    navigationLiChilds.forEach(function (li) {
      li.style.color = "white";
    });
    //basket
    userBasketContainerElem.style.top = "92px";
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

function showHamMenu(menu) {
  menu.classList.toggle("ham-active");
}

hamMenuButton.addEventListener("click", function () {
  showHamMenu(hamMenuElem);
});
