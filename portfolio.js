$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});

const navbar = document.querySelector('.nav-wrapper');
window.onscroll = () => {
    if (window.scrollY > 180) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};