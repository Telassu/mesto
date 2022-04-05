import {api} from "../components/Api.js";
import {Card} from "../components/Сard.js";
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { UserInfo } from "../components/UserInfo.js";
import {formProfile, popupProfileEdit, popupProfile, inputProfileList,
  nameInput, jobInput, profileJob, profileName, cardListSection, popupCardAddBtn, formCards,
inputCardList, popupCard, popupimageView, popupAvatar, formAvatar, inputAvatar, avatar, avatarButton,
popupDelete} from "../utils/constants.js";

//import './index.css';


//подгружаем информацию пользователя
api.getUserInfo()
.then((data) => {  
  userInfo.setUserInfo(data);
  userInfo.setUserAvatar(data);
});


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
  api.editUserInfo (data)
  .then ((res) => {
    userInfo.setUserInfo ({name: data ['name'], about: data ['description']});
    popupProfileForm.close();
  });
};

//карточки
function creatCard (item) {
  const card = new Card (item, '.element__template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement
}

function handleCardFormSubmit(data) {
  api.editNewCard(data)
  .then ((res) => {
    cardsList.addItem(creatCard({name: data ['place'], link: data ['link']}));
    popupCardForm.close();
  })
}


//изменение аватара
function handleAvatarFormSubmit(data) {
  api.editNewAvatar(data)
  .then ((res) => {
    userInfo.setUserAvatar({avatar: data ['avatar']});
    popupAvatarForm.close();
  })
}

//подгружаем карточки
api.getInitialCards()
.then(cardsLoadList => {
  cardsLoadList.forEach((data) => {
    const card = creatCard(data);
    cardsList.addItem(card)
  })
});

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

//увеличение карточки
function handleCardClick (name, link) {
  popupImageForm.open(name, link)
}

//обработчики
popupProfileEdit.addEventListener('click', () => {
  profileValid.cleanInput();
  popupProfileForm.open();

  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.about;
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