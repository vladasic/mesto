
let portfileButton = document.querySelector('.portfile__button');
let portfileSubttitle = document.querySelector('.portfile__subtitle')
let popup = document.querySelector('.popup');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let inputs = document.querySelectorAll('input')
let portfileTitle = document.querySelector('.portfile__title')
let popupContainer = popup.querySelector('.popup__container')


portfileButton.addEventListener('click' ,popupToggle);
popupCloseIcon.addEventListener('click',popupToggle);


function popupToggle(){
    popup.classList.toggle('popup_opened')
}

function formSubmitHandler (event) {
    event.preventDefault();
    portfileTitle.textContent = inputs[0].value;
    portfileSubttitle.textContent = inputs[1].value;
}

popupContainer.addEventListener('click', formSubmitHandler)
