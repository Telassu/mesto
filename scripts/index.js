let addButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.close-button');
let saveButton = document.querySelector('.popup__save-button');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__count_name');
let jobInput = document.querySelector('.popup__count_description');

function openPopup(addButton) {
  popup.classList.add('popup_opened');
  console.log(openPopup);
}

addButton.addEventListener('click', openPopup);

function closePopup(closeButton) {
  popup.classList.remove('popup_opened');
  console.log(closePopup);
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  
}