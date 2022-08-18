var calculateSwiper = new Swiper(".calculateSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".calculate-button-next",
        prevEl: ".calculate-button-prev",
    },
    breakpoints: {
    
        1200: {
            slidesPerView: 4,
            spaceBetweenSlides: 40
        }
    },
});

var blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    breakpoints: {
      
        700: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        1400: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        }
    }
});

$(".fct-btn-trigger").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".fct-items").toggleClass("active");
});
$(".fct-btn-close").click(function(e) {
    e.preventDefault();
    $(".fct-btn-trigger").removeClass("active");
    $(".fct-items").removeClass("active");
});