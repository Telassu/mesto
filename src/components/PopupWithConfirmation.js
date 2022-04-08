import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._formButton = this._popupSelector.querySelector('.popup__save-button_delete');
  }

/*submitFormHandler(callbackHandleFormSubmit) {
    this._handleFormSubmit = callbackHandleFormSubmit
  }*/


  setEventListeners(){
    super.setEventListeners();

    this._formButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('Hello world!')
     // submitFormHandler(callbackHandleFormSubmit);
    })
  };
}