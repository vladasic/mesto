import { Popup } from './Popup.js';
import { popupImageBig, popupTextInfo } from '../utils/contstants.js'

// import {Card} from '../Card.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector
    }

    openPopupImg(name, link) {
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