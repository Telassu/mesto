import {api} from "../components/Api.js";
import {Card} from "../components/Сard.js";
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, formProfile, popupProfileEdit, popupProfile, inputProfileList,
  nameInput, jobInput, profileJob, profileName, cardListSection, popupCardAddBtn, formCards,
inputCardList, popupCard, popupimageView, popupAvatar, formAvatar, inputAvatar, avatar, avatarButton,
popupDelete} from "../utils/constants.js";

//import './index.css';


//Api
//подгружаем карточки
api.getInitialCards()
.then(cardsLoadList => {
  cardsLoadList.forEach((data) => {
    const card = creatCard(data);
    cardsList.addItem(card)
  })
});

//подгружаем информацию пользователя
api.getUserInfo()
.then((data) => {
  userInfo.setUserInfo(data);
  userInfo.setUserAvatar(data);
})

//функции
//валидация форм
const profileValid = new FormValidator (inputProfileList, formProfile);
profileValid.enableValidation();

const cardValid = new FormValidator (inputCardList, formCards);
cardValid.enableValidation();

const avatarValid = new FormValidator (inputAvatar, formAvatar);
avatarValid.enableValidation();

//открытие и закрытие попапов 
const popupProfileForm = new PopupWithForm (popupProfile, handleProfileFormSubmit);
popupProfileForm.setEventListeners();

const popupCardForm = new PopupWithForm (popupCard, handleCardFormSubmit);
popupCardForm.setEventListeners();

const popupImageForm = new PopupWithImage (popupimageView);
popupImageForm.setEventListeners();

const popupAvatarForm = new PopupWithForm (popupAvatar, handleAvatarFormSubmit);
popupAvatarForm.setEventListeners();

//изменение профиля
const userInfo = new UserInfo(profileName, profileJob, avatar);

function handleProfileFormSubmit (data) {
  userInfo.setUserInfo ({name: data ['name'], job: data ['description']});
  popupProfileForm.close();
};

//карточки
function creatCard (item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}

function handleCardFormSubmit(item) {
  cardsList.addItem(creatCard({name: item['place'], link: item['link']}));
  popupCardForm.close();
}


//изменение аватара
function handleAvatarFormSubmit() {
  avatar.src = inputAvatar.value;
  popupAvatarForm.close();
}

//перебор карточек
const cardsList = new Section({
  data: [],
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

avatarButton.addEventListener('click', () => {
  avatarValid.cleanInput();
  popupAvatarForm.open();
});


cardsList.rendererItems();