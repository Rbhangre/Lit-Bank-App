import { LitElement, html, css } from 'lit';
import { preprocessAmount } from '@lion/ui/input-amount.js';
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-input-amount.js';
import '@lion/ui/define/lion-input-tel.js';

class LoansPage extends LitElement {
  constructor() {
    super();
    this.formData = {
      fname: '',
      lname: '',
      mobile: '',
      email: '',
      amount: '',
      remark: ''
    };
  }

  static styles = css`
    h1 {
      font-size: 22px;
      margin-bottom: 30px;
      color: #888;
    }
    .content-wrapper {
      border: 1px solid #DDD;
      box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.25);
      background-color: #FFF;
      border-radius: 5px;
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
    .field-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    .field-wrapper .field {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      width: 235px;
    }
    .field-wrapper .field:last-child{
      margin-right: 0;
    }
    .field-wrapper .field label {
      font-size: 13px;
      font-weight: 600;
      color: #999;
    }
    input.form-control {
      padding: 5px;
      margin-bottom: 5px;
      border: 2px solid #999;
      border-radius: 4px;
      min-width: 235px;
    }
    input.form-control[aria-invalid="true"] {
      border-color: red;
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
    lion-validation-feedback[type="error"] {
      color: red;
      font-size: 11px;
    }
  `;

  render() {
    return html`
    <h1>Loans Page</h1>

    <div class="content-wrapper">
        <div class="content-header">
          Apply For Home Loan
        </div>
        <div class="content-body">
          <lion-form @submit="${this._handleLoanSubmit}">
            <form>
              <div class="field-wrapper">
                <div class="field">
                  <lion-input label="First Name" name="fname"  @input="${(e) => this.formData.fname = e.target.value}"></lion-input>
                </div>
                <div class="field">
                  <lion-input label="Last Name" name="lname"  @input="${(e) => this.formData.lname = e.target.value}"></lion-input>
                </div>
                <div class="field">
                  <lion-input-tel label="Mobile Number" name="mobile"  @input="${(e) => this.formData.mobile = e.target.value}" .allowedRegions="${['IN', 'NL', 'US']}"></lion-input-tel>
                </div>
                <div class="field">
                  <lion-input label="Email Address" name="email"  @input="${(e) => this.formData.email = e.target.value}"></lion-input>
                </div>                  
                <div class="field">
                  <lion-input-amount label="Loan Amount" name="amount" .preprocessor="${preprocessAmount}"  @input="${(e) => this.formData.amount = e.target.value}"></lion-input-amount>
                </div>                  
                <div class="field">
                  <lion-input label="Remark" name="remark" @input="${(e) => this.formData.remark = e.target.value}"></lion-input>
                </div>
              </div>
              <div class="button-wrapper">
                <button class="submit"> Apply </button>
              </div>
            </form>
          </lion-form>
        </div>
    </div>
    `;
  }

  _handleLoanSubmit(event) {
    console.log('Form submitted successfully:', this.formData);
  }
}

customElements.define('loans-page', LoansPage);
