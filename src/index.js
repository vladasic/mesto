import "./index.css";

import { initialCards } from "./scripts/initial-сards.js";
import { Card } from "./scripts/classes/Card.js";
import {
  validateConfigEditForm,
  validateConfigAddCard,
} from "./scripts/valdationConfig.js";
import { FormValidator } from "./scripts/classes/FormValidator.js";
import { Section } from "./scripts/classes/Section.js";
import { PopupWithImage } from "./scripts/classes/PopupWithImage.js";
import { PopupWithForm } from "./scripts/classes/PopupWithForm.js";
import { UserInfo } from "./scripts/classes/UserInfo.js";
import {
  openEditProfileButton,
  popupEditUserProfile,
  inputName,
  inputProfession,
  popupContainer,
  popupAddImage,
  openAddCardPopupButton,
  closeImageButton,
  listContainerElements,
  inputTitle,
  inputLink,
  templateElement,
  popupBig,
  popupformAdd,
  submitFormBigImage,
  addCardButton,
  editForm,
  inputEditFirst,
  isActiveEditForm,
  addPopupForm,
  inputAddPopupFormFirst,
  isActivePopupAddForm,
} from "./scripts/utils/contstants.js";

const section = new Section(
  {
    items: initialCards,
    renderer: () => {
      const cardClasses = initialCards.map(function ({ name, link }) {
        addNewCard(name, link);
      });
    },
  },
  listContainerElements
);

const openBigImage = new PopupWithImage(popupBig);
openBigImage.setEventListeners();
section.renderItems(); //активация функции рендера на странице

const userInfo = new UserInfo("profile__title", "profile__subtitle");

const editPofileSubmit = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data['firstname'], data["lastname"]);
      editPofileSubmit.close();
    },
  },
  popupEditUserProfile,
  popupContainer
);

function addNewCard(name, link) {
  const card = new Card(
    {
      handleCardClick: (name, link) => {
        openBigImage.openPopupImg(name, link);
      },
    },
    name,
    link,
    templateElement
  );

  const cardElement = card.createCard();

  section.addItems(cardElement);
}

const popupAddCardForm = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      addNewCard(data["cardName"], data["cardLink"]);
      popupAddCardForm.close();
      addCardButton.classList.add("popup__button_invalid");
      addCardButton.disabled = true;
    },
  },
  popupAddImage,
  popupformAdd
);

popupAddCardForm.setEventListeners();

editPofileSubmit.setEventListeners();

function allPopupCloseAndAdd() {
  openEditProfileButton.addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    inputName.value = userData.userName;
    inputProfession.value = userData.userDescription;
    editPofileSubmit.open();
  }); 

  openAddCardPopupButton.addEventListener("click", () => {
    popupAddCardForm.open();
  });

  
}
allPopupCloseAndAdd();

const profileEditForm = new FormValidator(
  editForm,
  inputEditFirst,
  submitFormBigImage,
  isActiveEditForm,
  validateConfigEditForm
);
profileEditForm.enableValidation();

const addCardForm = new FormValidator(
  addPopupForm,
  inputAddPopupFormFirst,
  addCardButton,
  isActivePopupAddForm,
  validateConfigAddCard
);
addCardForm.enableValidation();
