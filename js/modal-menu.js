const btnMenuOpen = document.querySelector('.menu-btn-open');
const btnMenuClose = document.querySelector('.menu-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileListLink = document.querySelectorAll('.mobile-menu__item');


function toggleMenu () {
   mobileMenu.classList.toggle('is-hidden');
}

btnMenuOpen.addEventListener('click', toggleMenu);
btnMenuClose.addEventListener('click', toggleMenu);

for (let link of mobileListLink) {
   link.addEventListener('click', toggleMenu)
}