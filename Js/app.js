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
let userBasketContainerElem = document.querySelector(".user-basket");
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
        '</div><div class="recently-icon basket-icon2"></div><button class="recently-add-shop"></button></div>'
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
  let mainProduct = products.find(function (product) {
    return product.id === productID;
  });

  userBasket.push(mainProduct);
  setContainerProducts(userBasket);
}

function setContainerProducts(userBasket) {
  userBasketContainerElem.innerHTML = "";

  userBasket.forEach(function (product) {
    userBasketContainerElem.insertAdjacentHTML(
      "beforeend",
      "<div>  " +
        product.id +
        " <div onclick='removeProduct(" +
        product.id +
        ")'>remove</div> </div> "
    );
  });

  calculateProductPrice(userBasket);
}

function removeProduct(productID) {
  userBasket = userBasket.filter(function (product) {
    return product.id !== productID;
  });

  setContainerProducts(userBasket);
  calculateProductPrice(userBasket);
}

function calculateProductPrice(userBasket) {
  let sum = null;
  userBasket.forEach(function (product) {
    sum = sum + product.price * product.count;
  });

  console.log(sum);
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
