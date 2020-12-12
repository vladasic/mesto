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
let popupImage = document.querySelector('.image')
let closeImageButton = document.querySelector('.image__close')
let imageFull = document.querySelector('.image__opened')
let imageText = document.querySelector('.image__text')


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
// вызовы для открытитя второго попапа
portfileButtonBig.addEventListener('click',popupTwoAdd)
// вызов закрытия второго попапа через иконку
popupCloseSecond.addEventListener('click',popupTwoRemove);
closeImageButton.addEventListener('click', removePopupImage)

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

// то куда мы добавляем наш HTML
const listContainerElements = document.querySelector('.elements');
const popupAddTop = document.querySelector('.popup-add__item_position_top');
const popupAddBottom = document.querySelector('.popup-add__item_position_bottom')
const templateLateElement = document.querySelector('.template')

// динмаический рендеринг содержимого на старнице

function renderList(){
    const listItems  = initialCards.map(composeItem);

    listContainerElements.append(...listItems)
}
// Это оптимизация кода, изначально это было вместе с newHTML




function composeItem(item){
    const newItem = templateLateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.element__text');
    const imageElement = newItem.querySelector('.element__img');
    const elementButton = newItem.querySelector('.element__button')
    const elementButtonBlack = newItem.querySelector('.element__button_add_black-icon')
    const removButton = newItem.querySelector('.element__trash');
    headerElement.textContent = item.name;
    imageElement.src = item.link;
    
    removButton.addEventListener('click',removeElement);
    imageElement.addEventListener('click',openPopupImage);
    elementButton.addEventListener('click', function(){
        elementButton.classList.toggle('element__button_add_black-icon');
    })
    imageElement.addEventListener('click', function(event){
        imageFull.src = imageElement.src
        imageText.textContent = headerElement.textContent
    });
    return newItem;
}


inputTop.value = portfileTitle.textContent;
inputBottom.value = portfileSubttitle.textContent;





function removeElement(e){
    const targertElement = e.target;
    const targetItem = targertElement.closest('.element');
    targetItem.remove();
}

function bindAddItemListener(){
    const addButtonElements = document.querySelector('.popup__button-add-image')
    addButtonElements.addEventListener('click',addNewItem);
    
}
function addNewItem(){
    const popupAddTopText = popupAddTop.value;
    const popupAddBottomImage = popupAddBottom.value;   
    const newItem = composeItem({name: popupAddTopText , link: popupAddBottomImage});
    listContainerElements.prepend(newItem);
    popupTwoRemove()
    
}

function openPopupImage(){
    popupImage.classList.add('popup_opened')
}

function removePopupImage(){
    popupImage.classList.remove('popup_opened')
}

renderList()
bindAddItemListener();




