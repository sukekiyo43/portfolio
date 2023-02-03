
let swiper = new Swiper("#swiper", {
    effect: "coverflow",
    // direction: "vertical",
    speed: '.8s',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 5,
    slidesPerView: 1.9,
    spaceBetween: 0,
    pagination: {
        el: "#variations",
        clickable: true,
    },
});

swiper.on("slideChange", function () {
    if (swiper.activeIndex == 5 || swiper.activeIndex == 10) {
        body.classList.add("html-active");
        body.classList.remove("css-active", "javascript-active", "wordpress-active", "github-active");
        html_title.classList.add("active");
        css_title.classList.remove("active");
        javascript_title.classList.remove("active");
        wordpress_title.classList.remove("active");
        github_title.classList.remove("active");
    }
    if (swiper.activeIndex == 6) {
        body.classList.add("css-active");
        body.classList.remove("html-active", "javascript-active", "wordpress-active", "github-active");
        css_title.classList.add("active");
        html_title.classList.remove("active");
        javascript_title.classList.remove("active");
        wordpress_title.classList.remove("active");
        github_title.classList.remove("active");
    }
    if (swiper.activeIndex == 7) {
        body.classList.add("javascript-active");
        body.classList.remove("html-active", "css-active", "wordpress-active", "github-active");
        html_title.classList.remove("active");
        javascript_title.classList.add("active");
        css_title.classList.remove("active");
        wordpress_title.classList.remove("active");
        github_title.classList.remove("active");
    }
    if (swiper.activeIndex == 8) {
        body.classList.add("wordpress-active");
        body.classList.remove("html-active", "css-active", "javascript-active", "github-active");
        wordpress_title.classList.add("active");
        html_title.classList.remove("active");
        css_title.classList.remove("active");
        javascript_title.classList.remove("active");
        github_title.classList.remove("active");
    }
    if (swiper.activeIndex == 4 || swiper.activeIndex == 9) {
        body.classList.add("github-active");
        body.classList.remove("html-active", "css-active", "javascript-active", "wordpress-active");
        github_title.classList.add("active");
        html_title.classList.remove("active");
        css_title.classList.remove("active");
        javascript_title.classList.remove("active");
        wordpress_title.classList.remove("active");
    }
});

