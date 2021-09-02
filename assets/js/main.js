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
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() { 
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
// Qualification tabs 

// Services Modal 

// Portfolio Swiper 

// Testimonial 

