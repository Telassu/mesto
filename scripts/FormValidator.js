export class FormValidator {
  constructor (data, form) {
    this._form = form;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    
    this._submitButton = this._form.querySelector('.popup__save-button');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }
 
  //отражение ошибки
 _showErrorValid (inputElement, errorMessage) { 
    const errorElement = this._form.querySelector(`.${inputElement.name}-input-error`); 
    inputElement.classList.add(this._inputErrorClass); 
    errorElement.classList.add(this._errorClass);   
    errorElement.textContent = errorMessage; 
  }; 

  //скрытие ошибки
  _hideErrorValid (inputElement) { 
    const errorElement = this._form.querySelector(`.${inputElement.name}-input-error`); 
    inputElement.classList.remove(this._inputErrorClass); 
    errorElement.classList.remove(this._errorClass); 
    errorElement.textContent = ''; 
  };

  //ввалидация
  _checkValid (inputElement) {
    console.log('Я валидация!') 
    
    if (!inputElement.validity.valid) {       
      this._showErrorValid(inputElement, inputElement.validationMessage); 
    } 
    else {       
      this._hideErrorValid(inputElement); 
    }
}; 

  _hasInvalidInput() {
    return this._inputList.some(inputElement => { 
      return !inputElement.validity.valid; 
    }); 
  };

  //кнопка
  _toggleButtonState() { 
    console.log('Приветики! Я - кнопка')
    
    if (this._hasInvalidInput()) { 
      this._submitButton.setAttribute('disabled', ''); 
    } else { 
      this._submitButton.removeAttribute('disabled'); 
    }
  }; 


  //слушатели
  _setEventListener() {
    console.log('Приветики! Я - слушатель')

    this._inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkValid(inputElement); 
        this._toggleButtonState(); 
      }); 
    }); 
  }; 

  //очищение инпутов
  cleanInput() {
    this._inputList.forEach((inputElement) => { 
      this._hideErrorValid (inputElement); 
      inputElement.value = ''; 
    });
    this._toggleButtonState(); 
  }

  //запуск валидации
  enableValidation() {
    console.log('Приветики! Я - запуск валидации')

    this._setEventListener ();
  }
};

