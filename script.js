document.addEventListener("DOMContentLoaded", () => {
  console.log("WATER HUB 2.0 Loaded Successfully!");

  updateCartCount();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert(name + " Cart-এ যোগ হয়েছে ✅");
}

function updateCartCount() {

  let count = document.getElementById("cart-count");

  if (count) {
    count.innerText = cart.length;
  }

}

function callNow() {
  window.location.href = "tel:7866945566";
}

function whatsappNow() {
  window.open("https://wa.me/917866945566", "_blank");
}
