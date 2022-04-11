import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._formDelete = this._popupSelector.querySelector('.popup__form_delete');
    this._handleFormSubmit = handleFormSubmit
  }

  callbackSubmitForm (fnc) {
    this._handleFormSubmit = fnc;
  }

  setEventListeners(){
    super.setEventListeners();

    this._formDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('ni hao!')

      this._handleFormSubmit();
    })
  };
}