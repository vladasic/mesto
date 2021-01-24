
export class FormValidator{
   constructor(form,input,button,isActive,config){
       this._form = form;
       this._input = input;
       this._button = button;
       this._isActive = isActive;
       this._config = config;
    } // тут ошибок нет


    _showError(form, input, config) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(config.inputInvalidClass);
    }
    
    _hideError(form, input, config) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(config.inputInvalidClass);
    }
    
    _checkInputValidity(form, input, config) {
        if (input.validity.valid) {
            this._hideError(form, input, config)
        } else {
            this._showError(form, input, config)
        }
    }

    _setButtonState(button, isActive, config) {
        if (isActive) {
            button.classList.remove(config.buttonInvalidClass)
            button.disabled = false;
        } else {
            button.classList.add(config.buttonInvalidClass);
            button.disabled = true;
        }
    }

    _setEventListener(form, config) {
        const inputList = form.querySelectorAll(config.inputSelector)
        const submitButton = form.querySelector(config.submitButtonSelector)
    
        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(form, input, config);
                this._setButtonState(submitButton, form.checkValidity(), config)
            })
        });
    }

    enableValidation(config) {
        const forms = document.querySelectorAll(config.formSelector);
        forms.forEach(form => {
            this._setEventListener(form, config)
    
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
    
            const submitButton = form.querySelector(config.submitButtonSelector)
            this._setButtonState(submitButton, form.checkValidity(), config)
        })
    }
}

