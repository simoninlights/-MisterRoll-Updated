/* Listener for the whole window */



window.addEventListener('click', function (event) {

    console.log(event.target.dataset.action); // getting the value of data-action in console > | minus | plus |

    
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');
    };

    //Checking if we clicked on plus button
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;

    };

    //Checking if we clicked on minus button
    if (event.target.dataset.action === 'minus') {

        if (event.target.closest('.pop-up-cart__container') && parseInt(counter.innerText) === 1) {
            event.target.closest('.pop-up-cart-item').remove();
        };

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        };

        itemsAmountInCartDisplay.innerText = --itemsAmountInCartDisplay.innerText;
    };

    if (event.target.dataset.action === "delete-item") {

        if (event.target.closest('.pop-up-cart__container') && parseInt(counter.innerText) === 1) {
            event.target.closest('.pop-up-cart-item').remove();
        };

    };


});