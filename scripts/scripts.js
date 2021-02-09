import { initialCards } from './initial-сards.js';
import { Card } from './classes/Card.js';
import { valdationConfig } from './valdationConfig.js'
import { FormValidator } from './classes/FormValidator.js';
import { Section } from './classes/Section.js';
import { Popup } from './classes/Popup.js';
import { PopupWithImage} from './classes/PopupWithImage.js';
<<<<<<< HEAD
import { PopupWithForm} from './classes/PopupWithForm.js';
import { openEditProfileButton,
    profileSubttitle,
    popupEditUserProfile,
    inputName,
    inputProfession,
    profileTitle,
    popupContainer,
    popupAddImage,
    openAddCardPopupButton,
    closeEditUserProfileButton,
    closeAddCardPopupButton,
    popupToggleBigImage,
    closeImageButton,
    formTypeAddImage,
    formEditProfile,
    popup,
    popups,
    popupBigImg,
    listContainerElements,
    inputTitle,
    inputLink,
    templateElement,
    addCardButton,
    popupBig,
    submitFormBigImage,
    popupCloseGeneral}
 from './utils/contstants.js';

//тут класс рендера карточек на страницу
//объявленная внутри константа добавляет в большой попап информацию, наследуя name и link из класса Card
const section = new Section({
    items: initialCards,
    renderer: () => {
        const openBigImage = new PopupWithImage(popupBig)
        const cardClasses = initialCards.map(({ name, link }) =>
            (new Card(name, link, templateElement,
                openBigImage.openPopupImg(name,link)
            ))
=======

const openEditProfileButton = document.querySelector('.profile__button');
const profileSubttitle = document.querySelector('.profile__subtitle')
const popupEditUserProfile = document.querySelector('.popup_type_user-profile');
const closeEditUserProfileButton = popupEditUserProfile.querySelector('.popup__close-icon_user-profile');
const inputName = document.querySelector('.popup__item_user-position_top');
const inputProfession = document.querySelector('.popup__item_user-position_bottom');
const profileTitle = document.querySelector('.profile__title');
const popupContainer = popupEditUserProfile.querySelector('.popup__container_form_user');
const popupAddImage = document.querySelector('.popup_type_add-images');
const openAddCardPopupButton = document.querySelector('.profile__button-big')
// Иконка закрытия для второго попапа
const closeAddCardPopupButton = document.querySelector('.popup__close-icon_second')
const popupToggleBigImage = document.querySelector('.popup_type_big-images')
const closeImageButton = document.querySelector('.popup__image-close_icon')
const formTypeAddImage = document.forms.formImg;
const popup = document.querySelector('.popup')
const popups = document.querySelector('.popup_add');
const popupBigImg = document.querySelector('.popup_big_img')
const listContainerElements = document.querySelector('.elements');
const inputTitle = document.querySelector('.popup__item_add-images-position_top');
const inputLink = document.querySelector('.popup__item_add-images-position_bottom')
export const templateElement = document.querySelector('.template')
const addCardButton = document.querySelector('.popup__button-add-image')
//тут класс рендера карточек на страницу
const section = new Section({
    items: initialCards,
    renderer: () => {
        const cardClasses = initialCards.map(({ name, link }) =>
            (new Card(name, link, templateElement))
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01
        );
        const cardElements = cardClasses.map(card => (card.createCard()))

        section.addItems(cardElements);
    },
},
    listContainerElements
);

<<<<<<< HEAD
section.renderItems() //активация функции рендера на странице


const editPofileSubmit = new PopupWithForm({
    getInputsValues: () =>{
        profileTitle.textContent = inputName.value;
        profileSubttitle.textContent = inputProfession.value;
        // editPofileSubmit.close();
=======
section.renderItems()
// конец 
//тут начало отображение попапа
const openPopupFirst = new Popup(popupEditUserProfile);
const openSecondPopup = new Popup(popupAddImage)
// функция для октрытия первого попапа
const showPopup = () => {
   
    openPopupFirst.setEventListeners();
    openPopupFirst.open();

}
//функция для закрытия первого попапа
const closePopupF  = () => {
    openPopupFirst.close()
}


//тут функция для создания нового попапа
const newItem = new PopupWithImage(
    {addNewItem: ()=>{
    const card = new Card(inputTitle.value, inputLink.value, templateElement);

    const cardElement = card.createCard();
    listContainerElements.prepend(cardElement);
    // и закрыть попап, если карточка создавалась с него
    closePopupTwo()
    addCardButton.classList.add('popup__button_invalid');
    addCardButton.disabled = true

    }, }
    ,
    addCardButton);


//функция вызова оного 
    const showPopupTwo = () => {
   
        openSecondPopup.setEventListeners();
        openSecondPopup.open();
    
    }
    const closePopupTwo = () => {
        openSecondPopup.close();
        formTypeAddImage.reset()
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01
    }
},popupEditUserProfile)

<<<<<<< HEAD



//функция выrлючения первой формы
const submitFormEdit = () =>{
    editPofileSubmit._getInput()
    editPofileSubmit.close(popupEditUserProfile)
=======
    const addNewItem = () => {
        newItem.addNewItems();
    }
    openAddCardPopupButton.addEventListener('click', showPopupTwo)

    addCardButton.addEventListener('click', addNewItem)







// function handleEsc(evt) {
//     if (evt.keyCode === 27) {
//         closeAddCardPopup();
//         closePopupEditUserProfile();
//         removePopupImage()
//         console.log('я работаю')
//     }

// }
// функция открытия общая
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', handleEsc)

}
// функция закрытия общая 
function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', handleEsc)
}

// функция открытия для первого попапа
// function openPopupEditUserProfile() {
//     openPopup(popupEditUserProfile)
//     inputName.value = profileTitle.textContent;
//     inputProfession.value = profileSubttitle.textContent;

// }

// function closePopupEditUserProfile() {
//     closePopup(popupEditUserProfile)

// }
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01

}

<<<<<<< HEAD
popupContainer.addEventListener('submit', submitFormEdit)


//под нами вторая вариация нажатия сабмита формы второй формы 
const popupWithFormTwo = new PopupWithForm(
    {getInputsValues: () =>{
        const card = new Card(inputTitle.value, inputLink.value, templateElement);
=======

// эта функция для открытия  второго попапа
// function openAddCardPopup() {
//     openPopup(popupAddImage)
// }
// этп функция для закрытия второго попапа
// function closeAddCardPopup() {
//     closePopup(popupAddImage)
//     formTypeAddImage.reset()
// }


openEditProfileButton.addEventListener('click', showPopup);
closeEditUserProfileButton.addEventListener('click', closePopupF);
popupContainer.addEventListener('submit', handleEditProfileFormSubmi)
// вызовы для открытитя второго попапа
// openAddCardPopupButton.addEventListener('click', openAddCardPopup)
// вызов закрытия второго попапа через иконку
closeAddCardPopupButton.addEventListener('click',  closePopupTwo);
closeImageButton.addEventListener('click', removePopupImage)
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01

        const cardElement = card.createCard();
        listContainerElements.prepend(cardElement);
        // и закрыть попап, если карточка создавалась с него
        popupWithFormTwo.close(formTypeAddImage)
        addCardButton.classList.add('popup__button_invalid');
        addCardButton.disabled = true

    }, }
    ,
    popupAddImage);

<<<<<<< HEAD
    const openTwo = () =>{
        popupWithFormTwo.setEventListeners()
        popupWithFormTwo.open();
    
    }
=======
// то куда мы добавляем наш HTML
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01

const addPopup = () =>{
    popupWithFormTwo._getInput()
}
addCardButton.addEventListener('click', addPopup)

const openPopupFirst = new Popup(popupEditUserProfile);
const openSecondPopup = new Popup(popupAddImage);



// функция для октрытия первого попапа
const showPopup = () => {
   
    openPopupFirst.setEventListeners();
    openPopupFirst.open();

}
<<<<<<< HEAD
//функция для закрытия первого попапа
const closePopupF  = (item) => {
    item.close()
}


 const closePopupImage = new Popup(popupToggleBigImage) 
 function closePopup() {
    closePopupImage.close()
}
function openPopup(popup) {
    popup.classList.add('popup_opened')

}

=======










// function addNewItem(event) {
//     const card = new Card(inputTitle.value, inputLink.value, templateElement);
//     event.preventDefault;
//     const cardElement = card.createCard();
//     listContainerElements.prepend(cardElement);
//     // и закрыть попап, если карточка создавалась с него
//     closeAddCardPopup()
//     addCardButton.classList.add('popup__button_invalid');
//     addCardButton.disabled = true
// }

// addCardButton.addEventListener('click', addNewItem);

// renderCardsWithClasses()
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01


//функция закрытия второго попапа
function closeAddCardPopup() {
    popupWithFormTwo.setEventListeners()
    popupWithFormTwo.close(formTypeAddImage)
}

popupCloseGeneral.addEventListener('click',closePopupF(openSecondPopup))
openEditProfileButton.addEventListener('click', showPopup);
closeEditUserProfileButton.addEventListener('click', closePopupF(openPopupFirst));
openAddCardPopupButton.addEventListener('click', openTwo)
closeAddCardPopupButton.addEventListener('click',  closeAddCardPopup);
closeImageButton.addEventListener('click', closePopup)

<<<<<<< HEAD
=======
// function closeForClickInOverlay(popup) {
//     document.addEventListener('mousedown', function (evt) {
//         if (evt.target === popup) {
//             closePopupEditUserProfile();
//             closeAddCardPopup();
//             removePopupImage();
//         }
//     })
// } closeForClickInOverlay(popup)
// closeForClickInOverlay(popups)
// closeForClickInOverlay(popupBigImg)
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01

const profileFormValidity = new FormValidator();
profileFormValidity.enableValidation(valdationConfig)


function popupOpenBig(){

}


<<<<<<< HEAD
export  function handleCardClick(link, name, popup) {
=======
export function openWithPopup(link, name) {
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01
    const imageText = document.querySelector('.popup__image-text_for_full')
    const imageFull = document.querySelector('.popup__image-opened')

    imageFull.src = link;
    imageText.textContent = name;
    imageFull.alt = name;

    const popupBig = document.querySelector('.popup_big_img')
    popup = openPopup(popupBig)
<<<<<<< HEAD
    
    closePopupImage.setEventListeners()
=======

>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01
}


