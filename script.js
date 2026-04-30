// script.js

emailjs.init("YOUR_PUBLIC_KEY"); // ضع المفتاح العام من EmailJS هنا

let cart = [];

// إضافة منتج للسلة
function addToCart(productName) {
    cart.push(productName);
    updateCart();
    openCart();
}

// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item}
            <button onclick="removeFromCart(${index})">❌</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
}

// حذف منتج
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// فتح/إغلاق السلة
const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");

cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("active");
});

function openCart() {
    cartSidebar.classList.add("active");
}

// إظهار صفحة الدفع
function toggleCheckout() {
    document.getElementById("checkout").classList.toggle("hidden");
}

// إرسال الطلب
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("السلة فارغة");
        return;
    }

    const customerName = document.getElementById("name").value;
    const customerPhone = document.getElementById("phone").value;
    const customerAddress = document.getElementById("address").value;

    const orderDetails = cart.join(", ");

    const templateParams = {
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        order_details: orderDetails,
        to_email: "mmko99034@gmail.com"
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            alert("تم إرسال الطلب بنجاح");
            cart = [];
            updateCart();
            document.getElementById("checkout-form").reset();
            document.getElementById("checkout").classList.add("hidden");
        }, function(error) {
            alert("حدث خطأ أثناء الإرسال");
            console.log(error);
        });
});