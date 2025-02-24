import { LitElement, html, css } from 'lit';

class CardLayout extends LitElement {
    static properties = {
        data: { type: String }
      };

      constructor() {
        super();
        this.data = '';
      }
  static styles = css`
    .card-wrapper {
        width: 350px;
        height: 185px;
        border-radius: 5px;
        background: rgb(87, 106, 202);
        background: linear-gradient(45deg, rgba(87, 106, 202, 1) 36%, rgba(96, 115, 214, 0.5) 100%);
        box-shadow: 0px 1px 4px 0px rgba(87, 106, 202, 0.5);
        padding: 15px;
        color: #FFF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 5px;
    }
    .card-balance {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        padding: 15px 0;
    }
    .card-balance label, .card-details .details label {
        font-size: 14px;
        font-weight: 300;
        color: rgba(254, 254, 254, 0.5);
        margin-bottom: 10px;
    }
    .card-number, .card-details .details span {
        margin: 10px 0;
        font-weight: 300;
        letter-spacing: 3px;
        font-size: 18px;
    }
    .card-details {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .card-details .details {
        display: flex;
        flex-direction: column;
    }
    .card-details .details label {
        margin-bottom: 5px;
    }
    .card-details .details span  {
        font-size: 14px;
        margin: 0px
    }
  `

  render() {
    return html`
            <div class="card-wrapper">
                <div class="card-balance">
                    <label>Balance</label>
                    $ ${this.data.bal}
                </div>
                <span class="card-number"> ${this.data.cardNumber} </span>
                <div class="card-details">
                    <div class="details">
                        <label>VALID FROM</label>
                        <span>${this.data.validFrom}</span>
                    </div>
                    <div class="details">
                        <label>VALID TO</label>
                        <span>${this.data.validTo}</span>
                    </div>
                    <div class="details">
                        <label>CVV</label>
                        <span>${this.data.cvv}</span>
                    </div>
                </div>
            </div>
    `;
  }
}

customElements.define('card-layout', CardLayout);
