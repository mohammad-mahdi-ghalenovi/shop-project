const cartItemsContainer = document.querySelector(".left__carts-container");
const titleCountElem = document.querySelector(".title__count");

function loadProducts() {
  fetch("https://shop-project1-d3570-default-rtdb.firebaseio.com/products.json")
    .then((res) => res.json())
    .then((data) => {
      createProducts(data);
    });
}

function createProducts(data) {
  if (data) {
    data = Object.entries(data);
    cartItemsContainer.innerHTML = "";
    titleCountElem.innerHTML = data.length + " items";
    data.forEach((product) => {
      cartItemsContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="cart-item">
      <div class="cart-img">
          <div style="background-image: url(${product[1].images[0]})" class="cart__img" /></div>
      </div>
      <div class="cart-infos">
          <div class="info__category">${product[1].category}</div>
          <div class="info__name">${product[1].title}</div>
      </div>
      <div class="cart-count">
          <input type="number" value="1" min="1" class="count__input" />
      </div>
      <div class="cart-price">$${product[1].price}</div>
      <button class="cart-close" onclick="deleteProduct('${product[0]}')">X</button>
    </div>
      `
      );
    });
  } else {
    titleCountElem.innerHTML = 0 + " items";
    cartItemsContainer.innerHTML = "";
  }
}

function deleteProduct(productID) {
  fetch(
    `https://shop-project1-d3570-default-rtdb.firebaseio.com/products/${productID}.json`,
    {
      method: "DELETE",
    }
  ).then(() => {
    loadProducts();
  });
}

window.addEventListener("load", () => {
  loadProducts();
});
