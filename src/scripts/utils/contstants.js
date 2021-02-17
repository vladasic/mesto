export const openEditProfileButton = document.querySelector('.profile__button');
export const popupEditUserProfile = document.querySelector('.popup_type_user-profile');
export const inputName = document.querySelector('.popup__item_user-position_top');
export const inputProfession = document.querySelector('.popup__item_user-position_bottom');
export const popupContainer = popupEditUserProfile.querySelector('.popup__container_form_user');
export const popupAddImage = document.querySelector('.popup_type_add-images');
export const openAddCardPopupButton = document.querySelector('.profile__button-big')

export const closeImageButton = document.querySelector('.popup__image-close_icon')
export const listContainerElements = document.querySelector('.elements');
export const inputTitle = document.querySelector('.popup__item_add-images-position_top');
export const inputLink = document.querySelector('.popup__item_add-images-position_bottom')
export const templateElement = document.querySelector('.template')
export const addCardButton = document.querySelector('.popup__button-add-image')
export const popupBig = document.querySelector('.popup_big_img')
export const submitFormBigImage = document.querySelector('.popup__buttion-input')
export const popupImageBig = document.querySelector('.popup__image-opened_full');
export const popupTextInfo = document.querySelector('.popup__image-text_for_full');
export const popupformAdd = document.querySelector('.popup__container-add-images');
export const escape = 'Escape';
export const popup = document.querySelector('.popup')

export const editForm = document.forms[0] //form
export const inputEditFirst = editForm.elements[1];
export const inputEditSecond = editForm.elements[2];
export const isActiveEditForm = inputEditFirst.value.length > 0 && inputEditSecond.value.length > 0 ;

export const addPopupForm = document.forms[1] //вторая форма
export const inputAddPopupFormFirst = addPopupForm.elements[1]
export const inputAddPopupFormSecond = addPopupForm.elements[2]
export const isActivePopupAddForm = inputAddPopupFormFirst.value.length > 0 && inputAddPopupFormSecond.value.length > 0 ;