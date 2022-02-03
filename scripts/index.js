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

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form_profile');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
let profileName = document.querySelector('.profile-info__name');
let profileJob = document.querySelector('.profile-info__description')

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

//ПР5
const template = document.querySelector('.element__template').content;
const list = document.querySelector('.elements__list');
const addButton = document.querySelector('.profile__add-button');
const formElementCards = document.querySelector('.popup__form_element');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const popupPlace = document.querySelector('.popup_element');
const closePlaceButton = document.querySelector('.popup__close-button_element');

//шесть карточек при запуске страницы
function renderCards(element) {
  const newCard = template.querySelector('.element').cloneNode(true);

  newCard.querySelector('.element__title').textContent = element.name;
  newCard.querySelector('.element__image').alt = element.name;
  newCard.querySelector('.element__image').src = element.link;

  list.append(newCard);
  addListener(newCard);
}

function render() {
  initialCards.forEach(renderCards);
}

render();

//открытие и закрытие попапа
function openCardPopup() {  
 popupPlace.classList.add('popup_opened');
}

function closeCardPopup() {
  popupPlace.classList.remove('popup_opened');
}

//вызовы
addButton.addEventListener('click', openCardPopup);
closePlaceButton.addEventListener('click', closeCardPopup);
formElementCards.addEventListener('submit', addNewPlace);

//добавление фото
function addNewPlace(evt) {
  evt.preventDefault();

  const userCard =  template.querySelector('.element').cloneNode(true);
  userCard.querySelector('.element__title').textContent = placeInput.value;  
  userCard.querySelector('.element__image').src = linkInput.value;

  list.prepend(userCard);
  addListener(userCard);  
  closeCardPopup(); 
  placeInput.value = '';
  linkInput.value = '';
}

function addListener(el) {
  el.querySelector('.element__like').addEventListener('click', handleLike);
  el.querySelector('.element__delete').addEventListener('click', handleDelete);
}

//удаление фото
function handleDelete(event) {
  event.target.closest('.element').remove();
}

//like'и
function handleLike(event) {
 event.target.closest('.element__like').classList.toggle('element__like_active');
}