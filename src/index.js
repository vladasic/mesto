import '../pages/index.css'

import { initialCards } from '../scripts/initial-сards.js';
import { Card } from '../scripts/classes/Card.js';
import { valdationConfig } from '../scripts/valdationConfig.js'
import { FormValidator } from '../scripts/classes/FormValidator.js';
import { Section } from '../scripts/classes/Section.js';
import { Popup } from '../scripts/classes/Popup.js';
import { PopupWithImage } from '../scripts/classes/PopupWithImage.js';
import { PopupWithForm } from '../scripts/classes/PopupWithForm.js';
import {
    openEditProfileButton,
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
    listContainerElements,
    inputTitle,
    inputLink,
    templateElement,
    popupBig,
    popupCloseGeneral,
    popupformAdd
}
    from '../scripts/utils/contstants.js';

//тут класс рендера карточек на страницу
//объявленная внутри константа добавляет в большой попап информацию, наследуя name и link из класса Card
const section = new Section({
    items: initialCards,
    renderer: () => {

        const cardClasses = initialCards.map(({ name, link }) =>
        (new Card(name, link, templateElement,
            openBigImage.openPopupImg(name, link)
        ))
        );
        const cardElements = cardClasses.map(card => (card.createCard()))

        section.addItems(cardElements);
    },
},
    listContainerElements
);
const openBigImage = new PopupWithImage(popupBig)
section.renderItems() //активация функции рендера на странице




//первая форма готово

const editPofileSubmit = new PopupWithForm({
    getInputsValues: () => {
        profileTitle.textContent = inputName.value;
        profileSubttitle.textContent = inputProfession.value;
        // editPofileSubmit.close();
    },
    handleFormSubmit: () => {
        editPofileSubmit._getInput();
        editPofileSubmit.close(popupEditUserProfile)
    }
},
    popupEditUserProfile, popupContainer)

editPofileSubmit.setEventListeners()



//функция выrлючения первой формы
// const submitFormEdit = () => {
//     editPofileSubmit._getInput()
//     editPofileSubmit.close(popupEditUserProfile)

// }

// popupContainer.addEventListener('submit', submitFormEdit)


//под нами вторая вариация нажатия сабмита формы второй формы 


function addNewCard(){
    const card = new Card(inputTitle.value, inputLink.value, templateElement);
    const cardElement = card.createCard();
    
    listContainerElements.prepend(cardElement);
}

const popupAddCardForm = new PopupWithForm(
    {
        getInputsValues: () => {
            addNewCard()       
            // addNewCard()
            // addCardButton.classList.add('popup__button_invalid');
            // addCardButton.disabled = true
        },
        handleFormSubmit: () => {
            popupAddCardForm.close(popupAddImage)
            
        }
    }
    ,
    popupAddImage, popupformAdd);

function toggleImageAddPopup(){
    popupAddCardForm.setEventListeners()
    
}
toggleImageAddPopup()


// function newCard(){
//     const card = new Card(inputTitle.value, inputLink.value, templateElement);
// }
// newCard()


const addPopup = () => {
    popupAddCardForm._getInput()
}
// addCardButton.addEventListener('click', addPopup)

// функция для октрытия первого попапа

//функция для закрытия первого попапа
const closePopupF = (item) => {
    item.close()
}


const closePopupImage = new Popup(popupToggleBigImage)



//функция закрытия второго попапа
function closeAddCardPopup() {
    popupAddCardForm.setEventListeners()
    popupAddCardForm.close(formTypeAddImage)
}
const popapOpenAndCloseImage = new Popup(popupToggleBigImage)


popupCloseGeneral.addEventListener('click', closePopupF(popupAddCardForm))
openEditProfileButton.addEventListener('click', ()=>{
    editPofileSubmit.setEventListeners();
    editPofileSubmit.open();
});
closeEditUserProfileButton.addEventListener('click', closePopupF(editPofileSubmit));
openAddCardPopupButton.addEventListener('click', ()=>{
        popupAddCardForm.setEventListeners()
        popupAddCardForm.open();
    })
closeAddCardPopupButton.addEventListener('click', closeAddCardPopup);
closeImageButton.addEventListener('click', ()=>{
    popapOpenAndCloseImage.close();
})




const profileFormValidity = new FormValidator();
profileFormValidity.enableValidation(valdationConfig);


export function handleCardClick(link, name, popup) {
    const imageText = document.querySelector('.popup__image-text_for_full')
    const imageFull = document.querySelector('.popup__image-opened')

    imageFull.src = link;
    imageText.textContent = name;
    imageFull.alt = name;
    popup = popapOpenAndCloseImage.open()

    closePopupImage.setEventListeners()
}

