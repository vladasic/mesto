export class Card {
    constructor(name, link, elementTemplate) {
        this._link = link;
        this._name = name;
        this._elementTemplate = elementTemplate;
    }

    _getClonedTemplate() {
        return this._elementTemplate.content.cloneNode(true);
    }

    _setEventListener() {
        this._elementImage.addEventListener('click', () => {
            this._toggleBigPopup();

        });

        this._elementButton.addEventListener('click', () => {
            this._addElementBlackIcons();
        });

        this._elementTrash.addEventListener('click', () => {
            this._removeElement()
        });

    }

    _addElementBlackIcons() {
        this._elementButton.classList.toggle('element__button_add_black-icon');
    }



    _toggleBigPopup() {
        this._popupBig = document.querySelector('.popup_big_img')
        this._imageText = document.querySelector('.popup__image-text_for_full')
        this._imageFull = document.querySelector('.popup__image-opened')

        this._imageFull.src = this._elementImage.src;
        this._imageText.textContent = this._elementText.textContent;
        this._imageFull.alt = this._imageText.textContent;

        this._popupBig.classList.toggle('popup_opened')
    }

    _removeElement() {
        this._allElement = document.querySelector('.element');
        this._allElement.remove();


    }

    _createCard() {
        this._element = this._getClonedTemplate();
        this._elementText = this._element.querySelector('.element__text');
        this._elementImage = this._element.querySelector('.element__img');
        this._elementButton = this._element.querySelector('.element__button');
        this._elementButtonBlackIcon = this._element.querySelector('.element__button_add_black-icon');
        this._elementTrash = this._element.querySelector('.element__trash');


        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementText.textContent = this._name;

        this._setEventListener()
        return this._element;
    }
}

