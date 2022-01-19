let addButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.close-button');
let saveButton = document.querySelector('.popup__save-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__count_name');
let jobInput = document.querySelector('.popup__count_description');
let profileName = document.querySelector('.profile-info__name');
let profileJob = document.querySelector('.profile-info__description')

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
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened'); 
  console.log(formSubmitHandler);  
}

console.log(nameInput.value);

formElement.addEventListener('submit', formSubmitHandler);
