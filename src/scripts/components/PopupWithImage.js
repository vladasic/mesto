import {Popup} from "./Popup.js";


export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._iamgeFull = document.querySelector('.popup__image-opened_full');
        this._imageText = document.querySelector('.popup__image-text_for_full');
    }

    open(name,link){
      this._iamgeFull.src = link;
      this._imageText.textContent = name;
      this._imageText.alt = name;

      super.open();
    }
}