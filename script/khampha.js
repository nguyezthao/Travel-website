var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween:35,
    slidesPerGroup: 3,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigator:{
        nextEl: ".swiper-button-next",
        preEl: ".swiper-button-pre",
        
    }
})