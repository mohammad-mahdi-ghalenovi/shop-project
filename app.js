let products = [
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "SLIDER/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "SLIDER/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "SLIDER/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "SLIDER/download.png",
  },
  {
    id: 1,
    title: "Gaming Monitor 144Ghz WP-2134",
    price: 2000,
    src: "SLIDER/download.png",
  },
];
let maincontainerElem = document.querySelector(".main-container");
const topRatedProducts = document.querySelector(".top-rated-products");
let hamMenuButton = document.querySelector(".ham-menu-btn");
let hamMenuElem = document.querySelector(".ham-menu");

products.forEach(function (product) {
  topRatedProducts.insertAdjacentHTML(
    "beforeend",
    '<div class="product-card" onclick="testOne(' +
      product.id +
      ');"><p>METTI SHOP</p><div class="static-title"></div><div class="product-icon heart-icon"></div><div class="product-card-img" style="background-image: url(' +
      product.src +
      ')"></div><div class="product-card-title"> ' +
      product.title +
      '</div><div class="product-card-price">' +
      "$" +
      product.price +
      '</div> <div class="product-icon basket-icon"></div> <div class="add-product">Select Options</div></div>'
  );
});

function testOne(productID) {
  location.href =
    "file:///C:/Users/Win%20Green/Desktop/newProject/index.html?id=" +
    productID;
}

function showHamMenu(menu) {
  menu.classList.toggle("ham-active");
}

hamMenuButton.addEventListener("click", function () {
  showHamMenu(hamMenuElem);
});
