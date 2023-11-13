import { LitElement, html, css } from "lit";
import "@shoelace-style/shoelace/dist/components/carousel/carousel.js";
import "@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/card/card.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/carousel/carousel.js'; 
import './mv-3D-searchDisplay';

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
      #modelSearchDisplay{
        width: 1190px;
        display: inline-flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.20);
        margin-top: 37px; 
        margin-bottom: 40px;
      }
      
      #modelSearch{
        margin-left: 24px;
      }
      h6{
        color: #000;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      p{
        width: 750px;
        color: #5F5F5F;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      #searchBar{
        display: flex;
        gap: 12px;
      }
      sl-input{
        width: 695px;
        height: 38px;
        flex-shrink: 0;
      }
      #resultsFilter{
        display: flex;
        width: 1190px;
        padding-right: 0px;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
      }
      #resultsNumber{
        color: #5F5F5F;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      hr{
        margin: 24px;
        width: 1190px;
        height: 1px;
      }
      #modelDisplay{
        display: flex;
        padding: 0px 15px;
        flex-direction: row;
        align-items: flex-start;
        gap: 24px;
        flex-wrap: wrap;
      }
      sl-card{
        max-width: 360px;
        flex-grow: 0px;
        flex-shrink : 0px;
      }

       `;

    render(){
        return html`
        <div id="previewCarousel">
            <sl-carousel navigation>
                <sl-carousel-item>
                  <img 
                  alt="A spaceman in a suit"
                  src="/assets/spacemanCardImage.png">
                </sl-carousel-item>
                <sl-carousel-item>
                  <img 
                  alt="A spaceman in a suit"
                  src="/assets/spacemanCardImage.png">
                </sl-carousel-item>
                <sl-carousel-item>
                  <img 
                  alt="A spaceman in a suit"
                  src="/assets/spacemanCardImage.png">
                </sl-carousel-item>
            </sl-carousel>
        </div> 
        <mv-display></mv-display>
     `
    }
}
customElements.define('model-viewer', ModelViewer3D);
