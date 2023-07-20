const cartItemsContainer = document.querySelector(".left__carts-container");
const titleCountElem = document.querySelector(".title__count");
let sumCount = 0;
const successNotfi = document.querySelector(".success-notfi")

function loadProducts() {
  fetch("https://competition-shop-default-rtdb.firebaseio.com/products.json")
    .then((res) => res.json())
    .then((data) => {
      createProducts(data);
    });
}

function createProducts(data) {
  if (data) {
    data = Object.entries(data);
    cartItemsContainer.innerHTML = "";
    data.forEach((product) => {
      cartItemsContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="cart-item">
      <div class="cart-img">
          <div style="background-image: url(${product[1].src})" class="cart__img" /></div>
      </div>
      <div class="cart-infos">
          <div class="info__category">${""}</div>
          <div class="info__name">${product[1].title}</div>
      </div>
      <div class="cart-count">
          <input type="number" value="${product[1].count}" min="1" class="count__input" />
      </div>
      <div class="cart-price">$${product[1].price}</div>
      <button class="cart-close" onclick="deleteProduct('${product[0]}')">X</button>
    </div>
      `
      );
      sumCount += product[1].price * product[1].count
    });
  } else {
    cartItemsContainer.innerHTML = "";
    titleCountElem.innerHTML =  "$"+ 0
  }

  titleCountElem.innerHTML =  "Total Price : $"+ sumCount
  sumCount = 0
}

let isAdded;
function deleteProduct(productID) {
  fetch(
    `https://competition-shop-default-rtdb.firebaseio.com/products/${productID}.json`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    isAdded = true;
    showNotif(isAdded);
    loadProducts();
  })
  .catch(() => {
    isAdded = false;
    showNotif(isAdded);
  })
}
loadProducts();

function showNotif(isAdded) {
  if (isAdded) {
    successNotfi.innerHTML  = "Product deleted successfully ✅"
  } else {
    successNotfi.innerHTML  = "Product not deleted successfully ❌"
  }

  
  successNotfi.classList.add("active");
  setTimeout(() => {
    successNotfi.classList.remove("active"); 
  }, 3000);
}
