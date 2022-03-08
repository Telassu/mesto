import {openPopup} from './index.js';

export class Card {
  constructor (data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
    //методы
//template-элемент
    _getTemplate () {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    
      return cardElement;
    }
//карточка
    generateCard () {
      this._element = this._getTemplate();
      this._setEventListeners ();

      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__image').src = this._link;

      return this._element;
    }
//слушатели
    _setEventListeners () {
      this._element.querySelector('.element__delete').addEventListener('click', () => {
        this._handleDelete()
      });
      
      this._element.querySelector('.element__like').addEventListener('click', () => {
        this._handleLike()
      });

     this._element.querySelector('.element__image').addEventListener('click', () => {
        this._openImage();
      });
    };

    _handleDelete () {
      this._element.remove();
    };
    
    _handleLike () {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };

    _openImage () {
      const imageOnClick = document.querySelector('.imageView__image');
      const imageTextOnClick = document.querySelector('.imageView__caption');
      const popupimageView = document.querySelector('.imageView');

      imageOnClick.src = this._link;
      imageOnClick.alt = this._name;
      imageTextOnClick.textContent = this._name;

      openPopup(popupimageView);
    }
  }