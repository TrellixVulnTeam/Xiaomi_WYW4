const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: ".popular_next",
        prevEl: ".popular_prev",
    },
});

const swiperNew = new Swiper('.swiperNew', {
    slidesPerView: 4,
    initialSlide:0,
    speed: 400,
    spaceBetween: 30,
    navigation: {
        nextEl: ".new_next",
        prevEl: ".new_prev",
    },
});
