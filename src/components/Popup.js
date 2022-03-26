export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector,
    this._handleEscClose = this._handleEscClose.bind(this),
    this._handleClickClose = this._handleClickClose.bind(this)
  };
  
  open() {
    this._popupSelector.classList.add('popup_opened');
    this.setEventListeners()
  };

  close() {
    this._popupSelector.classList.remove('popup_opened');
  };
  
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  };

  _handleClickClose(evt) {
    if (evt.target.classList.contains ('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popupSelector.addEventListener('mousedown', (evt) => {
      this._handleClickClose(evt)
    });
  };
}