import './pages/index.css'

import { initialCards } from './scripts/initial-сards.js';
import { Card } from './scripts/classes/Card.js';
import { valdationConfig } from './scripts/valdationConfig.js'
import { FormValidator } from './scripts/classes/FormValidator.js';
import { Section } from './scripts/classes/Section.js';
import { Popup } from './scripts/classes/Popup.js';
import { PopupWithImage } from './scripts/classes/PopupWithImage.js';
import { PopupWithForm } from './scripts/classes/PopupWithForm.js';
import { UserInfo } from './scripts/classes/UserInfo.js'
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
    from './scripts/utils/contstants.js';






const section = new Section({
    items: initialCards,
    renderer: () => {
        const cardClasses = initialCards.map(({ name, link }) =>
        (new Card({
            handleCardClick: (link, name, popup) => {
                const imageText = document.querySelector('.popup__image-text_for_full')
                const imageFull = document.querySelector('.popup__image-opened')

                imageFull.src = link;
                imageText.textContent = name;
                imageFull.alt = name;
                popup = popapOpenAndCloseImage.open()
            }
        }, name, link, templateElement,
            // openBigImage.openPopupImg(name, link)
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








const userInfo = new UserInfo('profile__title', 'profile__subtitle')


//извините что снова присылаю вам не исправленную работу но никто не смог отвтеить на мой вопрос
// промучался с формами весь день, и так и не смог понять куда я должен вставлять полученный результат
const editPofileSubmit = new PopupWithForm({
    handleFormSubmit: (data) => {
        
        userInfo.setUserInfo(inputName, inputProfession)
        console.log(userInfo.setUserInfo())
        
        editPofileSubmit.close(popupEditUserProfile)
    }
},
    popupEditUserProfile, popupContainer)

editPofileSubmit.setEventListeners()















function addNewCard() {
    const card = new Card(inputTitle.value, inputLink.value, templateElement);
    const cardElement = card.createCard();

    section.addItems(cardElement);
}

const popupAddCardForm = new PopupWithForm(
    {
        handleFormSubmit: (data) => {
            addNewCard(data)
            console.log(popupAddCardForm._getInputValues())
            popupAddCardForm.close(popupAddImage)
        }
    }
    ,
    popupAddImage, popupformAdd);






const popapOpenAndCloseImage = new Popup(popupToggleBigImage)
function allPopupCloseAndAdd() {
    function closeAddCardPopup() {
        popupAddCardForm.setEventListeners()
        popupAddCardForm.close(formTypeAddImage)
    }



    popupAddCardForm.close()
    openEditProfileButton.addEventListener('click', () => {
        editPofileSubmit.setEventListeners();
        editPofileSubmit.open();
    });
    popupAddCardForm.close()
    openAddCardPopupButton.addEventListener('click', () => {
        popupAddCardForm.setEventListeners()
        popupAddCardForm.open();
    })
    closeAddCardPopupButton.addEventListener('click', closeAddCardPopup);
    closeImageButton.addEventListener('click', () => {
        popapOpenAndCloseImage.close();
    })

}
allPopupCloseAndAdd()

const profileFormValidity = new FormValidator();
profileFormValidity.enableValidation(valdationConfig);


