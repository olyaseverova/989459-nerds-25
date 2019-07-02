let link = document.querySelector(".text-us-button");
let popup = document.querySelector(".text-us");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
