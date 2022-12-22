$(document).ready(function(){
    $('.goal__slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 1,
        variableWidth: true,
    });
});
const images = document.querySelectorAll('.goal__slider .goal__slider-item .goal__slider-img');
const slider_item = document.querySelector('.goal__slider-item');
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.goal__slider').offsetWidth;
    slider_item.getElementsByClassName.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
}

window.addEventListener('resize', init);
init();