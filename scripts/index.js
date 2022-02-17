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
const nameInput = formElementProfile.querySelector('.popup__input_type_name');
const jobInput = formElementProfile.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__description');
const template = document.querySelector('.element__template').content;
const list = document.querySelector('.elements__list');
const popupElementAdd = document.querySelector('.profile__add-button');
const formElementCards = document.querySelector('.popup__form_element');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupElement = document.querySelector('.popup_element');
const popupElementClose = document.querySelector('.popup__close-button_element');
const popupimageView = document.querySelector('.imageView');
const popupImageClose = document.querySelector('.popup__close-button_imageView');
const imageOnClick = document.querySelector('.imageView__image');
const imageTextOnClick = document.querySelector('.imageView__caption');

//функции
//открытие и закрытие попапов 
function openPopup(popup) {
  popup.classList.add('popup_opened');   
  addListenerEsc(popup);
  setEventListeners(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenerEsc(popup);  
}

function openProfilePopup() {  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
  openPopup(popupProfile);
}

//закрытие по клавише ESC
const closeEsc = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

function addListenerEsc (popup) {
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('click', closeOverlay);
};

const removeListenerEsc = (popup) => {
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('click', closeOverlay);
};

//закрытие по клику на оверлей
const closeOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

//изменение профиля
function submitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

//создание карточки
function createCard(element) {

  const cardElement = template.querySelector('.element').cloneNode(true); 
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  addListener(cardElement);

  return cardElement;
}

//добавление фото
function addNewCard(evt) {
  evt.preventDefault();
  
  const userCard = {
    name: placeInput.value,
    link: linkInput.value
  };
  
  const newUserCard = createCard(userCard);  
  renderCards(newUserCard, list);

  closePopup(popupElement); 
  placeInput.value = '';
  linkInput.value = '';
}

function renderCards(card, wrap) {
  list.prepend(card);
}

function render() {
  initialCards.forEach(element => {
    const card = createCard(element);
    renderCards(card, list);

  });
} 

//функция вызова
function addListener(el) {
  el.querySelector('.element__like').addEventListener('click', handleLike);
  el.querySelector('.element__delete').addEventListener('click', handleDelete);
  el.querySelector('.element__image').addEventListener('click', openImage);
}

//удаление фото
function handleDelete(event) {
  event.target.closest('.element').remove();
}

//like'и
function handleLike(event) {
 event.target.closest('.element__like').classList.toggle('element__like_active');
}

//увеличение картинки
function openImage (evt) {
  const cardImg = evt.target.closest('.element__image');
    imageOnClick.src = cardImg.src;
    imageOnClick.alt = cardImg.alt;
    imageTextOnClick.textContent = cardImg.alt;
   
    openPopup(popupimageView);
}

//вызовы

popupProfileEdit.addEventListener('click', openProfilePopup);
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
formElementProfile.addEventListener('submit', submitHandler);
popupElementAdd.addEventListener('click', () => openPopup(popupElement));
popupElementClose.addEventListener('click', () => closePopup(popupElement));
formElementCards.addEventListener('submit', addNewCard);
popupImageClose.addEventListener('click', () => closePopup(popupimageView));



render();