/* Preloader */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 1000)
  });


/* -------Slider------- */



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
    if(e.target === modalBg) {
        modalBg.classList.remove('pop-container-active');
    }
});