import { LitElement, html, css } from 'lit';
import { preprocessAmount } from '@lion/ui/input-amount.js';
import '@lion/ui/define/lion-tabs.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-input-amount.js';

class TransferPage extends LitElement {
  constructor() {
    super();
    this.formDataIMPS = {
      name: '',
      account: '',
      amount: '',
      remark: ''
    };
    
    this.formDataRTGS = {
      name: '',
      account: '',
      amount: '',
      remark: ''
    };

    this.accDetails = {
      number: '65849652233',
      balance: '10,500.00',
      status: 'Active'
    }
  }

  static styles = css`
    h1 {
      font-size: 22px;
      margin-bottom: 30px;
      color: #888;
    }
    .tab {
      width: 50%;
      text-align: center;
      display: inline-block;
      background: transparent;
      border-bottom: 2px solid #576aca;
      font-weight: 500;
      cursor: pointer;
    }
    .tab[selected="true"] {
      border: 2px solid #576aca;
      border-top-width: 3px;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      font-weight: 500;
      background: #FFF;
      color: #3375fb;
    }
    .content-wrapper {
      border: 2px solid #576aca;
      border-top: none;
      border-radius: 0 0 4px 4px;
      box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.25);
      background-color: #FFF;
    }
    .content-header {
      width: calc(100% - 30px);
      padding: 15px;
      border-bottom: 1px dashed #6073d6;
      font-size: 18px;
      font-weight: 600;
      color: #3375fb;
    }
    .content-body {
      padding: 15px;
    }
    hr {
      border: none;
      border-top: 1px dashed rgb(96, 115, 214);
      margin: 25px 0;
    }
    h5 {
      margin: 10px 0;
    }
    .form-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .form-wrapper .form-field {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }
    .form-wrapper .form-field:last-child{
        margin-right: 0;
    }
    .form-wrapper .form-field label {
        font-size: 13px;
        font-weight: 600;
        color: #999;
    }
    .form-wrapper .form-field span {
        font-size: 16px;
    }
    input.form-control {
      padding: 5px;
      margin-bottom: 5px;
      border: 2px solid #999;
      border-radius: 4px;
      min-width: 250px;
    } 
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    .submit {
      background: #6073d6;
      border: none;
      color: #FFF;
      padding: 10px 25px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 5px;
      cursor: pointer;
      margin: 15px;
    }
  `;

  render() {
    return html`
    <h1>Transfer Page</h1>
    <lion-tabs>
      <lion-button class="tab" slot="tab">IMPS</lion-button>
      <div class="content-wrapper" slot="panel">
        <div class="content-header">
          Transfer money using IMPS
        </div>
        <div class="content-body">
          <div class="acc-info">
            <h5> From Account </h5>
            <account-details .data="${this.accDetails}"></account-details>
          </div>
          <hr />
          <div class="acc-info">
            <h5> To Account </h5>
              <lion-form>
                <form>
                  <div class="form-wrapper">
                    <div class="form-field">
                      <lion-input label="Name" name="Name" @input="${(e) => this.formDataIMPS.name = e.target.value}"></lion-input>
                    </div>
                    <div class="form-field">
                      <lion-input label="Account Number" name="account" @input="${(e) => this.formDataIMPS.account = e.target.value}" .preprocessor="${preprocessAmount}"></lion-input>
                    </div>                    
                    <div class="form-field">
                      <lion-input-amount label="Transfer Amount" name="amount" @input="${(e) => this.formDataIMPS.amount = e.target.value}" .preprocessor="${preprocessAmount}" ></lion-input-amount>
                    </div>                  
                    <div class="form-field">
                      <lion-input name="remark" label="Remark" @input="${(e) => this.formDataIMPS.remark = e.target.value}"></lion-input>
                    </div>
                  </div>
                  <div class="button-wrapper">
                    <lion-button class="submit" @click="${this._handleIMPSSubmit}">Pay</lion-button>
                  </div>
                </form>
              </lion-form>
          </div>
        </div>
      </div>
      <lion-button  class="tab" slot="tab">RTGS</lion-button>
      <div class="content-wrapper" slot="panel">
        <div class="content-header">
          Transfer money using RTGS
        </div>
        <div class="content-body">
          <div class="acc-info">
            <h5> From Account </h5>
            <account-details  .data="${this.accDetails}"></account-details>
          </div>
          <hr />
          <div class="acc-info">
            <h5> To Account </h5>
              <lion-form>
              <form>
              <div class="form-wrapper">
                <div class="form-field">
                  <lion-input label="Name" name="Name" @input="${(e) => this.formDataRTGS.name = e.target.value}"></lion-input>
                </div>
                <div class="form-field">
                  <lion-input label="Account Number" name="account" @input="${(e) => this.formDataRTGS.account = e.target.value}" .preprocessor="${preprocessAmount}"></lion-input>
                </div>                    
                <div class="form-field">
                  <lion-input-amount label="Transfer Amount" name="amount" @input="${(e) => this.formDataRTGS.amount = e.target.value}" .preprocessor="${preprocessAmount}" ></lion-input-amount>
                </div>                  
                <div class="form-field">
                  <lion-input name="remark" label="Remark" @input="${(e) => this.formDataRTGS.remark = e.target.value}"></lion-input>
                </div>
              </div>
              <div class="button-wrapper">
                <lion-button class="submit" @click="${this._handleRTGSSubmit}">Pay</lion-button>
              </div>
            </form>
              </lion-form>
          </div>
        </div>
      </div>
    </lion-tabs>
    `;
  }

  _handleRTGSSubmit(event) {
    console.log('Form submitted successfully:', this.formDataRTGS);
  }

  _handleIMPSSubmit(event) {
    console.log('Form submitted successfully:', this.formDataIMPS);
  }
}

customElements.define('transfer-page', TransferPage);
