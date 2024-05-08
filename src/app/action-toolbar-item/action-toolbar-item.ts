
import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import { regionView } from '@uxland/regions';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
//@ts-ignore
@customElement('action-toolbar-item')
//@ts-ignore
export class ActionToolbarItem extends regionView(LitElement) { 

    override render() {
        return html`s
            <div class="container">
                <md-icon-button aria-label="${this.description}">
                    <md-icon>${this.icon}</md-icon>
                </md-icon-button>
            </div>
    `;
    }
    
    static styles = css`
    :host {
        color: red;
    }
  `;
    
    @property()
    icon: string;

    @property()
    description: string;
    
}