(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("ERROR! => ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkRes)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkRes)}},{key:"editNewAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkRes)}},{key:"editNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(this._checkRes)}},{key:"putLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"6e47bbc5-5375-4cf6-9e12-9c6c5520d107","Content-Type":"application/json"}});function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i){var a=i.handleDeleteClick,c=i.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._ownerID=t.owner._id,this._userID=n,this._likes=t.likes,this._cardSelector=r,this._handleCardClick=o,this._handleDeleteClick=a,this._handleLikeClick=c}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__like-counter"),this.setLikes(this._likes),this._deleteButton=this._element.querySelector(".element__delete"),this._userID!==this._ownerID&&(this._deleteButton.style.display="none"),this._setEventListeners(),this._cardTitle.textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._element}},{key:"isLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userID}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length,this.isLike()?this._likeButton.classList.add("element__like_active"):this._likeButton.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"handleCardDelete",value:function(){this._element.remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._submitButton=this._form.querySelector(".popup__save-button"),this._inputList=Array.from(this._form.querySelectorAll(".popup__input"))}var t,n;return t=e,(n=[{key:"_showErrorValid",value:function(e,t){var n=this._form.querySelector(".".concat(e.name,"-input-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideErrorValid",value:function(e){var t=this._form.querySelector(".".concat(e.name,"-input-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValid",value:function(e){e.validity.valid?this._hideErrorValid(e):this._showErrorValid(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._submitButton.setAttribute("disabled",""):this._submitButton.removeAttribute("disabled")}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValid(t),e._toggleButtonState()}))}))}},{key:"cleanInput",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideErrorValid(t),t.value=""}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){e._handleClickClose(t)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupSelector.querySelector(".imageView__image"),t._caption=t._popupSelector.querySelector(".imageView__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){p(_(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popupSelector.querySelector(".popup__form"),n._formButton=n._form.querySelector(".popup__save-button"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonText=n._formButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._formButton.textContent=e?"Сохранение...":this._buttonText}},{key:"setEventListeners",value:function(){var e=this;k(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){k(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formDelete=n._popupSelector.querySelector(".popup__form_delete"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"callbackSubmitForm",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;R(q(a.prototype),"setEventListeners",this).call(this),this._formDelete.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B,x=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=t,this._jobElement=n,this._avatarElement=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._jobElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e.avatar}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=document.querySelector(".profile__edit-button"),V=document.querySelector(".popup_profile"),U=document.querySelector(".popup__form_profile"),N=U.querySelectorAll(".popup__input"),F=U.querySelector(".popup__input_type_name"),J=U.querySelector(".popup__input_type_description"),H=document.querySelector(".profile-info__name"),M=document.querySelector(".profile-info__description"),z=document.querySelector(".elements__list"),$=document.querySelector(".profile__add-button"),G=document.querySelector(".popup__form_element"),K=G.querySelectorAll(".popup__input"),Q=document.querySelector(".popup_element"),W=document.querySelector(".imageView"),X=document.querySelector(".popup_avatar"),Y=document.querySelector(".popup__form_avatar"),Z=Y.querySelector(".popup__input"),ee=document.querySelector(".profile__avatar"),te=document.querySelector(".profile__avatar-button"),ne=document.querySelector(".popup_delete");function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=new x(H,M,ee);function ie(e){var n=new r(e,B,".element__template",ye,{handleDeleteClick:function(e){de.open(),de.callbackSubmitForm((function(){t.deleteCard(e).then((function(e){return n.handleCardDelete()})).then(de.close()).catch((function(e){console.log("ERROR! =>",e)}))}))},handleLikeClick:function(e){n.isLike()?t.deleteLikeCard(e).then((function(e){return n.setLikes(e.likes)})).catch((function(e){console.log("ERROR! =>",e)})):t.putLikeCard(e).then((function(e){return n.setLikes(e.likes)})).catch((function(e){console.log("ERROR! =>",e)}))}});return e.owner={},e.owner._id=B,n.generateCard()}Promise.all([t.getUserInfo(),t.getInitialCards(B)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];B=o._id,oe.setUserInfo(o),oe.setUserAvatar(o),i.forEach((function(e){var t=ie(e);ae.addItem(t)}))})).catch((function(e){console.log("ERROR! =>",e)}));var ae=new c({data:[],renderer:function(e){var t=ie(e);ae.addItem(t)}},z),ce=new i(N,U);ce.enableValidation();var ue=new i(K,G);ue.enableValidation();var le=new i(Z,Y);le.enableValidation();var se=new O(V,(function(e){se.renderLoading(!0),t.editUserInfo(e).then((function(t){oe.setUserInfo({name:e.name,about:e.description}),se.close()})).catch((function(e){console.log("ERROR! =>",e)})).finally((function(){se.renderLoading(!1)}))}));se.setEventListeners();var fe=new O(Q,(function(e){fe.renderLoading(!0),t.editNewCard(e).then((function(e){ae.addItem(ie(e)),fe.close()})).catch((function(e){console.log("ERROR! =>",e)})).finally((function(){fe.renderLoading(!1)}))}));fe.setEventListeners();var pe=new v(W);pe.setEventListeners();var he=new O(X,(function(e){he.renderLoading(!0),t.editNewAvatar(e).then((function(t){oe.setUserAvatar({avatar:e.avatar}),he.close()})).catch((function(e){console.log("ERROR! =>",e)})).finally((function(){he.renderLoading(!1)}))}));he.setEventListeners();var de=new T(ne);function ye(e,t){pe.open(e,t)}de.setEventListeners(),A.addEventListener("click",(function(){ce.cleanInput(),se.open();var e=oe.getUserInfo();F.value=e.name,J.value=e.about})),$.addEventListener("click",(function(){ue.cleanInput(),fe.open()})),te.addEventListener("click",(function(){le.cleanInput(),he.open()})),ae.rendererItems()})();