class Api {
  constructor (options) {
    this._url = options.baseUrl,
    this._headers = options.headers
  }

  _checkRes (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`ERROR! => ${res.status}`)
    }
  }

  getInitialCards() {
    return fetch (`${this._url}/cards`, {headers: this._headers})
    .then (this._checkRes)
  };

  getUserInfo () {
    return fetch (`${this._url}/users/me`, {headers: this._headers})
    .then (this._checkRes)
  };

  editUserInfo (data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description
      })
    })

    .then (this._checkRes)
  }

  editNewAvatar (data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })

    .then (this._checkRes)
  }

  editNewCard (data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.place,
        link: data.link
      })
    })

    .then (this._checkRes)
  }

  putLikeCard (id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })

    .then (this._checkRes)
  }

  deleteLikeCard (id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
  })

  .then (this._checkRes)
  }


  deleteCard (id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
  })

  .then (this._checkRes)
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '6e47bbc5-5375-4cf6-9e12-9c6c5520d107',
    'Content-Type': 'application/json'
  }
});