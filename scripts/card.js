import {openPopup} from './index.js';

const imageOnClick = document.querySelector('.imageView__image');
const imageTextOnClick = document.querySelector('.imageView__caption');
const popupimageView = document.querySelector('.imageView');

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
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeButton = this._element.querySelector('.element__like');
    this._setEventListeners ();

    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    return this._element;
  }

//слушатели
  _setEventListeners () {
    this._deleteButton.addEventListener('click', () => {
      this._handleDelete()
    });
     
    this._likeButton.addEventListener('click', () => {
      this._handleLike()
    });

    this._cardImage.addEventListener('click', () => {
      this._openImage();
    });
  };

  _handleDelete () {
    this._element.remove();
  };
    
  _handleLike () {
    this._likeButton.classList.toggle('element__like_active');
  };

  _openImage () {
    imageOnClick.src = this._link;
    imageOnClick.alt = this._name;
    imageTextOnClick.textContent = this._name;

    openPopup(popupimageView);
  }
}