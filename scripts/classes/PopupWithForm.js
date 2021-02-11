import { Popup } from './Popup.js'
import { popupContainer } from '../utils/contstants.js'


export class PopupWithForm extends Popup {
    constructor({ getInputsValues, handleFormSubmit }, popupSelector, form) {
        super(popupSelector);
        this._getInputsValues = getInputsValues;
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._form = form;
    }


    _handleFormSubmits() {
        return this._handleFormSubmit()
    }
    _getInput() {
        return this._getInputsValues()
    }

    setEventListeners() {
        this._form.addEventListener('submit', () => {
            console.log('this')
              this._handleFormSubmits(this._getInput());
        });

        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset()

    }
}










// export class PopupWithForm extends Popup{
//     constructor({getInputsValues},popupSelector){ //_getInputsValues это функция которая через кард узнаёт занчения 
//         super(popupSelector);
//         this._getInputsValues = getInputsValues;
//         // this._clickSubmitForm = clickSubmitForm;
//         this._popupSelector = popupSelector;
//     }
//     _getInputValues(){
//         return this._getInputsValues //cобирает все значения формы
//     }
//     open(){
//         super.open();
//         this._getInputValues();
//     }
//     close(){
//         super.close();
//         const formTypeAddImage = document.forms.formImg;
//         formTypeAddImage.reset()
//     }
    // submitForm(){
    //    const addCardButton = document.querySelector('.popup__button-add-image')
    //     addCardButton.addEventListener('click', ()=>{
    //         this._getInputValues()
    //     } );
    // } 
    // setEventListeners(){
    //     this._getInputValues()
    //     super.setEventListeners()
    //     console.log('ya pokakal')
    // }



    // const card = new Card(inputTitle.value, inputLink.value, templateElement);
// }




























//ниже забракованный метод создания
// export class PopupWithForm extends Popup{
//     constructor({submit},popupSelector, formName,formSurname){
//         super(popupSelector)
//         this._submit = submit;
//         this._formName = formName;
//         this._formSurname = formSurname
//     }
//     _getInputValues(){ //должен принимать значения полей формы
//         const title = document.querySelector('.popup__image-text_for_full');
//         const subttitle = document.querySelector('.popup__image-opened_full');
//         //выше мы определили две константы которые отвечают за текст под большой картинкой,   
//         //и изображение в большой картинке

//         return this._formName.value = title.textContent,
//         this._formSurname.value = subttitle.src;

//         //тут написано вернуть значение переменной верхней формы = значению константы которая отвечает за текст под большой картинкой
//         //ниже, значение переменной нижней формы = картинке
//     }

//     getSubmitForm(){

//         return this._submit
//         //вернуть значение которое мы подставляем в script.js , сейчас тут равно = 
//         //addCardButton.addEventListener('submit', popupWithFormTwo.setEventListener(), console.log(popupWithFormTwo.setEventListener()))}
//         //баттон, при сабмите , подставляет эту же самую функцию которую мы прописываем тут ,странно
//     }
//     setEventListeners(){
//         super.setEventListeners()
//         this.getSubmitForm()

//         // наследуем закрытие через крестикБ и через Esc
//         //вторая формула гласит то что я писал выше
//         //должен добавлять обработчик сабмита формы, по идее сабмит теперь можно вызвать только от сюда 

//     }
//     close(){
//         super.close();
//         this._getInputValues.disabled === true

//         //наследауем клоус, удалять у класслиста попапселекторж
//         //по идеи значения гед должны становиться дизейблед.

//     }

// }


// export class PopupWithImage extends Popup{
//     constructor({addNewItem},popupSelector){
//         super(popupSelector);
//         this._addNewItem = addNewItem;
//         this._popupSelector = popupSelector
//     }
//     open(){
//         super.open()
//         this.addNewItems()
//     }
//     addNewItems(){
//        return  this._addNewItem()
//     }
// }


// export class UserInfo{
//     constructor({name, info},profileTitle,profileSubttitle){
//       this._name = name;
//       this._info = info;
//       this._profileTitle =profileTitle;
//       this._profileSubttitle = profileSubttitle
//     }

//     getUserInfo(){
//       return this._name.value = this._profileTitle.textContent,
//       this._info.value = this._profileSubttitle.textContent;
//     }

//     setUserInfo(){
//       this._profileTitle.textContent = this._name.value;
//       this._profileSubttitle.textContent = this._info.value;
//     }
//   }

//   function handleEditProfileFormSubmi(event) {
//       event.preventDefault();
//       profileTitle.textContent = inputName.value;
//       profileSubttitle.textContent = inputProfession.value;
//       closePopupF();
//   }


    // const  handleEditProfile = new PopupWithForm({
    //     submit: ()=>{ popupContainer.addEventListener('submit', handleEditProfile.setEventListener())},
    //     formName: inputName, formSurname:inputProfession},
    //      popupEditUserProfile,
    //       profileTitle,
    //        profileSubttitle)

    //        handleEditProfile.setEventListener








// export class PopupWithForm extends Popup{
//     constructor({submit,formName,formSurname},popupSelector,title,subttitle){
//         super(popupSelector)
//         this.popupSelector = popupSelector;

//         this._submit = submit;
//         this._formName = formName;
//         this._formSurname = formSurname;
//         this.title = title;
//         this.subttitle = subttitle;
//     }
//     _getSubmitForm(event){
//         event.preventDefault();
//         return this._submit
//     }

//     _getInputValues(){
//         return this._formName.value = this.title.textContent,
//         this._formSurname.value = this.subttitle.textContent;
//     }
//     setEventListener(){
//         super.setEventListener();
//             this._title.textContent = this._formName.value;
//             this._profileSubttitle.textContent = this._formSurname.value;
//         // метод setEventListeners класса PopupWithForm  должен не только добавлять обработчик клика иконке закрытия, 
//         //но и добавлять обработчик саюмита формы.
//     }

//     close(){
//         super.close();
//         this._getInputValues.reset()
//         //перезаписывает этот метод при закрытии попапа форма должна ещё и сбрасываться
//     }
// }

// setUserInfo(){
    //     this._profileTitle.textContent = this._name.value;
    //     this._profileSubttitle.textContent = this._info.value;
    //   }

//Для каждого попапа создавайте свой экземпляр класса PopupWithForm.