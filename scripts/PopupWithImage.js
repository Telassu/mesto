import {imageOnClick, imageTextOnClick} from '../src/index.js';
import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector),
    this._name = data.name,
    this._link = data.link
  }

  open() { 
    super.open();
    
    imageOnClick.src = this._link;
    imageOnClick.alt = this._name;
    imageTextOnClick.textContent = this._name;
  }
}