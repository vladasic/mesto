import {escape,popup} from '../utils/contstants.js'
export class Popup{
    constructor(popupSelector){
        this.popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open(){
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this.popupSelector.classList.remove('popup_opened');
        this._handleEscClose.disabled = true 
    }


    setEventListeners(){
        this._closeIcon = popup.querySelector('.popup__close-icon-general');

        
        this._closeIcon.addEventListener('click', ()=>{
            this.close()
        });
        this.open()
    }
    // function removeElement(e) {
    //     const targertElement = e.target;
    //     const targetItem = targertElement.closest('.element');
    //     targetItem.remove();
    // }
        
    _handleEscClose(evt){
        if (evt.key === escape) {
            this.close();
            console.log('z')
        }
    }
}