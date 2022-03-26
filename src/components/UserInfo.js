export class UserInfo {
  constructor (nameElement, jobElement) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
  };

  getUserInfo () {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
  };

  setUserInfo (data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.job;
  }
}