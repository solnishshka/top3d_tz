import './index.css'

const searchElement = document.querySelector('.header__search')
const logo = document.querySelector('.header__logo');
const headerTitle = document.querySelector('.header__title');
const searchButton = document.querySelector('.button_type_search-icon')
const topMenu = document.querySelector('.menu_type_top')
const openMenuSelector = 'menu_open'
const menuButton = document.querySelector('.button_type_menu')
const menuIcon = document.querySelector('.fa')
const menuButtonClass = 'fa-bars'
const menuCloseButtonClass = 'fa-times'

function handleToggleMenu() {
  topMenu.classList.toggle(openMenuSelector)
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove(menuButtonClass)
    menuIcon.classList.add(menuCloseButtonClass)
  } else {
    menuIcon.classList.add(menuButtonClass)
    menuIcon.classList.remove(menuCloseButtonClass)
  }
}

function handleToggleSearch() {
  searchElement.classList.toggle('header__search_visible')
  logo.classList.toggle('header__logo_invisible');
  menuButton.classList.toggle('button_invisible');
  headerTitle.classList.toggle('header__title_invisible');
}

menuButton.addEventListener('click', () => {
  handleToggleMenu()
})

searchButton.addEventListener('click', () => {
  handleToggleSearch()
})
