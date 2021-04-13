import {Popup} from "./Popup.js";
export class PopupWthForm extends Popup{
    constructor({handleFormSubmit},popupSelector,form){
      super(popupSelector);
      this._popupSelector = popupSelector;
      this._handleFormSubmit = handleFormSubmit;
      this._form = form;
      this._popubButtonAll = this._popupSelector.querySelector('.popup__button')
    }

    _getInputValues(){
      this._inputList = this._popupSelector.querySelectorAll('.popup__input');
      this._formValues = {};
      this._inputList.forEach(input =>{
          this._formValues[input.name] = input.value
      });
      return this._formValues
    };
    setEventListeners(){
      this._form.addEventListener('submit', (evt)=>{
        evt.preventDefault();
        this._renderLoading(true)
        this._handleFormSubmit(this._getInputValues())
      });
      super.setEventListeners();
      
    };

    close(){
     
        this._form.reset()
        
        super.close();
    }

    _renderLoading(isLoading){
        if(isLoading){
          this._popubButtonAll.textContent  = `Сохранение...`
        }
    }
}