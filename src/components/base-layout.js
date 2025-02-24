import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@lion/ui/define/lion-drawer.js';

import page from 'page';
import '../pages/cards-page.js';  // Import individual pages
import '../pages/loans-page.js';
import '../pages/transfer-page.js';

class BaseLayout extends LitElement {
    // Define the properties
    static get properties() {
        return {
            drawerOpened: { type: Boolean },
            route: { type: String },
        };
    }

    static styles = css`
        .custom-drawer {
            width: 245px; 
            min-height: 100vh; 
            overflow-y: initial; 
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
        }
        .custom-drawer-content {
            width: calc(100% - 245px);
            padding: 15px;
            background: #e6eaf1;
        }
        .page-wrapper {
            min-height: 100vh;
            display: flex;
        }
        .side-panel {
            background: #576aca;
            min-height: 100vh;
            width: 245px;
            display: block;
        }
        .logo-container {
            display: flex;
            justify-content: center;
            align-item: center;
            padding: 15px;
        }
        .logo-container > label {
            color: #fff;
            padding: 15px 0;
            font-weight: 800;
            font-size: 18px;
        }
        .logo-container > label > span {
            font-weight: 400;
        }
        .menu-wrapper {
            display: flex;
            flex-direction: column;
            padding: 5px 15px;
        }
        .menu-wrapper .menu-item {
            color: rgba(255, 255, 255);
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            font-weight: 400;
            display: flex;
            align-items: center;
            opacity: 0.75;
            cursor: pointer;
        }
        .menu-wrapper .menu-item.active {
            background: #6073d6;
            font-weight: 600;
            opacity: 1;
        }
    `;

    constructor() {
        super();
        this.drawerOpened = true;  // Initialize the drawer as closed
        this.route = '/';
    }

    firstUpdated() {
        // Define Routes
        page('/', () => this.updateRoute('/'));
        page('/cards', () => this.updateRoute('/cards'));
        page('/loans', () => this.updateRoute('/loans'));
        page.start(); // Start the router
    }

    updateRoute(route) {
        this.route = route;
        this.requestUpdate(); // Ensure Lit updates the UI
    }

    // Toggle the drawer open/closed
    toggleDrawer() {
        this.drawerOpened = !this.drawerOpened;  // Toggle the opened state
    }

    render() {
        return html`
            <div class="page-wrapper">
                <lion-drawer class="custom-drawer" ?opened="${this.drawerOpened}">
                    <div slot="content">
                        <div class="side-panel ${this.drawerOpened ? 'expand' : 'collapse'}">
                            <div class="logo-container">
                                <label>
                                    <span>Bank</span>App
                                </label>
                            </div>
                            
                            <div class="menu-wrapper">
                                <div class="menu-item ${this.route === '/' ? 'active' : ''}" @click="${() => page('/')}">
                                    <transfer-svg></transfer-svg> Transfer
                                </div>

                                <div class="menu-item ${this.route === '/cards' ? 'active' : ''}" @click="${() => page('/cards')}">
                                    <card-svg></card-svg> Cards
                                </div>

                                <div class="menu-item ${this.route === '/loans' ? 'active' : ''}" @click="${() => page('/loans')}">
                                    <loan-svg></loan-svg> Loans
                                </div>
                            </div>
                        </div>
                    </div>
                </lion-drawer>
            
                <div class="custom-drawer-content">
                    <main>
                        ${this.route === '/' ? html`<transfer-page></transfer-page>` : ''}
                        ${this.route === '/cards' ? html`<cards-page></cards-page>` : ''}
                        ${this.route === '/loans' ? html`<loans-page></loans-page>` : ''}
                    </main>
                </div>
            </div>
        `;
    }
}

customElements.define('base-layout', BaseLayout);