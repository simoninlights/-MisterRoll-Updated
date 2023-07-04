/*The element of the counter from the page*/
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
const itemsAmountInCartDisplay = document.querySelector('.header-cart_item-number');
const dataItemsAmount = itemsAmountInCartDisplay.getAttribute('data-items-amount');

/* Listening to the minus button */
btnMinus.addEventListener('click', function () {

    //Checking if the counter is equal more than 1 value
    if (parseInt(counter.innerText) > 1) {
        counter.innertext = --counter.innerText;        
    };

    dataItemsAmount.innerText = --dataItemsAmount.innerText;
})


/* Listening to the plus button */

btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText;
})