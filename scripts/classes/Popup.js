
export class Popup{
    constructor(popupSelector){
        this.popupSelector = popupSelector;
        
    }

    open(){
        this.popupSelector.classList.add('popup_opened')
    }

    close(){
        this.popupSelector.classList.remove('popup_opened');
    }


    setEventListeners(){
        this._closeIcon = document.querySelector('.popup__close-icon-general');
        this._closeIcon.addEventListener('click', ()=>{
            this.close()
        });
       document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

        
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close()
        }
       
    
    }
}