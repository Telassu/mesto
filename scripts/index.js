import {Card} from "./Card.js";
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
const formElementProfile = document.querySelector('.popup__form_profile');
const inputListProfile = formElementProfile.querySelectorAll('.popup__input');
const nameInput = formElementProfile.querySelector('.popup__input_type_name');
const jobInput = formElementProfile.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__description');
const cardList = document.querySelector('.elements__list');
const popupCardAddBtn = document.querySelector('.profile__add-button');
const formElementCards = document.querySelector('.popup__form_element');
const inputListCard = formElementCards.querySelectorAll('.popup__input');
const placeInput = formElementCards.querySelector('.popup__input_type_place');
const linkInput = formElementCards.querySelector('.popup__input_type_link');
const popupCard = document.querySelector('.popup_element');
const popupCardClose = document.querySelector('.popup__close-button_element');
const popupImageClose = document.querySelector('.popup__close-button_imageView');
const popupimageView = document.querySelector('.imageView');

//функции
//валидация форм
const profileValid = new FormValidator (inputListProfile, formElementProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputListCard, formElementCards);
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
  const card = new Card (item, '.element__template');
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

//вызовы

popupProfileEdit.addEventListener('click', openProfilePopup);
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
formElementProfile.addEventListener('submit', handleProfileFormSubmit);
popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput(popup);  
  openPopup(popupCard);
});
popupCardClose.addEventListener('click', () => closePopup(popupCard));
formElementCards.addEventListener('submit', addNewCard);
popupImageClose.addEventListener('click', () => closePopup(popupimageView));


renderCards();