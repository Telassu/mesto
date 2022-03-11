import {Card} from "./Сard.js";
import {FormValidator} from './FormValidator.js';

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
const popupProfileClose = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('.popup_profile');
const formProfile = document.querySelector('.popup__form_profile');
const inputProfileList = formProfile.querySelectorAll('.popup__input');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__description');
const cardList = document.querySelector('.elements__list');
const popupCardAddBtn = document.querySelector('.profile__add-button');
const formCards = document.querySelector('.popup__form_element');
const inputCardList = formCards.querySelectorAll('.popup__input');
const placeInput = formCards.querySelector('.popup__input_type_place');
const linkInput = formCards.querySelector('.popup__input_type_link');
const popupCard = document.querySelector('.popup_element');
const popupCardClose = document.querySelector('.popup__close-button_element');
const popupImageClose = document.querySelector('.popup__close-button_imageView');
const popupimageView = document.querySelector('.imageView');
const imageOnClick = document.querySelector('.imageView__image');
const imageTextOnClick = document.querySelector('.imageView__caption');

//функции
//валидация форм

const profileValid = new FormValidator (inputProfileList, formProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputCardList, formCards);
cardValid.enableValidation();

//открытие и закрытие попапов 
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  addListenerEsc(popup);  
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenerEsc(popup);
}

function openProfilePopup() {
  profileValid.cleanInput(popup);

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
    
  openPopup(popupProfile);
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
  popup.addEventListener('mousedown', closeOverlay);
};

const removeListenerEsc = (popup) => {
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('mousedown', closeOverlay);
};

//закрытие по клику на оверлей
const closeOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

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

  render(userCard, cardList)

  closePopup(popupCard);
  evt.target.reset();
};

//перебор карточек
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


function handleCardClick (name, link) {
  imageOnClick.src = link;
  imageOnClick.alt = name;
  imageTextOnClick.textContent = name;

  openPopup(popupimageView);
}

//вызовы
popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput(popup);  
  openPopup(popupCard);
});
popupProfileEdit.addEventListener('click', openProfilePopup);
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
formProfile.addEventListener('submit', handleProfileFormSubmit);
popupCardClose.addEventListener('click', () => closePopup(popupCard));
formCards.addEventListener('submit', addNewCard);
popupImageClose.addEventListener('click', () => closePopup(popupimageView));


renderCards();