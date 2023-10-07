// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

// MENU HIDDEN
// Validate if constant exists
if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
}

// REMOVE MENU MOBILE
const navlink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

//CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the sccroll- header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// HOME SWIPER
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
});

// SERVICES TAB


// LIGHTBOX GALLERY
const portfolioItems = document.querySelectorAll(".work__content"),
      totalPortfolioItem = portfolioItems.length,
      lightbox = document.querySelector(".lightbox"),
      lightboxImg = document.querySelector(".lightbox__img"),
      lightboxCounter = document.querySelector(".caption__counter"),
      lightboxClose = document.querySelector(".lightbox__close");
let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
     })
}

function nextItem() {
      if(itemIndex === totalPortfolioItem-1) {
        itemIndex=0;
    }

    else {
        itemIndex++
    }
    
     changeItem();
}

 function prevItem() {
    if(itemIndex === 0) {
         itemIndex = totalPortfolioItem-1
    }

    else {
          itemIndex--
    }
    
    changeItem();
}


function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
     imgSrc = portfolioItems[itemIndex].querySelector(".work__content img").getAttribute("src");
     lightboxImg.src=imgSrc;
     lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItem;
}

lightbox.addEventListener("click", function(event) {
    if(event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
    })

// SCROOL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now wee loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.Height;
        const sectionTop = current.offsetTop - 10,
            sectionId = current.getAttribute("id");
    //  if your cuurent scrol position enters the space where current section on screen is, add .acticve
    //     to know getttinfkhkglgkjg
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
})
}