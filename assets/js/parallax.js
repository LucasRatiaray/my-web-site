/* ************************ */
/* PARALLAX
/* ************************ */
class Parallax {
  constructor(selector, offset) {
    this.element = document.querySelector(selector);
    this.offset = offset;
    this.update();
    window.addEventListener("scroll", this.update.bind(this));
  }

  update() {
    const offset = window.pageYOffset;
    const sectionTop = this.element.offsetTop;
    const windowHeight = window.innerHeight;
    const sectionHeight = this.element.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (sectionTop < offset + windowHeight && sectionBottom > offset) {
      const backgroundPositionY = (offset - sectionTop) * this.offset;
      this.element.style.backgroundPosition = `center ${backgroundPositionY}px`;
    } else {
      this.element.style.backgroundPosition = '';
    }
  }
}
/* ************************ */
/* PARALLAX ZOOM
/* ************************ */
class ParallaxZoom {
  constructor(selector, offset, zoom) {
    this.element = document.querySelector(selector);
    this.offset = offset;
    this.zoom = zoom;
    this.update();
    window.addEventListener("scroll", this.update.bind(this));
  }

  update() {
    const offset = window.pageYOffset;
    const sectionTop = this.element.offsetTop;
    const windowHeight = window.innerHeight;
    const sectionHeight = this.element.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (sectionTop < offset + windowHeight && sectionBottom > offset) {
      const backgroundPositionY = (offset - sectionTop) * this.offset;
      const scale = 1 + ((offset - sectionTop) / windowHeight) * this.zoom;
      if(scale >= 1){
          this.element.style.transform = `scale(${scale})`;
      }
      this.element.style.backgroundPosition = `center ${backgroundPositionY}px`;
    } else {
      this.element.style.transform = '';
      this.element.style.backgroundPosition = '';
    }
  }
}