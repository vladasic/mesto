import {Popup} from './Popup.js';

// import {Card} from '../Card.js';

export class PopupWithImage extends Popup{
    constructor({addNewItem},popupSelector){
        super(popupSelector);
        this._addNewItem = addNewItem;
        this._popupSelector = popupSelector
    }
    open(){
        this.popupSelector.classList.add('popup_opened');
        this.addNewItems()
    }
    addNewItems(){
       return  this._addNewItem()
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