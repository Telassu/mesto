export class FormValidator {
  constructor (data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitBtn = data.submitBtn;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  //отражение ошибки
  _showErrorValid (inputElement, errorMessage) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`); 
    inputElement.classList.add(this._inputErrorClass); 
    errorElement.classList.add(this._errorClass);   
    errorElement.textContent = errorMessage; 
  }; 

  //скрытие ошибки
  _hideErrorValid (inputElement) { 
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`); 
    inputElement.classList.remove(this._inputErrorClass); 
    errorElement.classList.remove(this._errorClass); 
    errorElement.textContent = ''; 
  };

  //ввалидация
  _checkValid (inputElement) { 
    if (!inputElement.validity.valid) {       
      this._showErrorValid(inputElement, inputElement.validationMessage); 
    } 
    else {       
      this._hideErrorValid(inputElement); 
    } 
}; 

  _hasInvalidInput(inputSelector) {
    return inputSelector.some(inputElement => { 
      return !inputElement.validity.valid; 
    }); 
  }; 

  //кнопка
  _toggleButtonState(inputSelector, buttonElement) { 
    if (this._hasInvalidInput(inputSelector)) { 
      buttonElement.setAttribute('disabled', ''); 
    } else { 
      buttonElement.removeAttribute('disabled'); 
    } 
  }; 


  //слушатели
  _setEventListener() {
    const inputSelector = Array.from(this._formElement.querySelectorAll('.popup__input'));
    const buttonElement = this._formElement.querySelector('.popup__save-button'); 
    this._toggleButtonState(inputSelector, buttonElement); 
    inputSelector.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkValid(inputElement); 
        this._toggleButtonState(inputSelector, buttonElement); 
      }); 
    }); 
  }; 

  //очищение инпутов
  cleanInput() {
    const inputList = this._formElement.querySelectorAll('.popup__input'); 
    inputList.forEach((inputElement) => { 
      this._hideErrorValid (inputElement); 
      inputElement.value = ''; 
    }); 
  }

  //запуск валидации
  enableValidation() {
    this._setEventListener ();
  }
};

