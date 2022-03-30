export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector,
<<<<<<< HEAD
    this._handleEscClose = this._handleEscClose.bind(this),
    this._handleClickClose = this._handleClickClose.bind(this)
=======
    this._handleEscClose = this._handleEscClose.bind(this)
>>>>>>> parent of 3e2bd8d (Updates)
  };
  
  open() {
    this._popupSelector.classList.add('popup_opened');
<<<<<<< HEAD
    this.setEventListeners()
=======
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
>>>>>>> parent of 3e2bd8d (Updates)
  };

  close() {
    this._popupSelector.classList.remove('popup_opened');
<<<<<<< HEAD
=======
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
>>>>>>> parent of 3e2bd8d (Updates)
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
<<<<<<< HEAD
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
=======
>>>>>>> parent of 3e2bd8d (Updates)
    this._popupSelector.addEventListener('mousedown', (evt) => {
      this._handleClickClose(evt)
    });
  };
}