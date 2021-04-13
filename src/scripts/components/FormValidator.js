export class FormValidator{
    constructor(form,input,button,isActive, config){
        this._form = form;
        this._input = input;
        this._button = button;
        this._isActive = isActive;
        this._config = config;
        this._submitButton = this._form.querySelector(config.submitButtonSelector);
    }

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
      
      inputList.forEach(input => {
          input.addEventListener('input', (evt) => {
              this._checkInputValidity(form, input, config);
              this._setButtonState(this._submitButton, form.checkValidity(), config)
          })
      });
    }

    enableValidation() {
      const forms = document.querySelectorAll(this._config.formSelector);
      forms.forEach(form => {
        this._setEventListener(form, this._config)
  
        form.addEventListener('submit', (evt) => {
          evt.preventDefault();
        })
  
        this._setButtonState(this._submitButton, form.checkValidity(), this._config)
        })
    }
}
