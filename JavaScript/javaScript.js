let portfileButton = document.querySelector('.portfile__button');
let portfileSubttitle = document.querySelector('.portfile__subtitle')
let popup = document.querySelector('.popup');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let inputTop = document.querySelector('.popup__item_position_top');
let inputBottom = document.querySelector('.popup__item_position_bottom');
let portfileTitle = document.querySelector('.portfile__title');
let popupContainer = popup.querySelector('.popup__container');
let popupButton = popup.querySelector('.popup__button')


function popupAdd(){
    popup.classList.add('popup_opened');
    inputTop.value = portfileTitle.textContent;
    inputBottom.value = portfileSubttitle.textContent;
}
function popupRemove(){
    popup.classList.remove('popup_opened');
}


function formSubmitHandler (event) {
    event.preventDefault();
    portfileTitle.textContent = inputTop.value;
    portfileSubttitle.textContent = inputBottom.value;
    popupButton.addEventListener('click', popupRemove);
}


portfileButton.addEventListener('click' ,popupAdd);
popupCloseIcon.addEventListener('click',popupRemove);
popupContainer.addEventListener('submit', formSubmitHandler)
