let portfileButton = document.querySelector('.portfile__button');
let portfileSubttitle = document.querySelector('.portfile__subtitle')
let popup = document.querySelector('.popup');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let inputTop = document.querySelector('.popup__item_position_top');
let inputBottom = document.querySelector('.popup__item_position_bottom');
let portfileTitle = document.querySelector('.portfile__title');
let popupContainer = popup.querySelector('.popup__container');
let popupAddImage = document.querySelector('.popup-add');
let portfileButtonBig = document.querySelector('.portfile__button-big')
// Иконка закрытия для второго попапа
let popupCloseSecond = document.querySelector('.popup__close-icon_second')

// Эта функция открывает основной попап
function popupAdd(){
    popup.classList.add('popup_opened');
    inputTop.value = portfileTitle.textContent;
    inputBottom.value = portfileSubttitle.textContent;
}
// эта функция закрывает основной попап
function popupRemove(){
    popup.classList.remove('popup_opened');
}

// эта функция для редактирования тайтла и сабтайтла
function formSubmitHandler (event) {
    event.preventDefault();
    portfileTitle.textContent = inputTop.value;
    portfileSubttitle.textContent = inputBottom.value;
    popupRemove();
}
// эта функция для открытия  второго попапа
function popupTwoAdd(){
    popupAddImage.classList.add('popup_opened')
}
// этп функция для закрытия второго попапа
function popupTwoRemove(){
    popupAddImage.classList.remove('popup_opened')
}


portfileButton.addEventListener('click' ,popupAdd);
popupCloseIcon.addEventListener('click',popupRemove);
popupContainer.addEventListener('submit', formSubmitHandler)
// вызовы для открытитя и закрытия второго попапа
portfileButtonBig.addEventListener('click',popupTwoAdd)
// вызов закрытия второго попапа через иконку
popupCloseSecond.addEventListener('click',popupTwoRemove)
