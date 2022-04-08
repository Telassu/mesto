export class Card {
    constructor (data, userID, cardSelector, handleCardClick, handleDeleteClick) {
      this._name = data.name;
      this._link = data.link;
      this._id = data._id;
      this._ownerID = data.owner._id;
      this._userID = userID;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteClick = handleDeleteClick;
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

      this._likeButton = this._element.querySelector('.element__like');
      this._likeCounter = this._element.querySelector('.element__like-counter');

      if(this._userID !== this._ownerID) {
        this._deleteButton = this._element.querySelector('.element__delete');
        this._deleteButton.style.display = 'none';
      }
      this._setEventListeners ();
  
      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
  
      return this._element;
    }
  
  //слушатели
    _setEventListeners () {
    /*  this._deleteButton.addEventListener('click', () => {
        this._handleDeleteClick(this._id)
      });*/
       
      this._likeButton.addEventListener('click', () => {
        this._handleLike()
      });
  
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });
    };
  
    _handleDelete () {
      this._element.remove();
    };
      
    _handleLike () {
      this._likeButton.classList.toggle('element__like_active');
    };
  }
