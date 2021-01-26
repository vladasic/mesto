import { initialCards } from './initial-сards.js';
import { Card } from './classes/Card.js';
import { valdationConfig } from './valdationConfig.js'
import { FormValidator } from './classes/FormValidator.js';


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

function handleEsc(evt) {
    if (evt.keyCode === 27) {
        closeAddCardPopup();
        closePopupEditUserProfile();
        removePopupImage()
        console.log('я работаю')
    }

}
// функция открытия общая
export default function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', handleEsc)

}
// функция закрытия общая 
function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', handleEsc)
}

// функция открытия для первого попапа
function openPopupEditUserProfile() {
    openPopup(popupEditUserProfile)
    inputName.value = profileTitle.textContent;
    inputProfession.value = profileSubttitle.textContent;

}

function closePopupEditUserProfile() {
    closePopup(popupEditUserProfile)

}

// эта функция для редактирования тайтла и сабтайтла
function handleEditProfileFormSubmi(event) {
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileSubttitle.textContent = inputProfession.value;
    closePopupEditUserProfile();
}


// эта функция для открытия  второго попапа
function openAddCardPopup() {
    openPopup(popupAddImage)
}
// этп функция для закрытия второго попапа
function closeAddCardPopup() {
    closePopup(popupAddImage)
    formTypeAddImage.reset()
}


openEditProfileButton.addEventListener('click', openPopupEditUserProfile);
closeEditUserProfileButton.addEventListener('click', closePopupEditUserProfile);
popupContainer.addEventListener('submit', handleEditProfileFormSubmi)
// вызовы для открытитя второго попапа
openAddCardPopupButton.addEventListener('click', openAddCardPopup)
// вызов закрытия второго попапа через иконку
closeAddCardPopupButton.addEventListener('click', closeAddCardPopup);
closeImageButton.addEventListener('click', removePopupImage)



// то куда мы добавляем наш HTML
const listContainerElements = document.querySelector('.elements');
const inputTitle = document.querySelector('.popup__item_add-images-position_top');
const inputLink = document.querySelector('.popup__item_add-images-position_bottom')
const templateElement = document.querySelector('.template')





function removePopupImage() {
    closePopup(popupToggleBigImage)

}



function renderCardsWithClasses() {
    const cardClasses = initialCards.map(({ name, link }) =>
        (new Card(name, link, templateElement))
    );
    const cardElements = cardClasses.map(card => (card._createCard()))
    //запись сверху эквивалентна записи снизу
    //    const cardElements = cardClasses.map(card => {
    //        return card.createCard() 
    //     })

    listContainerElements.append(...cardElements);
}


const addCardButton = document.querySelector('.popup__button-add-image')



function addNewItem(event) {
    const card = new Card(inputTitle.value, inputLink.value, templateElement);
    event.preventDefault;
    const cardElement = card._createCard();
    listContainerElements.append(cardElement);
    // и закрыть попап, если карточка создавалась с него
    closeAddCardPopup()
    addCardButton.classList.add('popup__button_invalid');
    addCardButton.disabled = true
}


addCardButton.addEventListener('click', addNewItem);

renderCardsWithClasses()
// renderList()

// document.addEventListener('mousedown', function (evt) {
//     if (evt.target === popup) {

//         closePopupEditUserProfile()
//     }
// })

// // document.addEventListener('mousedown', function (evt) {
// //     const popup = document.querySelector('.popup_add')
// //     if (evt.target === popup) {

// //         closeAddCardPopup();
// //     }
// // })

// // document.addEventListener('mousedown', function (evt) {
// //     const popup = document.querySelector('.popup_big_img')
// //     if (evt.target === popup) {

// //         removePopupImage();
// //     }
// // })




function closeForClickInOverlay(popup) {
    document.addEventListener('mousedown', function (evt) {
        if (evt.target === popup) {
            closePopupEditUserProfile();
            closeAddCardPopup();
            removePopupImage();
        }
    })
}closeForClickInOverlay(popup)
closeForClickInOverlay(popups)
closeForClickInOverlay(popupBigImg)

const profileFormValidity = new FormValidator();
profileFormValidity.enableValidation(valdationConfig)