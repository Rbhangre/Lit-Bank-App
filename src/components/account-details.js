import { LitElement, html, css } from 'lit';

class AccountDetails extends LitElement {
    static properties = {
        data: { type: String }
      };

      constructor() {
        super();
        this.data = '';
      }
  static styles = css`
    .info-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .info-wrapper .info {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }
    .info-wrapper .info:last-child{
        margin-right: 0;
    }
    .info-wrapper .info label {
        font-size: 13px;
        font-weight: 600;
        color: #999;
    }
    .info-wrapper .info span {
        font-size: 16px;
    }
  `

  render() {
    return html`
        <div class="info-wrapper">
            <div class="info">
                <label> Account Number </label>
                <span> ${this.data.number} </span>
            </div>

            <div class="info">
                <label> Account Balance </label>
                <span> $ ${this.data.balance} </span>
            </div>

            <div class="info">
                <label> Account Status </label>
                <span> ${this.data.status} </span>
            </div>
        </div>
    `;
  }
}

customElements.define('account-details', AccountDetails);
