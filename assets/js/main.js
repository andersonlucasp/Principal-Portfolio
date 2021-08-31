// Menu show and Hidden
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu Show
// Validate if constat exists 
if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu');
    });
}
// Menu Hidden 
// Validate if constant exists 
if(navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu');
    });
}
// Remove menu mobile 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class 
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
// Accordion Skills 

// Qualification tabs 

// Services Modal 

// Portfolio Swiper 

// Testimonial 

