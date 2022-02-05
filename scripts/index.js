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
const popup = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.profile__edit-button');
const popupProfileClose = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('.popup_profile');
const formElement = document.querySelector('.popup__form_profile');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
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
const popupimageView = document.querySelector('.popup_imageView');
const popupImageClose = document.querySelector('.popup__close-button_imageView');
const imageOnClick = document.querySelector('.imageView__image');
const imageTextOnClick = document.querySelector('.imageView__caption');

//функции

//открытие и закрытие попапов 

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
  openPopup(popupProfile);
}

//изменение профиля
function submitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

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

//добавление фото
function addNewPlace(evt) {
  evt.preventDefault();

  const userCard =  template.querySelector('.element').cloneNode(true);
  userCard.querySelector('.element__title').textContent = placeInput.value;
  userCard.querySelector('.element__image').src = linkInput.value;
  userCard.querySelector('.element__image').alt = placeInput.value;

  list.prepend(userCard);
  addListener(userCard);
  closePopup(popupElement); 
  placeInput.value = '';
  linkInput.value = '';
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
function openImage (e) {
  const cardImg = e.target.closest('.element__image');
    imageOnClick.src = cardImg.src;
    imageOnClick.alt = cardImg.alt;
    imageTextOnClick.textContent = cardImg.alt;
   
    openPopup(popupimageView);
}

//вызовы

popupProfileEdit.addEventListener('click', openProfilePopup);
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
formElement.addEventListener('submit', submitHandler);
popupElementAdd.addEventListener('click', () => openPopup(popupElement));
popupElementClose.addEventListener('click', () => closePopup(popupElement));
formElementCards.addEventListener('submit', addNewPlace);
popupImageClose.addEventListener('click', () => closePopup(popupimageView));

render();