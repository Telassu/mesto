const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export default class Card {
  constructor (data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this.cardSelector = cardSelector;
  }
/*- принимает в конструктор её данные и селектор её template-элемента;
- содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
- содержит приватные методы для каждого обработчика;
- содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.*/
    
    //методы

    _getTemplate () {
      const cardElement = document
      .querySelector('.element__template')
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
    };

    _handleDelete () {
      this._element.remove();
    };
    
    _handleLike () {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };

  }

  initialCards.forEach ((item) => {
    const card = new Card (item);
    const cardElement = card.generateCard();
     
    document.querySelector('.elements__list').prepend(cardElement);
   });