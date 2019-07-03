let link = document.querySelector(".contact-button");
let popup = document.querySelector(".modal-text-us");
let close = document.querySelector(".button-close");
let form = popup.querySelector("form");

let yourname = popup.querySelector("[name=your-name]");
let email = popup.querySelector("[name=e-mail]");
let letter = popup.querySelector("[name=letter-text]");

let storage = "";
let isStorageSupport = true;

try {
    storage = localStorage.getItem("yourname");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        yourname.value = storage;
        email.focus();
    } else {
        yourname.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!yourname.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("yourname", yourname.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
