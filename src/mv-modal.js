import { LitElement, html, css } from "lit";
import "@google/model-viewer/dist/model-viewer.js";

export class MvModal extends LitElement{
    static get properties(){
        return{
            title : {type : String},
            model : {type : String},
            info : {type: String},
            embedCode : {type : String}
        }
    }
    
    static styles = css`
     #modelContent{
        margin : 50px; 
        display: flex; 
        flex-direction: row;
        gap: 40px;

     }
     #infoContent{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
     }
     h6{
        color: #000;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 180%; /* 43.2px */
     }

     p{
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 36px */
     }
     #codeEmbed{
        border-radius: 10px;
        border: 1px solid #000;
        width: 483px;
        height: 165px;
     }

    `;


    render(){
        return html`
        <div id="modalContent">
            <div id="modelLoad"> 
            </div>
            <div id="modalInfo">
                <div class="infoContent">
                    <h6>About</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia consectetur vehicula. 
                        Integer ultricies enim eu ornare finibus.</p>
                </div>
                <div class="infoContent">
                    <h6>Embed</h6>
                    <div id="codeEmbed">
                        <p>This is where the Embed Code goes</p>
                    </div>
                </div>
            </div>
        </div> 
        `
    }

}
customElements.define('mv-modal', MvModal);