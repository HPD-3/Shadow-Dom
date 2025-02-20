class ImageFigure extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <figure>
        <img src="src/Building.jpg" alt="Building" width="200" />
        <figcaption>This is a cool Building</figcaption>
      </figure>
    `;
  }
}

customElements.define('image-figure', ImageFigure);
