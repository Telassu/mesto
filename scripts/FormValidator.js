export class FormValidator {
  constructor (inputElement, formElement) {
  //  this._submitButttonSelector = formElement.submitButttonSelector;
    this._inputErrorClass = inputElement.inputErrorClass;
    this._errorClass = inputElement.errorClass;    
    this._inputElement = inputElement;
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
_showErrorValid (errorMessage) {
  const errorElement = this._formElement.querySelector(`.${this._inputElement.name}-input-error`);
  this._inputElement.classList.add(this._inputErrorClass);
  errorElement.classList.add(this._errorClass);  
  errorElement.textContent = errorMessage;
};

//выключение ошибки
_hideErrorValid () {
  const errorElement = this._formElement.querySelector(`.${this._inputElement.name}-input-error`);
  this._inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

//валидность форм
_checkValid () {
  console.log('меня видно!')
  if (!this._inputElement.validity.valid) {
   this._showErrorValid(this._inputElement.validationMessage);
  }
  else {      
   this._hideErrorValid();
  }
};

_hasInvalidInput() {
  return inputList.some((inputElement) => {
    return !this._inputElement.validity.valid;
  });
};

//кнопка
_toggleButtonState() {
  console.log('Это я! кнопкоотключатель!')
  const submitButtonSelector = this._formElement.querySelector('.popup__save-button')
  if (!this._inputElement.validity.valid) {
    submitButtonSelector.setAttribute('disabled', '');
  } else {
    submitButtonSelector.removeAttribute('disabled');
  }
};

//слушатели
_setEventListeners () {
  console.log('Да?!')
  this._inputElement.addEventListener('input', () => {
    this._checkValid();
    this._toggleButtonState();
  });
};

//очищение поля валидации
_cleanInput() {
  this._hideErrorValid ();
  this._inputElement.value = '';
};

enableValidation () { 
  this._setEventListeners ();
  console.log('Я уже валидируюсь!')
};
};