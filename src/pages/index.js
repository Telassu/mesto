import {Card} from "../components/Сard.js";
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, formProfile, popupProfileEdit, popupProfile, inputProfileList,
  nameInput, jobInput, profileJob, profileName, cardListSection, popupCardAddBtn, formCards,
inputCardList, popupCard, popupimageView} from "../utils/constants.js";

import './index.css';

//функции
//валидация форм

const profileValid = new FormValidator (inputProfileList, formProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputCardList, formCards);
cardValid.enableValidation();

//открытие и закрытие попапов 
const popupProfileForm = new PopupWithForm (popupProfile, handleProfileFormSubmit);
<<<<<<< HEAD
popupProfileForm.setEventListener();

const popupCardForm = new PopupWithForm (popupCard, handleCardFormSubmit);
popupCardForm.setEventListener();

const popupImageForm = new PopupWithImage (popupimageView);
=======
popupProfileForm.setEventListeners();

const popupCardForm = new PopupWithForm (popupCard, handleCardFormSubmit);
popupCardForm.setEventListeners();

const popupImageForm = new PopupWithImage (popupimageView);
popupImageForm.setEventListeners();
>>>>>>> parent of 3e2bd8d (Updates)

//изменение профиля
const userInfo = new UserInfo(profileName, profileJob);

function handleProfileFormSubmit (data) {
  userInfo.setUserInfo ({name: data ['name'], job: data ['description']});
  popupProfileForm.close();
};

<<<<<<< HEAD

popupProfileEdit.addEventListener('click', () => {
  profileValid.cleanInput();
  popupProfileForm.open();

  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
});


=======
>>>>>>> parent of 3e2bd8d (Updates)
//карточки
function creatCard (item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}

<<<<<<< HEAD
popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput();  
  popupCardForm.open();
});

=======
>>>>>>> parent of 3e2bd8d (Updates)
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

<<<<<<< HEAD
=======
//обработчики
popupProfileEdit.addEventListener('click', () => {
  profileValid.cleanInput();
  popupProfileForm.open();

  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
});

popupCardAddBtn.addEventListener('click', () => {
  cardValid.cleanInput();  
  popupCardForm.open();
});

>>>>>>> parent of 3e2bd8d (Updates)
cardsList.rendererItems();