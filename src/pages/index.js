import './index.css'
import {
  prevButton,
  nextButton,
  searchElement,
  logo,
  headerTitle,
  searchButton,
  topMenu,
  openMenuSelector,
  menuButton,
  menuIcon,
  menuButtonClass,
  menuCloseButtonClass,
} from '../utils/data'

import Slider from '../components/slider'

const imageSlider = new Slider(0)

imageSlider.renderSlides()

prevButton.addEventListener('click', () => {
  imageSlider.prevSlide()
})

nextButton.addEventListener('click', () => {
  imageSlider.nextSlide()
})

window.addEventListener('resize', () => {
  imageSlider.renderSlides()
})

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
  logo.classList.toggle('header__logo_invisible')
  menuButton.classList.toggle('button_invisible')
  headerTitle.classList.toggle('header__title_invisible')
}

menuButton.addEventListener('click', () => {
  handleToggleMenu()
})

searchButton.addEventListener('click', () => {
  handleToggleSearch()
})
