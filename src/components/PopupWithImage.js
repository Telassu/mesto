import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector),
    this._image = this._popupSelector.querySelector('.imageView__image'),
    this._caption = this._popupSelector.querySelector('.imageView__caption')
  }

  open(name, link) { 
    super.open();
    
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
  }
}