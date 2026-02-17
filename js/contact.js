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
    const contactForm = document.getElementById("contactForm");
    const contactSuccess = document.getElementById("contactSuccess");
    if (contactForm && contactSuccess) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            contactSuccess.classList.remove("d-none");
            contactForm.reset();
            setTimeout(() => {
                contactSuccess.classList.add("d-none");
            }, 3000);
        });
    }
});