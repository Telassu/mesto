const formInput = document.querySelectorAll('.popup__input');
const form = document.querySelector('.popup__form');
const formError = document.querySelectorAll('.popup__input-error');
const button = document.querySelector('.popup__save-button');

formInput.forEach(input => {
  input.addEventListener('input', function () {
    if (!input.validity.valid) {
      showError(input, input.validationMessage);           
    }
    else {
      hideError(input);
    }
  });
});

const showError = (input, errorMessage) => {
  input.classList.add('popup__input-error');
  formError.forEach(error => {
    error.classList.add('popup__input-error_active');
    error.textContent = errorMessage;
  });
  button.setAttribute('disabled', '');
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
  formError.forEach(error => {
  error.classList.remove('form__input-error_active');
  error.textContent = '';
  });
  button.removeAttribute('disabled');
};


form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});


//const buttonSave = Array.from(document.querySelectorAll('.popup__save-button'));

  //button.setAttribute('disabled', '');
  //button.classList.add(disabledButtonClass);
//}
//const checkButtonValidity = ({ disabledButtonClass }, form, button) => {
  //if (form.checkValidity()) {
    //  button.removeAttribute('disabled');
      //button.classList.remove(disabledButtonClass);
 // } else {
   //   disableButton(disabledButtonClass, button);
  //}
//}
