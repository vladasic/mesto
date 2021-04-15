import "./index.css"
import { Card } from '../scripts/components/Card.js'
import { initialCards,validateConfigEditForm,
    validateConfigAddCard,renderLoading } from '../scripts/utils/utils.js'
import { FormValidator } from '../scripts/components/FormValidator.js'
import { Section } from '../scripts/components/Section.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { PopupWthForm } from '../scripts/components/PopupWithForm.js';
import {openEditProfileButton,popupEditUserProfile,popupContainer,popupAddImage,openAddCardPopupButton,
    popupToggleBigImage,closeImageButton,imageFull,imageText,popupFormAdd,popupButtonAddImage,formSumbit,formSubmitName,formSubmitProff,
    buttonSubmit,isActiveEditForm,formAddCard,formAddCardName,formAddCardLink,buttonAddCard,isActiveAddCardForm,popupChangeAvatar,
    formEditAvater,openEditAvatar,profileAvatar}
     from '../scripts/utils/constatnts.js';
import { Api } from '../scripts/components/Api.js'; 


const api = new Api(`https://mesto.nomoreparties.co/v1/cohort-22`, '58232a31-4e24-43a3-8b98-3fa6f2453c70')
function loadNewCard(){
  Promise.all([
    api.getUserMe(),
    api.getInitialCards()
  ])
  .then((values)=>{    //попадаем сюда когда оба промиса будут выполнены
    const [userData, initialCards] = values
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    initialCards.forEach((card)=>{
                addNewItem(card.name,card.link,card.likes.length,card._id, card.owner._id)
    })
  })
  .catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
    console.log(`${err}- ну ничего страшного, тяу тяу тяу`);
})

}


const userInfo = new UserInfo('profile__title','profile__subtitle','profile__avatar')

//функция рендеринга карточек на странице
const section = new Section({items: initialCards,
    renderer: () =>{
        loadNewCard()
      },
     },
    '.elements');


const openBigImage = new PopupWithImage(popupToggleBigImage)
openBigImage.setEventListeners()
section.renderItems();


const editProfileSubmit = new PopupWthForm({
    handleFormSubmit: (data) =>{
      api.patchUserMe(data["firstname"],data['lastname'])
        .then((info)=>{
          userInfo.setUserInfo(data["firstname"],data['lastname'])
          editProfileSubmit.close()
            })
        .catch((err)=>{
          console.log(`${err} - у нас тут вот такая ошибка, что-то сделай с этим!!`)
        })
        .finally(()=>{
          renderLoading(false,'.popup__buttion-input-edit-form')
        })
        // userInfo.setUserInfo(api.patchUserMe(data["firstname"],data['lastname']));
        // userInfo.setUserInfo(data["firstname"],data['lastname'])
        // editProfileSubmit.close();
        
    }
   },popupEditUserProfile, popupContainer
 );

 editProfileSubmit.setEventListeners();


 openEditProfileButton.addEventListener('click',()=>{
    editProfileSubmit.open()
 })
 
const popupQuestion = document.querySelector('.popup_question')
const popupFormQuestion = document.querySelector('.popup__container_rounding')

function addNewItem(name,link,like,cardId,trash,token){
    const card = new Card({
        handleCardClick: (name, link) =>{
            openBigImage.open(name,link)      
        },
        openDelCard: () =>{
          const popupDelateCard = new PopupWthForm({handleFormSubmit: ()=>{}},popupQuestion,popupFormQuestion)
          popupDelateCard.setEventListeners()
          popupDelateCard.open()
          document.querySelector('.popup__button-question').addEventListener('click',()=>{
            popupDelateCard.close()
          })
        },
        putleLike: () =>{
          api.putLikecard(cardId)
            .then(()=>{
              card.handleIconClick()
            })
            .catch((err)=>{
              console.log(err)
            })
        },
        delLike: () =>{
          api.delLikeCard(cardId)
            .then(()=>{
              card.handleDeleteClick()
            })
            .catch((err)=>{
              console.log(err)
            })
        },
        deleteFullCard: () =>{
          api.delFullCard(cardId)
            .then(()=>{
              card.removeElement()
            })
            .catch((err)=>{
              console.log(err)
            })
        }

    },
    name,
    link,
    like,
    cardId,
    '.template',
    trash,
    'a5da0c289dddedfe7c89724d'
    );
    
    const cardElement = card.generateCard();
    
    section.addItems(cardElement);
}


const popupAddCard = new PopupWthForm({
    handleFormSubmit: (data)=>{
      api.postNewCard(data['firstname'],data['lastname'])
        .then(()=>{
            addNewItem(data['firstname'],data['lastname']);

        })
        .then(()=>{
          popupAddCard.close()
          popupButtonAddImage.classList.add("popup__button_invalid");
          popupButtonAddImage.disabled = true;
        })
        .catch((err)=>
        {console.log(`${err} - у нас тут вот такая ошибка, что-то сделай с этим!!`)
      })
        .finally(()=>{
          renderLoading(false, '.popup__button-add-image')
        })
    }
},popupAddImage, popupFormAdd
);

popupAddCard.setEventListeners()
openAddCardPopupButton.addEventListener('click',()=>{
    popupAddCard.open()
})
const popupEditAvatar = new PopupWthForm({
  handleFormSubmit: (data)=>{
    api.postAvatarMe(data['urlavatar'])
      .then(()=>{
        profileAvatar.src = (data['urlavatar']) 
      })
      .then(()=>{
        popupEditAvatar.close()
      })
      .catch((err)=>
        {console.log(`${err} - у нас тут вот такая ошибка, что-то сделай с этим!!`)
      })
      .finally(()=>{
        renderLoading(false, '.popup__button-avatar')
        // document.querySelector('.popup__button-avatar').textContent = 'Сохранить'
      })
  }
},popupChangeAvatar,formEditAvater
)

popupEditAvatar.setEventListeners()

openEditAvatar.addEventListener('click',()=>{
  popupEditAvatar.open()
})


const editFormValidate = new FormValidator(
    formSumbit,
    formSubmitName,
    buttonSubmit,
    isActiveEditForm,
    validateConfigEditForm
    )
editFormValidate.enableValidation()

const addCardValidate = new FormValidator(
  formAddCard,
  formAddCardName,
  buttonAddCard,
  isActiveAddCardForm,
  validateConfigAddCard
)
addCardValidate.enableValidation()
