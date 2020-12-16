const profileButton = document.querySelector('.profile__button');
const profileSubttitle = document.querySelector('.profile__subtitle')
const popupEditUserProfile = document.querySelector('.popup_type_user-profile');
const popupCloseIcon = popupEditUserProfile.querySelector('.popup__close-icon_user-profile');
const inputTop = document.querySelector('.popup__item_user-position_top');
const inputBottom = document.querySelector('.popup__item_user-position_bottom');
const profileTitle = document.querySelector('.profile__title');
const popupContainer = popupEditUserProfile.querySelector('.popup__container_form_user');
const popupAddImage = document.querySelector('.popup_type_add-images');
const profileButtonBig = document.querySelector('.profile__button-big')
 // Иконка закрытия для второго попапа
const popupCloseSecond = document.querySelector('.popup__close-icon_second')
const popupToggleBigImage = document.querySelector('.popup_type_big-images')
const closeImageButton = document.querySelector('.popup__image-close_icon')
const imageFull = document.querySelector('.popup__image-opened_full')
const imageText = document.querySelector('.popup__image-text_for_full')


// Эта функция открывает основной попап
function popupAdd(){
    popupEditUserProfile.classList.add('popup_opened');
    inputTop.value = profileTitle.textContent;
    inputBottom.value = profileSubttitle.textContent;
}
// эта функция закрывает основной попап
function popupRemove(){
    popupEditUserProfile.classList.remove('popup_opened');
}

// эта функция для редактирования тайтла и сабтайтла
function formSubmitHandler (event) {
    event.preventDefault();
    profileTitle.textContent = inputTop.value;
    profileSubttitle.textContent = inputBottom.value;
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


profileButton.addEventListener('click' ,popupAdd);
popupCloseIcon.addEventListener('click',popupRemove);
popupContainer.addEventListener('submit', formSubmitHandler)
// вызовы для открытитя второго попапа
profileButtonBig.addEventListener('click',popupTwoAdd)
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
const popupAddTop = document.querySelector('.popup__item_add-images-position_top');
const popupAddBottom = document.querySelector('.popup__item_add-images-position_bottom')
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


inputTop.value = profileTitle.textContent;
inputBottom.value = profileSubttitle.textContent;





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
    popupToggleBigImage.classList.add('popup_opened')
}

function removePopupImage(){
    popupToggleBigImage.classList.remove('popup_opened')
}

renderList()
bindAddItemListener();




