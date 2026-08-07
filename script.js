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
// ===== Cart Page =====

function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");

if(!cartItems) return;

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="item">
<h3>${item.name}</h3>
<p>Price: ₹${item.price}</p>

<button onclick="removeItem(${index})">
❌ Remove
</button>

</div>
`;

});

document.getElementById("total").innerText = total;

}

function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

updateCartCount();

}

document.addEventListener("DOMContentLoaded",loadCart);
