import { LitElement, html, css } from 'lit';

class CardsPage extends LitElement {
  static properties = {
    cardsData: { type: Array }
  };

  constructor() {
    super();
    this.cardsData = [
      {
        bal: '10,500.00',
        cardNumber: '4255 1020 0088 9587',
        validFrom: '01/25',
        validTo: '01/30',
        cvv: '***' 
      },
      {
        bal: '3,500.00',
        cardNumber: '4255 1020 0088 5978',
        validFrom: '01/25',
        validTo: '01/30',
        cvv: '***' 
      },
      {
        bal: '100,500.00',
        cardNumber: '4255 1020 0088 5789',
        validFrom: '01/25',
        validTo: '01/30',
        cvv: '***' 
      }
    ];
  }

  static styles = css`
    h1 {
      font-size: 22px;
      margin-bottom: 30px;
      color: #888;
    }
    .cards-container {
      display: flex;
      flex-wrap: wrap;
    }
  `

  render() {
    return html`
      <h1>Cards Page</h1>
      <div class="cards-container">
        ${this.cardsData.map(item => html`<card-layout .data="${item}"></card-layout>`)}
      </div>
    `;
  }
}

customElements.define('cards-page', CardsPage);
