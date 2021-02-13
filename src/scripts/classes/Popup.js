import { escape, popup } from '../utils/contstants.js'
export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }


    setEventListeners() {
        this._closeIcon = this._popupSelector.querySelector('.popup__close-icon-general');
        this._closeIcon.addEventListener('mousedown', () => {
            this.close();
        });

    }
    // function removeElement(e) {
    //     const targertElement = e.target;
    //     const targetItem = targertElement.closest('.element');
    //     targetItem.remove();
    // }

    _handleEscClose(evt) {
        if (evt.key === escape) {
            this.close();
            console.log('z')
        }
    }
}

// document.addEventListener('mousedown', function (evt) {
//     if (evt.target === popup) {

//         closePopupEditUserProfile()
//     }
// })

// document.addEventListener('mousedown', function (evt) {
//     const popup = document.querySelector('.popup_add')
//     if (evt.target === popup) {

//         closeAddCardPopup();
//     }
// })

// document.addEventListener('mousedown', function (evt) {
//     const popup = document.querySelector('.popup_big_img')
//     if (evt.target === popup) {

//         removePopupImage();
//     }
// })