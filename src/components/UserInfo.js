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

<<<<<<< HEAD
<<<<<<< HEAD
  setUserInfo (data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.job;
=======
  setUserInfo ({name, job}) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
>>>>>>> parent of 3e2bd8d (Updates)
=======
  setUserInfo ({name, job}) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
>>>>>>> parent of 3e2bd8d (Updates)
  }
}