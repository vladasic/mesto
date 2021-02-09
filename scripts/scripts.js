import { initialCards } from './initial-сards.js';
import { Card } from './classes/Card.js';
import { valdationConfig } from './valdationConfig.js'
import { FormValidator } from './classes/FormValidator.js';
import { Section } from './classes/Section.js';
import { Popup } from './classes/Popup.js';
import { PopupWithImage} from './classes/PopupWithImage.js';
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
        );
        const cardElements = cardClasses.map(card => (card.createCard()))

        section.addItems(cardElements);
    },
},
    listContainerElements
);

section.renderItems() //активация функции рендера на странице


const editPofileSubmit = new PopupWithForm({
    getInputsValues: () =>{
        profileTitle.textContent = inputName.value;
        profileSubttitle.textContent = inputProfession.value;
        // editPofileSubmit.close();
    }
},popupEditUserProfile)




//функция выrлючения первой формы
const submitFormEdit = () =>{
    editPofileSubmit._getInput()
    editPofileSubmit.close(popupEditUserProfile)

}

popupContainer.addEventListener('submit', submitFormEdit)


//под нами вторая вариация нажатия сабмита формы второй формы 
const popupWithFormTwo = new PopupWithForm(
    {getInputsValues: () =>{
        const card = new Card(inputTitle.value, inputLink.value, templateElement);

        const cardElement = card.createCard();
        listContainerElements.prepend(cardElement);
        // и закрыть попап, если карточка создавалась с него
        popupWithFormTwo.close(formTypeAddImage)
        addCardButton.classList.add('popup__button_invalid');
        addCardButton.disabled = true

    }, }
    ,
    popupAddImage);

    const openTwo = () =>{
        popupWithFormTwo.setEventListeners()
        popupWithFormTwo.open();
    
    }

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


const profileFormValidity = new FormValidator();
profileFormValidity.enableValidation(valdationConfig)


function popupOpenBig(){

}


export  function handleCardClick(link, name, popup) {
    const imageText = document.querySelector('.popup__image-text_for_full')
    const imageFull = document.querySelector('.popup__image-opened')

    imageFull.src =link;
    imageText.textContent = name;
    imageFull.alt = name;

    const  popupBig = document.querySelector('.popup_big_img') 
    popup = openPopup(popupBig)
    
    closePopupImage.setEventListeners()
}

