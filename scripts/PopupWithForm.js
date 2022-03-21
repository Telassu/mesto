import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(){
   //собирает данные полей 
  }

  _setEventListener(){
    //добавляет сабмит формы
  }

  close() {
    //сбрасывает данные формы
  }
}
