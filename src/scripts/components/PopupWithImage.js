import {Popup} from "./Popup.js";
import {imageFull, imageText} from "../utils/constatnts.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupSelector = popupSelector;
    }

    open(name,link){
      imageFull.src = link;
      imageText.textContent = name;
      imageText.alt = name;

      super.open();
    }
}