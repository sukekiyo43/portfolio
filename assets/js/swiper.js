// Color variationsのスワイパー
const swiper = new Swiper("#swiper", {
    effect: "coverflow",
    // direction: "vertical",
    speed: '.8s',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 5,
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
        el: "#variations",
        clickable: true,
    },
});