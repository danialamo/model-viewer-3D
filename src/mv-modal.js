import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/dialog/dialog.js';

export class MvModal extends LitElement{
    static get properties(){
        return{
            title: {type: String},
            text: {type: String},
            embed: {type: String},
            alt: {type: String},
            src: {type: String},
            modelImage: {type: String},
            poster: {type: String}
        }
    }

    constructor(){
        super();
        this.title = "";
        this.text = "";
        this.embed = "";
        this.alt = "";
        this.src = "";
        this.modelImage = "";
        this.poster = "";
    }


    static styles = css`
     #modelContent{
        height: 600px;
        display: flex; 
        flex-direction: row;
        align-items: flex-start;
     }
    
     #modelLoad{
        max-width: 600px;
     }
    
     #modalInfo{
        max-width: 600px;
        display: block;
     }
     #infoContent{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        padding: 24px;
     }
        
     h6{
        color: #000;
        font-family: Montserrat;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 180%; /* 43.2px */
     }

     p{
        color: #000;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 36px */
        word-wrap: break-word; 
        width: 580px;
     }

    `;

    render(){
        return html`
        <sl-dialog label="${this.title}" class="dialog-overview" style="--width: 700px;">
            <div id="modalContent"> 
                <div id="modelLoad"> 
                    <model-viewer 
                    alt="${this.alt}" 
                    src="${this.src}" 
                    ar
                    environment-image="${this.modelImage}" 
                    poster="${this.poster}" 
                    shadow-intensity="1" 
                    camera-controls="camera-controls"
                    touch-action="pan-y" 
                    style="height: 500px;" 
                    ar-status="not-presenting" 
                    ></model-viewer>
                </div>
                <div id="modalInfo">
                    <div class="infoContent">
                            <h6>About</h6>
                            <p>${this.text}</p>
                    </div>
                    <div class="infoContent">
                            <h6>Embed</h6>
                            <p>${this.embed}</p>
                    </div>
                </div>   
            </div> 
        <sl-button slot="footer" variant="primary" @click="${this.hide}">Close</sl-button>
        </sl-dialog>
        `
    }

    show(e) {
        this.shadowRoot.querySelector('sl-dialog').show();
    }

    hide(e) {
        this.shadowRoot.querySelector('sl-dialog').hide();
    }

}
customElements.define('mv-modal', MvModal);