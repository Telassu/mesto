import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form');
    this._formButton = this._form.querySelector('.popup__save-button');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonText = this._formButton.textContent;
  }

  _getInputValues(){
    this._formValues = {};
   
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  };

  renderLoading (isLoading) { 
    if (isLoading) {
      this._formButton.textContent = "Сохранение...";
    } else {
      this._formButton.textContent = this._buttonText;
    }
  };

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  };

  close() {
    super.close();
    this._form.reset()
  }
}