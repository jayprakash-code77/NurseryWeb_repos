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


// product buy section start

let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}

// function img(anything){
//     document.querySelector('.slide').src = anything;
// }

// function change(change){
//     const line = document.querySelector('.home');
//     line.style.background = change;
// }


