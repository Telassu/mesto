const option = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

//валидность форм
function checkValid (formElement, inputElement) {
    if (!inputElement.validity.valid) {      
      showErrorValid(formElement, inputElement, inputElement.validationMessage);
    }
    else {      
      hideErrorValid(formElement, inputElement);
    }
};

//включение ошибки
function showErrorValid (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.add(option.inputErrorClass);
  errorElement.classList.add(option.errorClass);  
  errorElement.textContent = errorMessage;
};

//выключение ошибки
function hideErrorValid (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.remove(option.inputErrorClass);
  errorElement.classList.remove(option.errorClass);
  errorElement.textContent = '';
};

//сбор инпутов
function setEventListeners (formElement) {
  const inputSelector = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputSelector, buttonElement);
  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValid(formElement, inputElement);
      toggleButtonState(inputSelector, buttonElement);
    });
  });
};


//кнопка
function toggleButtonState(inputSelector, buttonElement) {
  if (hasInvalidInput(inputSelector)) {
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

function hasInvalidInput(inputSelector) {  
  return inputSelector.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

//очищение поля валидации
function cleanInput(popup) {
  const inputList = popup.querySelectorAll('.popup__input');
  inputList.forEach((inputElement) => {
    hideErrorValid (popup, inputElement);
    inputElement.value = '';
  });
}

function enableValidation () {
  const formSelector = document.querySelectorAll('.popup__form');  
  formSelector.forEach((formElement) => {    
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });    
    setEventListeners (formElement);
  });
};

enableValidation(option);