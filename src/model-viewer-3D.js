import { LitElement, html, css } from "lit";
/**import "@shoelace-style/shoelace/dist/components/carousel/carousel.js";
import "@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/card/card.js';
**/

export class ModelViewer3D extends LitElement{
    static get properties(){
      return{
        cards : {type: Array}
      }
    }
    constructor(){
      super(); 
      this.cards = []; 
    }
    static styles = css`
      #previewCarousel{
        display: flex;
        width: 952px;
        height: 410px;
        padding: 15px 0px;
        margin-top: 40px; 
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 20px;
        background: #FBFBFB;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.20);
      }

      sl-carousel{
        display: flex;
        width: 852px;
        height: 273px;
        justify-content: center;
        align-items: center;
        gap: 33px;
        flex-shrink: 0;
      }

      sl-carousel-item{
        width: 706px;
        height: 273px;
        flex-shrink: 0;
        border: 1px solid #000;
      }

      #model-display{
        display: inline-flex;
        padding: 24px;
        margin-top: 40px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.20);
      }
      #top-display{
        display: flex;
        width: 1190px;
        height: 266px;
        flex-direction: column;
        align-items: flex-start;
      }
      #top-header{
        display: flex;
        padding: 0px 40px 0px 40px;
        align-items: flex-start;
        color: #000;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      #search-div{
        display: flex;
        padding: 0px 24px 24px 60px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }
      #search-p{
        width: 749px;
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      sl-input{
        height: 38px;
        width: 695px;
        padding: 10px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid var(--gray-80, #C7CDD1);
        background: var(--White, #FFF);
      }
      sl-button{
        display: flex;
        padding: 0px 25px;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid var(--gray-80, #C7CDD1);
        background: var(--gray-20, #2E3438);
      }
      #search-input{
        display: flex;
        width: 818px;
        align-items: flex-start;
        gap: 12px;
      }
      hr{
        width: 1190.004px;
        height: 1px;
        background: #000;
      }
      search-display{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }
      #card-slot{
        display: flex;
        padding: 0px 15px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }
      .model-card{
        display: flex;
        width: 360px;
        height: 492px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid var(--gray-90, #E3E6E8);
        background: #FFF;
        /* Shadow X-Small */
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
        font-family: Montserrat;
        font-size: 17.5px;
        font-style: normal;
        font-weight: 500;
        line-height: 38px; /* 217.143% */
      }
      .model-card::part(body){
        display: flex;
        height: 122px;
        padding: 25px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex-shrink: 0;
        align-self: stretch;
      }
      .model-card::part(image){
        height: 267px;
        width: 358px;
        flex-shrink: 0;
        align-self: stretch;
      }
      .model-card::part(footer){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px, 184px, 32px, 24px;
      }
    

       `;

    render(){
        return html`
        <div id="previewCarousel">
            <sl-carousel navigation>
                <sl-carousel-item>

                </sl-carousel-item>
            </sl-carousel>
        </div> 
        
        <div id="model-display">
            <div id="top-display">
                <p id="top-header">Models</p>
                <div id="search-div">
                    <p id="search-p">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Phasellus lacinia consectetur vehicula. 
                    Integer ultricies enim eu ornare finibus. 
                    </p>
                    <div id="search-input"> 
                     <sl-input placeholder="Search 3D Models..." size="large"></sl-input>
                     <sl-button variant="default" size="large">Search</sl-button>
                    </div>
                </div>
              </div> 
       </div>
     `
    }
}
customElements.define('model-viewer', ModelViewer3D);
