let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

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

    if (window.scrollY > 250) {
        scrollTop.style.display = 'initial';
    } else {
        scrollTop.style.display = 'none';
    }
    
 
}


const carouselButtonLeft = document.querySelector('.carousel-button.left');
const carouselButtonRight = document.querySelector('.carousel-button.right');
const productScroll = document.querySelector('.box-container');
const productCarousel = document.querySelector('.product');

carouselButtonLeft.addEventListener('click', () => {
    productScroll.scrollBy({
        left: -productCarousel.clientWidth, // Move to the left
        behavior: 'smooth'
    });
});

carouselButtonRight.addEventListener('click', () => {
    productScroll.scrollBy({
        left: productCarousel.clientWidth, // Move to the right
        behavior: 'smooth'
    });
});

