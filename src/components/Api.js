export default class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(this._options.baseUrl + '/cards', {
      headers: this._options.headers
    })
      .then(res => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(this._options.baseUrl + '/users/me', {
      headers: this._options.headers
    })
    .then(res => this._checkResponse(res));
  }

  updateUserInfo({userName, userAbout}) {
    return fetch(this._options.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    })
    .then(res => this._checkResponse(res));
  }

  postCard(item) {
    return fetch(this._options.baseUrl + '/cards', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(res => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(res => this._checkResponse(res));
  }

  addLike(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: this._options.headers,
    })
    .then(res => this._checkResponse(res));
  }

  deleteLike(cardId) {
    return fetch(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(res => this._checkResponse(res));
  }

  updateAvatar({ userAvatar }) {
    return fetch(this._options.baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: userAvatar
      })
    })
    .then(res => this._checkResponse(res));
  }

}
