import { Popup } from './Popup.js'



export class PopupWithForm extends Popup {
    constructor({ getInputsValues, handleFormSubmit }, popupSelector, form) {
        super(popupSelector);
        this._getInputsValues = getInputsValues;
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._form = form;
    }
   

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {  
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });

        super.setEventListeners();
    }
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
      } 

    close() {
        super.close();
        this._form.reset()

    }
}
