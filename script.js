document.addEventListener("DOMContentLoaded", () => {
    console.log("WATER HUB 2.0 Loaded Successfully!");

    updateCartCount();
    loadCart();
});


/* =========================
   CART
========================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    /* একই পণ্য আগে থেকে থাকলে quantity বাড়বে */

    let existing = cart.find(item => item.name === name);

    if (existing) {

        existing.qty = Number(existing.qty || 1) + 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            qty: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " Cart-এ যোগ হয়েছে ✅");
}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    let countElement =
        document.getElementById("cart-count");

    if (!countElement) return;

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let totalQty = 0;

    cart.forEach(item => {

        totalQty += Number(item.qty || 1);

    });

    countElement.innerText = totalQty;
}


/* =========================
   CALL
========================= */

function callNow() {

    window.location.href =
        "tel:7866945566";

}


/* =========================
   WHATSAPP
========================= */

function whatsappNow() {

    window.open(
        "https://wa.me/917866945566",
        "_blank"
    );

}


/* =========================
   LOAD CART
========================= */

function loadCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems =
        document.getElementById("cart-items");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="item">
                🛒 আপনার Cart খালি।
            </div>
        `;

        let totalElement =
            document.getElementById("total");

        if (totalElement) {
            totalElement.innerText = "0";
        }

        return;
    }


    cart.forEach((item, index) => {

        let qty =
            Number(item.qty || 1);

        let price =
            Number(item.price || 0);

        let itemTotal =
            price * qty;

        total += itemTotal;


        cartItems.innerHTML += `

        <div class="item">

            <h3>💧 ${item.name}</h3>

            <p>
                প্রতি পিস: ₹${price}
            </p>


            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                gap:30px;
                margin:15px 0;
            ">

                <button
                    onclick="decreaseQty(${index})"
                    style="
                    width:55px;
                    height:55px;
                    border-radius:50%;
                    background:#e53935;
                    color:white;
                    border:none;
                    font-size:28px;
                    font-weight:bold;
                    ">
                    −
                </button>


                <strong style="
                    font-size:24px;
                    ">
                    ${qty}
                </strong>


                <button
                    onclick="increaseQty(${index})"
                    style="
                    width:55px;
                    height:55px;
                    border-radius:50%;
                    background:#0d6efd;
                    color:white;
                    border:none;
                    font-size:28px;
                    font-weight:bold;
                    ">
                    +
                </button>

            </div>


            <p style="
                color:#0077cc;
                font-weight:bold;
                font-size:18px;
                ">
                ${qty} × ₹${price} = ₹${itemTotal}
            </p>


            <button
                onclick="removeItem(${index})"
                style="
                background:white;
                color:#e53935;
                border:1px solid #ccc;
                padding:10px 18px;
                border-radius:10px;
                font-size:16px;
                ">
                ❌ Remove
            </button>

        </div>

        `;

    });


    let totalElement =
        document.getElementById("total");

    if (totalElement) {

        totalElement.innerText = total;

    }

}


/* =========================
   INCREASE QUANTITY
========================= */

function increaseQty(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart[index]) return;

    cart[index].qty =
        Number(cart[index].qty || 1) + 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();

    updateCartCount();
}


/* =========================
   DECREASE QUANTITY
========================= */

function decreaseQty(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart[index]) return;

    let qty =
        Number(cart[index].qty || 1);


    if (qty > 1) {

        cart[index].qty = qty - 1;

    } else {

        cart.splice(index, 1);

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();

    updateCartCount();
}


/* =========================
   REMOVE PRODUCT
========================= */

function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();

    updateCartCount();
}
