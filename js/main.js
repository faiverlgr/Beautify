// HAMBURGER

const headerMenuClone = document.querySelector(".header__menu").cloneNode(1),
    footerMenuClone = document.querySelector(".footer__menu").cloneNode(1),
    hamburger = document.querySelector(".hamburger"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    body = document.querySelector("body");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    popup.classList.toggle("show");
    body.classList.toggle("noscroll");
    popupContent.appendChild(headerMenuClone);
    popupContent.appendChild(footerMenuClone);
})

new Swiper('.testimonial__swiper', {
    navigation:{
        nextEl:'.slide__next',
        prevEl:'.slide__prev'
    },
    simulateTouch: false
});