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
        height: 800px;
        display: flex; 
        flex-direction: row;
        align-items: flex-start;
     }
     #modelLoad{
        width: 100%;
        height: 100%;
     }
     
     .load model-viewer {
        width: 100%;
        height: 100%;
     }

    `;

    render(){
        return html`
        <sl-dialog label="${this.title}" class="dialog-scrolling" style="--width: 900px;">


            <div id="modelContent"> 
                <div id="modelLoad" class="load"> 
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
            </div> 



        <sl-button slot="footer" variant="primary" size="medium" pill @click="${this.hide}">Close</sl-button>
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