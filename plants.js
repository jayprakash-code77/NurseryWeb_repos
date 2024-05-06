let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

document.getElementById("bannerLink").addEventListener("click", function() {
    window.location.href = "house plants.html";
});


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


let countDate = new Date('may 1 2024 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap/(day));
    let h = Math.floor(gap % (day)/ hour);
    let m = Math.floor(gap % (hour)/(minute));
    let s = Math.floor(gap % (minute)/(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    countDown();
},1000
)




    document.getElementById("bannerLink2").addEventListener("click", function() {
        window.location.href = "dining table plants.html";
    });
   
    document.getElementById("bannerLink3").addEventListener("click", function() {
        window.location.href = "office plants.html";
    });

    document.getElementById("bannerLink4").addEventListener("click", function() {
        window.location.href = "front wall plants.html";
    });

