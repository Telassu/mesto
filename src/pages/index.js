import {Card} from "../components/Сard.js";
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { UserInfo } from "../components/UserInfo.js";

import './index.css';

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
const popupCard = document.querySelector('.popup_element');
const popupimageView = document.querySelector('.imageView');

//функции
//валидация форм

const profileValid = new FormValidator (inputProfileList, formProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputCardList, formCards);
cardValid.enableValidation();

//открытие и закрытие попапов 
const popupProfileForm = new PopupWithForm (popupProfile, handleProfileFormSubmit);
popupProfileForm.setEventListener();

const popupCardForm = new PopupWithForm (popupCard, handleCardFormSubmit);
popupCardForm.setEventListener();

const popupImageForm = new PopupWithImage (popupimageView);

//изменение профиля
const userInfo = new UserInfo(profileName, profileJob);

function handleProfileFormSubmit (data) {
  userInfo.setUserInfo ({name: data ['name'], job: data ['description']});
  popupProfileForm.close();
};


popupProfileEdit.addEventListener('click', () => {
  profileValid.cleanInput();
  popupProfileForm.open();

  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
});


//карточки
function creatCard (item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}

popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput();  
  popupCardForm.open();
});

function handleCardFormSubmit(item) {
  cardsList.addItem(creatCard({name: item['place'], link: item['link']}));
  popupCardForm.close();
}

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
function handleCardClick (name, link) {
  popupImageForm.open(name, link)
}

cardsList.rendererItems();