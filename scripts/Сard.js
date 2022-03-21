export class Card {
    constructor (data, cardSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._data)
      });
    };
  
    _handleDelete () {
      this._element.remove();
    };
      
    _handleLike () {
      this._likeButton.classList.toggle('element__like_active');
    };
  }
