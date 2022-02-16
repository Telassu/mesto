const InputList = Array.from(document.querySelectorAll('.popup__text'));
const formError = document.querySelectorAll('.popup__input-error');
const buttonList = document.querySelectorAll('.popup__save-button');
const formList = document.querySelectorAll('.popup__form');

console.log(formList);

InputList.forEach(inputElement => {
  inputElement.addEventListener('input', function () {
    if (!inputElement.validity.valid) {
      showError(inputElement, inputElement.validationMessage);   
    }
    else {
      hideError(inputElement);
    }
  });
});

const showError = (inputElement, errorMessage) => {
  formError.forEach(error => {
    inputElement.classList.add('popup__input-error_type');
    error.classList.add('popup__input-error_type_active');
    error.textContent = errorMessage;
  });
  buttonList.forEach(button => {
    button.setAttribute('disabled', '');
  });
};

const hideError = (inputElement) => {
  inputElement.classList.remove('popup__input-error_type');
  formError.forEach(error => {
  error.classList.remove('popup__input-error_active');
  error.textContent = '';
  });
  buttonList.forEach(button => {
    button.removeAttribute('disabled');
  });
};

const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });  
});
}


enableValidation({
  formList: '.popup__form',
  inputList: '.popup__text',
  buttonList: '.popup__save-button',
  inactiveButtonList: 'popup__save-button_disabled',
  formError: 'popup__input-error_type',
  errorClass: 'popup__input-error_type_active'
}); 