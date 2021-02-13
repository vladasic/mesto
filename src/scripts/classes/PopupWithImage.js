import { Popup } from './Popup.js';
import { popupImageBig, popupTextInfo } from '../utils/contstants.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector
    }

    openPopupImg(name, link) {
        popupTextInfo.textContent = name;
        popupImageBig.src = link;
        popupImageBig.alt = name.textContent;
        super.open()
    }
}

