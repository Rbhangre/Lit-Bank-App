import { LitElement, html, css } from 'lit';

class CardSVG extends LitElement {
    static styles = css`
    .icon {
      width: 24px; /* Set width */
      height: 24px; /* Set height */
      fill: #FFF; /* Set fill color */
      margin-right: 10px;
    }
  `;

  render() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/></svg>`;
  }
}

customElements.define('card-svg', CardSVG);
