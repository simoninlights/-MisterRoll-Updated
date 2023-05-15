/* Preloader */
// document.addEventListener("DOMContentLoaded", function () {
//     if (sessionStorage.getItem('dontLoad') === null) {
//         setTimeout(function () {
//             document.querySelector("body").classList.add("loaded");
//         }, 0);
//     } if (sessionStorage.getItem('dontLoad') === true) {
//         document.addEventListener("DOMContentLoaded", function () {
//             document.querySelector("body").classList.remove("loaded");
//         });
//     }
// });


/* -------Slider------- */

const slider = document.querySelector('.header-slider__wrapper');
const slides = document.querySelector('#slides');
let slideWidth = slider.clientWidth;
let currentPosition = -slideWidth;

// Clone first and last slide
const firstSlide = slides.children[0];
const lastSlide = slides.children[slides.children.length - 1];
const firstClone = firstSlide.cloneNode(true);
const lastClone = lastSlide.cloneNode(true);
slides.appendChild(firstClone);
slides.insertBefore(lastClone, firstSlide);

// Add a class to the first clone
firstClone.classList.add('clone');

// Set initial slide position
slides.style.transform = `translateX(${currentPosition}px)`;

// Handle next and previous buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    movePrevious();
  });
  
  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    moveNext();
  });

function movePrevious() {
    currentPosition += slideWidth;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${currentPosition}px)`;
  
    // Handle edge case when current slide is first clone
    if (currentPosition === 0) {
      setTimeout(() => {
        currentPosition = -slideWidth * (slides.children.length - 2);
        slides.style.transition = "none";
        slides.style.transform = `translateX(${currentPosition}px)`;
      }, 500);
    }
  
    if (currentPosition > 0) {
      setTimeout(() => {
        currentPosition = -slideWidth * (slides.children.length - 2);
        slides.style.transition = "none";
        slides.style.transform = `translateX(${currentPosition}px)`;
      }, 500);
    }
  
    // Reset transition property
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
    }, 0);
  }
  
  function moveNext() {
    currentPosition -= slideWidth;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${currentPosition}px)`;
  
    if (currentPosition < -slideWidth * (slides.children.length - 2)) {
      setTimeout(() => {
        currentPosition = -slideWidth;
        slides.style.transition = "none";
        slides.style.transform = `translateX(${currentPosition}px)`;
      }, 500);
    }
  
    // Reset transition property
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
    }, 0);
  }

// Set interval to move to next slide every 4 seconds
let slideInterval = setInterval(moveNext, 4000);

// Add mouseover and mouseout event listeners to stop and start the interval

slider.addEventListener('mouseout', () => slideInterval = setInterval(moveNext, 4000));
slider.addEventListener('mouseover', () => clearInterval(slideInterval));

// Update slideWidth and currentPosition on window resize
window.addEventListener('resize', () => {
  slideWidth = slider.clientWidth;
  currentPosition = -slideWidth;
  slides.style.transition = 'none';
  slides.style.transform = `translateX(${currentPosition}px)`;
});

// Initialize Swiper
const mySwiper = new Swiper('.header-slider__wrapper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.header-slider__pagination',
    clickable: true
  }
});

const sliderImages = document.querySelectorAll('.header-slider-item img');

sliderImages.forEach((image) => {
  image.addEventListener('click', () => {
    mySwiper.slideNext();
  });
});

/* Pop Up For A Card */

const modalBtn = document.querySelector('.pop-btn');
const modalBg = document.querySelector('.pop-container');
const closeModal = document.querySelector('.pop-icon-cancel');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('pop-container-active');
    console.log('add');
});

closeModal.addEventListener('click', () => {
    modalBg.classList.remove('pop-container-active');
    console.log('remove');
});


document.addEventListener('click', (e) => {
    if (e.target === modalBg) {
        modalBg.classList.remove('pop-container-active');
    }
});

/* Scroll to top button */
const scrollBtn = document.querySelector('.scroll-to-top');

const refreshBtnVisibility = () => {
    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
};
refreshBtnVisibility();
window.scrollTo(0, 2000);
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.addEventListener('scroll', (e) => {
    refreshBtnVisibility();
});


//---------------DYNAMIC YEAR IN THE FOOTER----------------

const year = new Date();
document.querySelector('.current-year').innerHTML = year.getFullYear();