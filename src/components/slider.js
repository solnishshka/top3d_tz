import { slides } from '../utils/data'

export default class Slider {
  constructor(index) {
    this.index = index
  }

  renderSlides() {
    let isDesktop = window.innerWidth > 768

    if (this.index > slides.length) {
      this.index = 1
    }
    if (this.index < 1) {
      this.index = slides.length - 1
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[this.index - 1].style.display = 'list-item'

    if (isDesktop) {
      this.index =
        this.index < 0
          ? slides.length - 1
          : this.index >= slides.length
          ? 0
          : this.index
      slides[this.index].style.display = 'list-item'
    }
  }

  nextSlide() {
    this.index += 1
    this.renderSlides()
  }
  prevSlide() {
    this.index -= 1
    this.renderSlides()
  }
}
