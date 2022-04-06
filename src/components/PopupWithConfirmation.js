import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor (popupSelector, handleFormDelete) {
    super(popupSelector);
    this._handleFormDelete = handleFormDelete;
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('Hello world!')
    })
  }
}