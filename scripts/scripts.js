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
const imageFull = document.querySelector('.popup__image-opened_full')
const imageText = document.querySelector('.popup__image-text_for_full')
const formTypeAddImage = document.forms.formImg
const popup = document.querySelector('.popup')

// функция открытия общая
function openPopup(popup) {
    popup.classList.add('popup_opened')
}
// функция закрытия общая 
function closePopup(popup) {
    popup.classList.remove('popup_opened')
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
function editProfileFormSubmitHandler(event) {
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
popupContainer.addEventListener('submit', editProfileFormSubmitHandler)
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



// Это оптимизация кода, изначально это было вместе с newHTML



function openPopupImage() {
    openPopup(popupToggleBigImage)
}

function removePopupImage() {
    closePopup(popupToggleBigImage)
}

function removeElement(e) {
    const targertElement = e.target;
    const targetItem = targertElement.closest('.element');
    targetItem.remove();
}

function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true);
    const headerElement = newItem.querySelector('.element__text');
    const imageElement = newItem.querySelector('.element__img');
    const elementButton = newItem.querySelector('.element__button')
    const elementButtonBlack = newItem.querySelector('.element__button_add_black-icon')
    const removButton = newItem.querySelector('.element__trash');
    headerElement.textContent = item.name;
    imageElement.src = item.link;
    imageElement.alt = item.name;;
    removButton.addEventListener('click', removeElement);
    imageElement.addEventListener('click', openPopupImage);
    elementButton.addEventListener('click', function () {
        elementButton.classList.toggle('element__button_add_black-icon');
    })
    imageElement.addEventListener('click', function (event) {
        imageFull.src = imageElement.src
        imageText.textContent = headerElement.textContent
        imageFull.alt = imageText.textContent
    });
    return newItem;
}

// динмаический рендеринг содержимого на старнице

function renderList() {
    const listItems = initialCards.map(composeItem);

    listContainerElements.append(...listItems)
}




function addNewItem() {
    const popupAddTopText = inputTitle.value;
    const popupAddBottomImage = inputLink.value;
    const newItem = composeItem({ name: popupAddTopText, link: popupAddBottomImage });
    listContainerElements.prepend(newItem);
    closeAddCardPopup()

}
const addCardButton = document.querySelector('.popup__button-add-image')
addCardButton.addEventListener('click', addNewItem);

renderList()

// 6 спринт


function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    input.classList.remove(config.inputInvalidClass);
}


function checkInputValidity(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config)
    } else {
        showError(form, input, config)
    }
}


function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.buttonInvalidClass)
        button.disabled = false;
    } else {
        button.classList.add(config.buttonInvalidClass);
        button.disabled = true;
    }
}


function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector)
    const submitButton = form.querySelector(config.submitButtonSelector)

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config)
        })
    });
}


function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config)

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })

        const submitButton = form.querySelector(config.submitButtonSelector)
        setButtonState(submitButton, form.checkValidity(), config)
    })
}

const valdationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__item_type_error',
    buttonInvalidClass: 'popup__button_invalid',

};

enableValidation(valdationConfig)


document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        closeAddCardPopup();
        closePopupEditUserProfile();
        removePopupImage()
    }
});

document.addEventListener('mousedown', function (evt) {
    if (evt.target === popup) {

        closePopupEditUserProfile()
    }
})

document.addEventListener('mousedown', function (evt) {
    const popup = document.querySelector('.popup_add')
    if (evt.target === popup) {

        closeAddCardPopup();
    }
})

document.addEventListener('mousedown', function (evt) {
    const popup = document.querySelector('.popup_big_img')
    if (evt.target === popup) {

        removePopupImage();
    }
})