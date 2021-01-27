import './index.css';

const topMenu = document.querySelector('.menu_type_top');
const openMenuSelector = 'menu_open';
const menuButton = document.querySelector('.button_type_menu');
const menuIcon = document.querySelector('.fa');
const menuButtonClass = 'fa-bars';
const menuCloseButtonClass = 'fa-times';

function handleOpenMenu(){
    topMenu.classList.toggle(openMenuSelector);
    if (menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.remove(menuButtonClass);
    menuIcon.classList.add(menuCloseButtonClass);
    }
    else {
        menuIcon.classList.add(menuButtonClass);
        menuIcon.classList.remove(menuCloseButtonClass);
    }
}

menuButton.addEventListener('click', () => {
    handleOpenMenu();
})

