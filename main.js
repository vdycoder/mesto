(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t}var r,n;return r=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._options.baseUrl+"/cards",{headers:this._options.headers}).then(_checkResponse(res))}},{key:"getUserInfo",value:function(){return fetch(this._options.baseUrl+"/users/me",{headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(e){var t=e.userName,r=e.userAbout;return fetch(this._options.baseUrl+"/users/me",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:t,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch(this._options.baseUrl+"/cards",{method:"POST",headers:this._options.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch(this._options.baseUrl+"/cards/"+e,{method:"DELETE",headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch(this._options.baseUrl+"/cards/"+e+"/likes",{method:"PUT",headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch(this._options.baseUrl+"/cards/"+e+"/likes",{method:"DELETE",headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){var t=e.userAvatar;return fetch(this._options.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var u=function(){function e(t,r){var n,o,u,a=this,c=t.item,s=t.cardTemplate,l=t.handleCardClick,f=t.handleTrashButtonClick,p=t.handleLikeButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,u=function(){a._handleCardClick(a._cardCaption.textContent,a._cardImage.src)},(o=i(o="_handleImageClick"))in n?Object.defineProperty(n,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):n[o]=u,this._item=c,this._likes=c.likes,this._handleCardClick=l,this._handleTrashButtonClick=f,this._handleLikeButtonClick=p,this._cardElement=s.querySelector(r.item).cloneNode(!0),this._cardCaption=this._cardElement.querySelector(r.caption),this._cardImage=this._cardElement.querySelector(r.image),this._cardButtonTrash=this._cardElement.querySelector(r.buttonTrash),this._cardButtonLike=this._cardElement.querySelector(r.buttonLike),this._cardLikesCount=this._cardElement.querySelector(r.likesCount),this._buttonLike_active=r.buttonLike_active}var t,r;return t=e,(r=[{key:"createCard",value:function(e){return this._setEventListners(),this._userId=e,this._item.owner._id!=this._userId&&this._cardButtonTrash.remove(),this._cardCaption.textContent=this._item.name,this._cardImage.src=this._item.link,this._cardImage.alt=this._item.name,this._cardElement.setAttribute("id",this._item._id),this.setLikes(this._item.likes),this._cardElement}},{key:"_isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._cardLikesCount.textContent=this._likes.length,this._isLiked()?this._cardButtonLike.classList.add(this._buttonLike_active):this._cardButtonLike.classList.remove(this._buttonLike_active)}},{key:"_setEventListners",value:function(){var e=this;this._cardButtonTrash.addEventListener("click",(function(t){e._handleTrashButtonClick(t,e._item._id)})),this._cardButtonLike.addEventListener("click",(function(t){e._handleLikeButtonClick(t,e,e._item._id,e._isLiked())})),this._cardImage.addEventListener("click",this._handleImageClick)}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=u;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var l=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}const y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._formFields=Array.from(r.querySelectorAll(t.fieldSelector)),this._buttonSubmit=r.querySelector(t.submitSelector),this._errorSelectorPrefix=t.errorSelectorPrefix,this._invalidFieldClass=t.invalidFieldClass}var t,r;return t=e,(r=[{key:"_focusHandler",value:function(e){e.select()}},{key:"_toggleFormSubmit",value:function(e){e.disable?this._buttonSubmit.removeAttribute("disabled"):this._buttonSubmit.setAttribute("disabled","disabled")}},{key:"_checkFormValidity",value:function(){this._toggleFormSubmit({disable:!0});var e=this._formFields.every((function(e){return e.validity.valid}));return e||this._toggleFormSubmit({disable:!1}),e}},{key:"_setFieldError",value:function(e,t,r){var n=r.validationMessage,o=r.valid,i=r.invalidFieldClass;t.textContent=n,o?e.classList.remove(i):e.classList.add(i)}},{key:"_checkFieldValidity",value:function(e,t,r){var n=e.validationMessage,o=e.validity.valid,i={validationMessage:n,valid:o,invalidFieldClass:r};return this._setFieldError(e,t,i),o}},{key:"_setEventListners",value:function(){var e=this;this._formFields.forEach((function(t){var r=".".concat(e._errorSelectorPrefix+t.name),n=e._form.querySelector(r);t.addEventListener("input",(function(t){var r=t.target;e._checkFormValidity(),e._checkFieldValidity(r,n,e._invalidFieldClass)})),t.addEventListener("focus",e._focusHandler(t))})),this._form.addEventListener("click",(function(e){return e.stopPropagation()}))}},{key:"enableValidation",value:function(){this._setEventListners()}},{key:"resetFormErrors",value:function(e){var t=this,r=e.disable;this._toggleFormSubmit({disable:r}),this._formFields.forEach((function(e){var r=".".concat(t._errorSelectorPrefix+e.name);t._form.querySelector(r).textContent="",e.classList.remove(t._invalidFieldClass)}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__btn-close"),this._handleEscape=this._handleEscape.bind(this)}var t,r;return t=e,(r=[{key:"_handleEscape",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscape)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b={template:"#element_template",list:".elements__list",item:".elements__item",caption:".elements__caption",image:".elements__image",buttonTrash:".elements__trash-button",buttonLike:".elements__like-button",buttonLike_active:"elements__like-button_active",likesCount:".elements__likes-count"},v={formSelector:".popup__form",fieldSelector:".popup__input",submitSelector:".popup__btn-save",invalidFieldClass:"popup__input_invalid",errorSelectorPrefix:"popup__input-error_field_"},_=document.forms.profile,g=document.forms.place,S=document.forms.avatar,k=document.querySelector(".profile__btn-edit"),w=document.querySelector(".profile__btn-add"),E=document.querySelector(".profile__btn-avatar"),j=document.querySelector(b.template).content;function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(r=[{key:"open",value:function(e,t){L(I(u.prototype),"open",this).call(this),this._popupImage.setAttribute("src",t),this._popupImage.setAttribute("alt",e),this._popupCaption.textContent=e}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},F.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(v.formSelector),r._inputs=Array.from(r._form.querySelectorAll(v.fieldSelector)),r._submitButton=r._popup.querySelector(v.submitSelector),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.id]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;F(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){F(q(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},N.apply(this,arguments)}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(n);if(o){var r=H(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(v.formSelector),r._submitButton=r._popup.querySelector(v.submitSelector),r}return t=u,(r=[{key:"open",value:function(e){N(H(u.prototype),"open",this).call(this),this._submitButton.setAttribute("value",e)}},{key:"close",value:function(){N(H(u.prototype),"close",this).call(this),this._submitButton.setAttribute("value","")}},{key:"setEventListeners",value:function(){var e=this;N(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._submitButton.value)}))}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var G=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(n),this._userId=""}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){var e={};return e.name=this._userName.textContent,e.about=this._userAbout.textContent,e._id=this._userId,e}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userAbout,n=e.userAvatar,o=e.userId;this._userName.textContent=t,this._userAbout.textContent=r,this._userAvatar.src=n,this._userId=o}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),K={};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var r=new y(e,t),n=t.getAttribute("name");K[n]=r,r.enableValidation()}))}(v);var Q=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"d5678923-2b42-42e3-bf9c-7ef2ba66b460","Content-Type":"application/json"}}),W=new G(".profile__name",".profile__about",".profile__avatar");Q.getUserInfo().then((function(e){W.setUserInfo({userName:e.name,userAbout:e.about,userAvatar:e.avatar,userId:e._id})})).catch((function(e){console.log(e)}));var X=new x(".popup_type_edit-profile",(function(e,t){e.preventDefault(),X.renderLoading(!0),Q.updateUserInfo({userName:t.name,userAbout:t.about}).then((function(e){W.setUserInfo({userName:e.name,userAbout:e.about,userAvatar:e.avatar,userId:e._id}),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))}));X.setEventListeners();var Y=new x(".popup_type_edit-avatar",(function(e,t){e.preventDefault(),Y.renderLoading(!0),Q.updateAvatar({userAvatar:t.avatar_image}).then((function(e){W.setUserInfo({userName:e.name,userAbout:e.about,userAvatar:e.avatar,userId:e._id}),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.renderLoading(!1)}))}));Y.setEventListeners();var Z=new x(".popup_type_add-card",(function(e,t){e.preventDefault(),Z.renderLoading(!0);var r={name:t.caption,link:t.image};Q.postCard(r).then((function(e){re.addItem(te(e)),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}));Z.setEventListeners();var $=new T(".popup_type_show-image");$.setEventListeners();var ee=new J(".popup_type_delete-card",(function(e,t){e.preventDefault(),Q.deleteCard(t).then((function(e){console.log(e.message),ee.close(),document.getElementById(t).remove()})).catch((function(e){console.log(e)}))}));function te(e){return new a({item:e,cardTemplate:j,handleCardClick:ne,handleTrashButtonClick:oe,handleLikeButtonClick:ie},b).createCard(W.getUserInfo()._id)}ee.setEventListeners();var re=new l(te,b.list);function ne(e,t){$.open(e,t)}function oe(e,t){e.preventDefault(),ee.open(t)}function ie(e,t,r,n){e.preventDefault(),n?Q.deleteLike(r).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):Q.addLike(r).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}Q.getInitialCards().then((function(e){re.renderItems(e)})).catch((function(e){console.log(e)})),k.addEventListener("click",(function(e){e.preventDefault(),K.profile.resetFormErrors({disable:!0}),X.setInputValues(W.getUserInfo()),_.name.focus(),X.open()})),w.addEventListener("click",(function(e){e.preventDefault(),K.place.resetFormErrors({disable:!1}),g.caption.focus(),Z.open()})),E.addEventListener("click",(function(e){e.preventDefault(),K.avatar.resetFormErrors({disable:!1}),S.image.focus(),Y.open()}))})();