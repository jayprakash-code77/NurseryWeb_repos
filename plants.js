let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY>250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.home-slider', {
        // Specify Swiper options here
        loop: true, // Example option
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        autoplay:{
            dealy:2000,
            disableOnInteraction:false,
        }
    });
});