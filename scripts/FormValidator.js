export class FormValidator {
  constructor (data, formElement) {
    this._inputElement = data.inputElement;
    this._submitButttonSelector = data.submitButttonSelector;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
  };

//const option = {
  //formSelector: '.popup__form',
  //inputSelector: '.popup__input',
  //submitButtonSelector: 'popup__save-button',
  //inactiveButtonClass: 'popup__save-button_disabled',
  //inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__input-error_active'
//};
/*
принимает в конструктор объект настроек с селекторами и классами формы;
принимает вторым параметром элемент той формы, которая валидируется;
имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
имеет публичный метод enableValidation, который включает валидацию формы.
*/

//включение ошибки
_showErrorValid (inputElement, errorMessage) {
  const errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.classList.add(this._errorClass);  
  errorElement.textContent = errorMessage;
};

//выключение ошибки
_hideErrorValid (inputElement) {
  const errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

//валидность форм
_checkValid (inputElement) {
  if (!inputElement.validity.valid) {      
    this._showErrorValid(inputElement, inputElement.validationMessage);
  }
  else {      
    this._hideErrorValid(inputElement);
  }
};

_hasInvalidInput(inputElement) {
  return !inputElement.validity.valid;
};

//кнопка
_toggleButtonState(inputElement, submitButttonSelector) {
  if (this._hasInvalidInput(inputElement)) {
    submitButttonSelector.setAttribute('disabled', '');
  } else {
    submitButttonSelector.removeAttribute('disabled');
  }
};

//слушатели
_setEventListeners () {
  // this._toggleButtonState(inputElement, submitButttonSelector);
   this._inputElement.addEventListener('input', () => {
       _checkValid(inputElement);
       _toggleButtonState(inputElement, submitButttonSelector);
     });
   };

//очищение поля валидации
_cleanInput(popup) {
  _hideErrorValid (popup, inputElement);
  this._inputElement.value = '';
};

enableValidation () {
  this._formElement.addEventListener('submit', () => { 
    this._setEventListeners ();
  });
};
};