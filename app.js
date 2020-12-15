// slider js
const tl = gsap.timeline({defaults: {ease:'power1.out' } });

tl.to('.text',{y:"0%", duration:2, stagger:0.25})
tl.to('.slider',{y:"-100%", duration:1.5, delay:0.5});
tl.to('.intro',{y:"-100%", duration:1}, "-=1");
tl.fromTo('nav', {opacity : 0},{opacity:1, duration:1});


// main js

const texts = ['make websites', 'use Photoshop', 'enjoy creative thinking'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,400);
}());

// cursor js
let mouseCursor = document.querySelector(".cursor");
let mouseCursor2 = document.querySelector(".cursor2");
let navLinks = document.querySelectorAll(".nav-links li");
let navLinksA = document.querySelectorAll(".nav-links li a");
let logo = document.querySelector("#logo");
let projectList = document.querySelector('.project_list');
let contactP  = document.querySelector('.contact p');
const buttonResume = document.querySelector('.button_resume');
const sectionName = document.querySelector('.section_name h1');
let sectionTitle = document.querySelector(".section_title");
let sectionTitleH1 = document.querySelector(".section_title h1");
var contactMeSection = document.querySelector(".contact_me");


window.addEventListener('mousemove',cursor);



function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor2.style.top = e.pageY  + 'px';
    mouseCursor2.style.left = e.pageX + 'px';
};





navLinks.forEach(link =>{
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hoverd-link");
        mouseCursor2.classList.remove("link-grow");
       

    });
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hoverd-link");
        mouseCursor2.classList.add("link-grow");
    });
});
navLinksA.forEach(link =>{
    link.addEventListener('mouseleave',()=>{
        link.style.color = "#282c37";
    });
    link.addEventListener('mouseover',()=>{
        link.style.color = "#fff";
    });
});

logo.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove("link-grow");
        logo.classList.remove("hoverd-link");
        logo.style.color = "#282c37";
        mouseCursor2.classList.remove("link-grow");

});
logo.addEventListener('mouseover',()=>{
        mouseCursor.classList.add("link-grow");
        logo.classList.add("hoverd-link");
        logo.style.color = "#fff";
        mouseCursor2.classList.add("link-grow");

});

projectList.addEventListener('mouseleave',()=>{
    mouseCursor.style.zIndex = "-1";
    mouseCursor2.style.zIndex = "-1";
    
});
projectList.addEventListener('mouseover',()=>{
    mouseCursor.style.zIndex = "7";
    mouseCursor2.style.zIndex = "7";
});
buttonResume.addEventListener('mouseleave',()=>{
    mouseCursor.style.zIndex = "-1";
    mouseCursor2.style.zIndex = "-1";
    
});
buttonResume.addEventListener('mouseover',()=>{
    mouseCursor.style.zIndex = "7";
    mouseCursor2.style.zIndex = "7";
});
contactMeSection.addEventListener("mouseover", ()=>{
    mouseCursor.style.zIndex = "7";
    mouseCursor2.style.zIndex = "7";
})
contactMeSection.addEventListener('mouseleave',()=>{
    mouseCursor.style.zIndex = "-1";
    mouseCursor2.style.zIndex = "-1";
    
});









////////////////// scroll js
function scrollAppear(){
    var aboutMe = document.querySelector('.about_me');
    var projectList = document.querySelector('.project_list');
    var contactMeSection = document.querySelector(".contact_me");
    var aboutMePosition = aboutMe.getBoundingClientRect().top;
    var projectListPosition = projectList.getBoundingClientRect().top;
    var contactMePosition = contactMeSection.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.5;

    if(aboutMePosition < screenPosition){
        aboutMe.classList.add('aboutme-appear');
    }    
    if(projectListPosition < screenPosition){
        projectList.classList.add('projectlist-appear');
    }
    if(contactMePosition < screenPosition){
        contactMeSection.classList.add('contactme-appear');
    }
}

window.addEventListener('scroll',scrollAppear)



///////smooth scroll
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    // function ease(t,b,c,d){
    //     return c * Math.sin(t/d * (Math.PI/2)) + b;
    // }


    function ease(t, b, c, d){
        t /= d/ 2;
        if(t <1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t -2) - 1) + b; 
    }

    requestAnimationFrame(animation);

}

var aboutMeLink = document.querySelector('.about_me_link');
var aboutMe = document.querySelector('.about_me');
var ProjectLink = document.querySelector('.project_link');
var contactLink = document.querySelector('.contact_link');

aboutMeLink.addEventListener('click', function(){
    smoothScroll('.about_me',1000);
});


ProjectLink.addEventListener('click', function(){
    smoothScroll('.project_list',1000);
});

contactLink.addEventListener('click', function(){
    smoothScroll('.contact_me' ,1000)
})




//////About me animation





//movement animation to happen
const aboutText = document.querySelector('.about_text');
//Items
const title = document.querySelector('.title');
const titleH1 = document.querySelector('.title h1');
const titleh2 = document.querySelector('.title h2');
const aboutIntro = document.querySelector('.about_intro p');
const skillH2 = document.querySelector('.skill h2');
const skillList = document.querySelectorAll('.skill_list');
const education = document.querySelector('.education h2');
const educationP = document.querySelector('.education p');









//moving animation Event
aboutText.addEventListener('mousemove', (e) =>{

    let xAixs = (window.innerWidth / 2 - e.pageX) / 35;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 35;

    aboutText.style.transform = 'rotateY('+xAixs+'deg) rotateX('+yAxis+'deg)';  

});
//Animate In
aboutText.addEventListener('mouseenter', e =>{
    aboutText.style.transition = 'none';
    //popout

    titleH1.style.transform = 'translateZ(-150px)';
    titleh2.style.transform = 'translateZ(-125px)';
    aboutIntro.style.transform = 'translateZ(-100px)';
    skillH2.style.transform = 'translateZ(-75px)';
    for(i = 0; i < skillList.length; i++){
        skillList[i].style.transform = 'translateZ(-50px)';
    }
    education.style.transform = 'translateZ(-75px)';
    educationP.style.transform = 'translateZ(-50px)';
    buttonResume.style.transform = 'translateZ(-30px)';

})


//Animate Out 
aboutText.addEventListener('mouseleave', e =>{
    aboutText.style.transition = "all 0.5s ease";
    aboutText.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //popback
    titleH1.style.transform = 'translateZ(0px) rotateZ(0deg)'; 
    titleh2.style.transform = 'translateZ(0px)';
    aboutIntro.style.transform = 'translateZ(0px)';
    skillH2.style.transform = 'translateZ(0px)';
    for(i = 0; i < skillList.length; i++){
        skillList[i].style.transform = 'translateZ(0px)';
    }
    education.style.transform = 'translateZ(0px)';
    educationP.style.transform = 'translateZ(0px)';
    buttonResume.style.transform = 'translateZ(0px)';
});




////contact

let contactEmail= document.querySelectorAll(".email path");
let contactSvg = document.querySelector(".email");

function fillColor(){
    for(i=0; i < contactEmail.length; i++){
        contactEmail[i].style.fill = "#fff";
        contactEmail[i].style.opacity = "1";
    }
}

function clearColor(){
    for(i=0; i < contactEmail.length; i++){
        contactEmail[i].style.fill = "";
        contactEmail[i].style.opacity ="1" 
    }
}

contactSvg.addEventListener("mouseover",fillColor);
contactSvg.addEventListener("mouseout",clearColor);