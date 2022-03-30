export const initialCards = [
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
  
  export const popupProfileEdit = document.querySelector('.profile__edit-button');
  export const popupProfile = document.querySelector('.popup_profile');
  export const formProfile = document.querySelector('.popup__form_profile');
  export const inputProfileList = formProfile.querySelectorAll('.popup__input');
  export const nameInput = formProfile.querySelector('.popup__input_type_name');
  export const jobInput = formProfile.querySelector('.popup__input_type_description');
  export const profileName = document.querySelector('.profile-info__name');
  export const profileJob = document.querySelector('.profile-info__description');
  export const cardListSection = document.querySelector('.elements__list');
  export const popupCardAddBtn = document.querySelector('.profile__add-button');
  export const formCards = document.querySelector('.popup__form_element');
  export const inputCardList = formCards.querySelectorAll('.popup__input');
  export const popupCard = document.querySelector('.popup_element');
  export const popupimageView = document.querySelector('.imageView');  