const modalBackdrop = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

function modalToggle () {
   modalBackdrop.classList.toggle('is-open-window');
};

modalBtnOpen.addEventListener('click', modalToggle);
modalBtnClose.addEventListener('click', modalToggle);
