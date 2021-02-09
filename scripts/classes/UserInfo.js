<<<<<<< HEAD
export class UserInfo{
    constructor({name, info},profileTitle,profileSubttitle){
      this._name = name;
      this._info = info;
      this._profileTitle =profileTitle;
      this._profileSubttitle = profileSubttitle
    }
  
    getUserInfo(){
      return this._name.value = this._profileTitle.textContent,
      this._info.value = this._profileSubttitle.textContent;
    }
  
    setUserInfo(){
      this._profileTitle.textContent = this._name.value;
      this._profileSubttitle.textContent = this._info.value;
    }
  }
  
=======
export class UerInfo{
  constructor({name, info}){
    this._name = name;
    this._info = info;
  }

  getUserInfo(){

  }
}
>>>>>>> b0a972e66248983a3ff2b58527de8614a1f8bc01
