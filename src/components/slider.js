import { slides } from '../utils/data'

export default class Slider {
  constructor(index) {
    this.index = index
  }

  renderSlides() {
    let isDesktop = window.innerWidth > 768

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[this.index].style.display = 'list-item'

    if (isDesktop) {
      let index = this.index + 1 >= slides.length ? 0 : this.index + 1
      slides[index].style.display = 'list-item'
    }
  }

  nextSlide() {
    this.index = this.index + 1 >= slides.length ? 0 : this.index + 1
    this.renderSlides()
  }
  prevSlide() {
    this.index = this.index - 1 < 0 ? slides.length - 1 : this.index - 1
    this.renderSlides()
  }
}
