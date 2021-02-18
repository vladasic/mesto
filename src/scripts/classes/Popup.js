import { escape, popup } from "../utils/contstants.js";
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._closeIcon = this._popupSelector.querySelector(
      ".popup__close-icon-general"
    );

    this._closeIcon.addEventListener("click", () => {
      this.close();
    });

    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === escape) {
      this.close();
    }
  }
}
