import {Card} from "../scripts/Сard.js";
import {FormValidator} from '../scripts/FormValidator.js';
import {Section} from '../scripts/Section.js';
import {Popup} from '../scripts/Popup.js';
import { PopupWithImage } from "../scripts/PopupWithImage.js";

//import '../pages/index.css';

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

//переменные

const popupProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const formProfile = document.querySelector('.popup__form_profile');
const inputProfileList = formProfile.querySelectorAll('.popup__input');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__description');
const cardListSection = document.querySelector('.elements__list');
const popupCardAddBtn = document.querySelector('.profile__add-button');
const formCards = document.querySelector('.popup__form_element');
const inputCardList = formCards.querySelectorAll('.popup__input');
const placeInput = formCards.querySelector('.popup__input_type_place');
const linkInput = formCards.querySelector('.popup__input_type_link');
const popupCard = document.querySelector('.popup_element');
const popupimageView = document.querySelector('.imageView');
export const imageOnClick = document.querySelector('.imageView__image');
export const imageTextOnClick = document.querySelector('.imageView__caption');
const popups = document.querySelectorAll('.popup');


//функции
//валидация форм

const profileValid = new FormValidator (inputProfileList, formProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputCardList, formCards);
cardValid.enableValidation();

//открытие и закрытие попапов 
const popupProfileForm = new Popup (popupProfile);
const popupCardForm = new Popup (popupCard);
const popupImageForm = new PopupWithImage (item, popupimageView);

//изменение профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

//создание карточки
function creatCard (item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}
//добавление фото
function addNewCard(evt) {
  evt.preventDefault();
  
  const userCard = creatCard ({
    name: placeInput.value,
    link: linkInput.value,
  });

  //render(userCard, cardList)

  popupCardForm.close();
  evt.target.reset();
};

//перебор карточек
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = creatCard(item);
    cardsList.addItem(cardElement)
  }
},
cardListSection
);


//увличение карточки
function handleCardClick () {
  popupImageForm.open()
}

//вызовы
popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput();  
  popupCardForm.open();
});
popupProfileEdit.addEventListener('click', () => {
  popupProfileForm.open()
});
formProfile.addEventListener('submit', handleProfileFormSubmit);
formCards.addEventListener('submit', addNewCard);


cardsList.rendererItems();

/*function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListenerEsc(popup);  
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenerEsc(popup);
}

//закрытие по клавише ESC
const closeEsc = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
};

function addListenerEsc (popup) {
  document.addEventListener('keydown', closeEsc);
};

const removeListenerEsc = (popup) => {
  document.removeEventListener('keydown', closeEsc);
};

//закрытие по клику на оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
});
});

function openProfilePopup() {
  profileValid.cleanInput();

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
    
  popupProfileForm.open();
}
*/


/*
const renderCards = () => {
   initialCards.forEach ((item) => {
   const cardElement = creatCard(item);

   render(cardElement, cardList);
  });
 };

//вставка карточек
function render(card, wrap) {
  cardList.prepend(card);
}
*/
