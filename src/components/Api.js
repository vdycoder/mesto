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

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getInitialCards() {
    return this._request(this._options.baseUrl + '/cards', {
      headers: this._options.headers
    })
  }

  getUserInfo() {
    return this._request(this._options.baseUrl + '/users/me', {
      headers: this._options.headers
    })
  }

  updateUserInfo({userName, userAbout}) {
    return this._request(this._options.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    })
  }

  postCard(item) {
    return this._request(this._options.baseUrl + '/cards', {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
  }

  deleteCard(cardId) {
    return this._request(this._options.baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._options.headers,
    })
  }

  addLike(cardId) {
    return this._request(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: this._options.headers,
    })
  }

  deleteLike(cardId) {
    return this._request(this._options.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: this._options.headers,
    })
  }

  updateAvatar({ userAvatar }) {
    return this._request(this._options.baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: userAvatar
      })
    })
  }

}
