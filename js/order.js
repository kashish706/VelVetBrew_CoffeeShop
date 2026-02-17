document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar.classList.add('navbar-hide');
            } else {
                navbar.classList.remove('navbar-hide');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
    const coffeeSelect = document.getElementById("coffeeSelect");
    const quantityInput = document.getElementById("quantity");
    const totalPrice = document.getElementById("totalPrice");
    function calculateTotal() {
        const price = parseInt(coffeeSelect.value);
        const quantity = parseInt(quantityInput.value);
        if (!isNaN(price) && !isNaN(quantity)) {
            totalPrice.textContent = price * quantity;
        }
    }
    if (coffeeSelect && quantityInput && totalPrice) {
        coffeeSelect.addEventListener("change", calculateTotal);
        quantityInput.addEventListener("input", calculateTotal);
    }
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Stop page refresh
            alert("🎉 Your order has been confirmed successfully!");
            orderForm.reset();
            totalPrice.textContent = "0";
        });
    }
});