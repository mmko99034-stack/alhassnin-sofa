#<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجر الكنبات</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
</head>
<body>

<header>
    <h1>Al-Hassanien Furniture</h1>
    <button id="cart-btn">🛒 السلة (<span id="cart-count">0</span>)</button>
</header>

<section class="products">
    <div class="product">
        <img src="images/sofa1.jpg" alt="كنبة كلاسيك">
        <h2>كنبة كلاسيك</h2>
        <p>سعر خاص</p>
        <button onclick="addToCart('كنبة كلاسيك')">أضف للسلة</button>
    </div>

    <div class="product">
        <img src="images/sofa2.jpg" alt="كنبة زاوية">
        <h2>كنبة زاوية</h2>
        <p>تصميم عصري</p>
        <button onclick="addToCart('كنبة زاوية')">أضف للسلة</button>
    </div>

    <div class="product">
        <img src="images/sofa3.jpg" alt="كنبة فاخرة">
        <h2>كنبة فاخرة</h2>
        <p>راحة وأناقة</p>
        <button onclick="addToCart('كنبة فاخرة')">أضف للسلة</button>
    </div>
</section>

<div id="cart-sidebar" class="cart-sidebar">
    <h2>سلة التسوق</h2>
    <ul id="cart-items"></ul>

    <form id="checkout-form">
        <input type="text" id="name" placeholder="الاسم الكامل" required>
        <input type="text" id="phone" placeholder="رقم الهاتف" required>
        <textarea id="address" placeholder="العنوان والتفاصيل" required></textarea>
        <button type="submit">إرسال الطلب</button>
    </form>
</div>

<script src="script.js"></script>
</body>
</html>