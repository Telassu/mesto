import {api} from "../components/Api.js";
import {Card} from "../components/Сard.js";
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  formProfile, 
  popupProfileEdit, 
  popupProfile, 
  inputProfileList,
  nameInput, 
  jobInput, 
  profileJob, 
  profileName, 
  cardListSection, 
  popupCardAddBtn, 
  formCards,
  inputCardList,
  popupCard,
  popupimageView,
  popupAvatar,
  formAvatar,
  inputAvatar,
  avatar,
  avatarButton,
  popupDelete
} from "../utils/constants.js";

//import './index.css';

let userID

//профиль
const userInfo = new UserInfo(profileName, profileJob, avatar);

//подгружаем информацию
Promise.all([api.getUserInfo(),api.getInitialCards(userID)])
  .then(([data, cardsLoadList]) => {              
    userID = data._id;
    userInfo.setUserInfo(data);
    userInfo.setUserAvatar(data);

    cardsLoadList.forEach((data) => {
      const card = creatCard(data);
      cardsList.addItem(card)
    }) 
  })

//изменение профиля
function handleProfileFormSubmit (data) {
  popupProfileForm.renderLoading(true)
  api.editUserInfo (data)
  .then ((res) => {
    userInfo.setUserInfo ({name: data ['name'], about: data ['description']});
    popupProfileForm.close();
  })
  .finally(() => {
    popupProfileForm.renderLoading(false);
  })
  
};

//изменение аватара
function handleAvatarFormSubmit(data) {
  popupAvatarForm.renderLoading(true)
  api.editNewAvatar(data)
  .then ((res) => {
    userInfo.setUserAvatar({avatar: data ['avatar']});
    popupAvatarForm.close();
  })
  .finally(() => {
    popupAvatarForm.renderLoading(false);
  })
}

//карточки
function creatCard (data) {
  const card = new Card (data, userID, '.element__template',
  handleCardClick, 
  //удаление карточки
  (id) => {
    api.deleteCard(id)
    .then((res) => card.handleCardDelete())
  },

  //лайк карточки
  (id) => {
  if (card.isLike()) {
    api.deleteLikeCard(id)
    .then((res) => card.setLikes(res.likes))
  } else {
    api.putLikeCard(id)
    .then((res) => card.setLikes(res.likes))
  }
});
  data.owner = {};
  data.owner._id = userID;
  const cardElement = card.generateCard();

  return cardElement
}

//сохранение карточки
function handleCardFormSubmit(data) {
  popupCardForm.renderLoading(true)
  api.editNewCard(data)
  .then ((res) => {
    cardsList.addItem(creatCard(res))
    popupCardForm.close();
  })

  .finally(() => {
    popupCardForm.renderLoading(false);
  })
}

//удаление карточки
function handleDeleteClick(id) {
  popupDeleteForm.open();
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

const popupDeleteForm = new PopupWithConfirmation (popupDelete, handleDeleteClick);
popupDeleteForm.setEventListeners()

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