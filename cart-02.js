const cartContainer = document.querySelector('.pop-up-cart-items__container');
const popUpCartContainer = document.querySelector('.pop-up-cart__container');
const itemsAmountInCartDisplay = document.querySelector('.header-cart_item-number');


window.addEventListener('click', (event) => {


    if (event.target.hasAttribute('data-cart')) {        

        itemsAmountInCartDisplay.innerText = ++itemsAmountInCartDisplay.innerText;

        popUpCartContainer.style.display = "flex";
        
        
        const card = event.target.closest('.main-menu__card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-image').getAttribute('src'),
            title: card.querySelector('.card-title').innerText,
            price: card.querySelector('.card-price').innerText
        }
        console.log(productInfo);

        const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart);

        const cartItemHTML = `<div class="pop-up-cart-item" data-id="${productInfo.id}">
        <h2 class="pop-up-cart-item-title">${productInfo.title}</h2>
        <div class="pop-up-cart-item-add-remove counter-wrapper">
        <button class="pop-up-cart-item-remove" data-action="minus">-</button>
        <h2 class="pop-up-cart-item-add-remove-number" data-counter>1</h2>
        <button class="pop-up-cart-item-add" data-action="plus">+</button>                                                                                
        </div>
        <h2 class="pop-up-cart-item-add-remove-total">${productInfo.price}</h2>
        <button data-action="delete-item" class="pop-up-cart-item-delete_button">
        <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8633 20.3027C18.5704 20.0098 18.0956 20.0098 17.8027 20.3027C17.5098 20.5956 17.5098 21.0704 17.8027 21.3633L18.8633 20.3027ZM19.4697 23.0303C19.7626 23.3232 20.2374 23.3232 20.5303 23.0303C20.8232 22.7374 20.8232 22.2626 20.5303 21.9697L19.4697 23.0303ZM17.8027 23.6367C17.5098 23.9296 17.5098 24.4044 17.8027 24.6973C18.0956 24.9902 18.5704 24.9902 18.8633 24.6973L17.8027 23.6367ZM20.5303 23.0303C20.8232 22.7374 20.8232 22.2626 20.5303 21.9697C20.2374 21.6768 19.7626 21.6768 19.4697 21.9697L20.5303 23.0303ZM22.1973 21.3633C22.4902 21.0704 22.4902 20.5956 22.1973 20.3027C21.9044 20.0098 21.4296 20.0098 21.1367 20.3027L22.1973 21.3633ZM19.4697 21.9697C19.1768 22.2626 19.1768 22.7374 19.4697 23.0303C19.7626 23.3232 20.2374 23.3232 20.5303 23.0303L19.4697 21.9697ZM21.1367 24.6973C21.4296 24.9902 21.9044 24.9902 22.1973 24.6973C22.4902 24.4044 22.4902 23.9296 22.1973 23.6367L21.1367 24.6973ZM20.5303 21.9697C20.2374 21.6768 19.7626 21.6768 19.4697 21.9697C19.1768 22.2626 19.1768 22.7374 19.4697 23.0303L20.5303 21.9697ZM21.762 14.25C22.1762 14.25 22.512 13.9142 22.512 13.5C22.512 13.0858 22.1762 12.75 21.762 12.75V14.25ZM18.429 12.75C18.0148 12.75 17.679 13.0858 17.679 13.5C17.679 13.9142 18.0148 14.25 18.429 14.25V12.75ZM25 16.25C25.4142 16.25 25.75 15.9142 25.75 15.5C25.75 15.0858 25.4142 14.75 25 14.75V16.25ZM15 14.75C14.5858 14.75 14.25 15.0858 14.25 15.5C14.25 15.9142 14.5858 16.25 15 16.25V14.75ZM15.7322 26.7678L15.2019 27.2981L15.2019 27.2981L15.7322 26.7678ZM15 25H15.75H15ZM17.8027 21.3633L19.4697 23.0303L20.5303 21.9697L18.8633 20.3027L17.8027 21.3633ZM18.8633 24.6973L20.5303 23.0303L19.4697 21.9697L17.8027 23.6367L18.8633 24.6973ZM21.1367 20.3027L19.4697 21.9697L20.5303 23.0303L22.1973 21.3633L21.1367 20.3027ZM22.1973 23.6367L20.5303 21.9697L19.4697 23.0303L21.1367 24.6973L22.1973 23.6367ZM21.762 12.75H18.429V14.25H21.762V12.75ZM25 14.75H15V16.25H25V14.75ZM15.833 18.25H24.167V16.75H15.833V18.25ZM24.167 18.25C24.2128 18.25 24.25 18.2872 24.25 18.333H25.75C25.75 17.4587 25.0413 16.75 24.167 16.75V18.25ZM24.25 18.333V25H25.75V18.333H24.25ZM24.25 25C24.25 25.9665 23.4665 26.75 22.5 26.75V28.25C24.2949 28.25 25.75 26.7949 25.75 25H24.25ZM22.5 26.75H17.5V28.25H22.5V26.75ZM17.5 26.75C17.0359 26.75 16.5908 26.5656 16.2626 26.2374L15.2019 27.2981C15.8114 27.9076 16.638 28.25 17.5 28.25V26.75ZM16.2626 26.2374C15.9344 25.9092 15.75 25.4641 15.75 25H14.25C14.25 25.862 14.5924 26.6886 15.2019 27.2981L16.2626 26.2374ZM15.75 25V18.333H14.25V25H15.75ZM15.75 18.333C15.75 18.2872 15.7872 18.25 15.833 18.25V16.75C14.9587 16.75 14.25 17.4587 14.25 18.333H15.75Z" fill="#FF3D00"/>
        </svg>
        </button>
        </div>`;

    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);

       
    };





});
