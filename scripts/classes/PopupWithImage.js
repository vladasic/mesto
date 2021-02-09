import {Popup} from './Popup.js';

// import {Card} from '../Card.js';

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupSelector = popupSelector
    }

    openPopupImg(name,link){
    const popupImageBig = document.querySelector('.popup__image-opened_full');
    const popupTextInfo = document.querySelector('.popup__image-text_for_full');
    
    popupTextInfo.textContent = name;
    popupImageBig.src = link;
    popupImageBig.alt = name.textContent;


    }
}


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