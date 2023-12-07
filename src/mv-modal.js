import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/dialog/dialog.js';

export class MvModal extends LitElement{
    static get properties(){
        return{
            data : {type: Object}
        }
    }

    constructor(){
        super();
        this.data = {};
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
        <sl-dialog label="Dialog" class="dialog-overview" style="--width: 700px;">
            <div id="modalContent"> 
                <div id="modelLoad"> 
                    <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" 
                    src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" 
                    ar="ar" 
                    environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr" 
                    poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp" 
                    shadow-intensity="1" camera-controls="camera-controls"
                    touch-action="pan-y" style="height: 500px;" ar-status="not-presenting" 
                    data-hax-layout="true" role="textbox"></model-viewer>
                </div>
                <div id="modalInfo">
                    <div class="infoContent">
                            <h6>About</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia consectetur vehicula. 
                                Integer ultricies enim eu ornare finibus.</p>
                    </div>
                    <div class="infoContent">
                            <h6>Embed</h6>
                            <p>code-sample> template preserve-content="preserve-content">const great = "example"; const great = "example"; const great = "example";/template> /code-sample></p>
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