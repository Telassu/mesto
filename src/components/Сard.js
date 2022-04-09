export class Card {
    constructor (data, 
      userID, 
      cardSelector, 
      handleCardClick, 
      handleDeleteClick, 
      handleLikeClick) {
      this._name = data.name;
      this._link = data.link;
      this._id = data._id;
      this._ownerID = data.owner._id;
      this._userID = userID;
      this._likes = data.likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteClick = handleDeleteClick;
      this._handleLikeClick = handleLikeClick
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
      this.setLikes(this._likes);  

      this._deleteButton = this._element.querySelector('.element__delete');
      if(this._userID !== this._ownerID) {
        this._deleteButton.style.display = 'none';
      }
      this._setEventListeners ();
  
      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
  
      return this._element;
    }

    //likes
    isLike () {
      const userLike = this._likes.find(user => user._id === this._userID);
      return userLike;
    }

    setLikes(like) {
      this._likes = like;
      this._likeCounter.textContent = this._likes.length;

      if(this.isLike()) {
        this._likeButton.classList.add('element__like_active');
      } else {
        this._likeButton.classList.remove('element__like_active');
      }
    };
    

    //слушатели
    _setEventListeners () {
      this._deleteButton.addEventListener('click', () => {
        this._handleDeleteClick(this._id)
      });
      
      this._likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._id)
      });
  
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });
    };
  
    handleCardDelete () {
      this._element.remove();
    };
}
