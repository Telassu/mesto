export class Card {
  constructor (data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
    //методы

    _getTemplate () {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    
      return cardElement;
    }

    generateCard () {
      this._element = this._getTemplate();
      this._setEventListeners ();

      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__image').src = this._link;

      return this._element;
    }

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
      console.log('hello world');    
    }
  }