import { LitElement, html, css } from "lit";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/card/card.js';

export class mvSearchDisplay extends LitElement{
    static get properties(){
        return{
            cards: {type: Array}
        }
    }
    constructor(){
        super();
        this.cards = [  {
            "image" : "/assets/spacemanCardImage.png",
            "title" : "Spaceman",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "image" : "/assets/spacemanCardImage.png",
            "title" : "Spaceman",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "image" : "/assets/spacemanCardImage.png",
            "title" : "Spaceman",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "image" : "/assets/spacemanCardImage.png",
            "title" : "Spaceman",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "image" : "/assets/spacemanCardImage.png",
            "title" : "Spaceman",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]; 
    }

    static styles = css`
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
    `
    
    render(){
        return html`
         <div id="modelSearchDisplay">
          <div id="modelSearch">
            <div id="modelSearchHeader">
              <h6>Models</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia consectetur vehicula. Integer ultricies enim eu ornare finibus.</p>
            </div>
            <div id="searchBar">
            <sl-input placeholder="Search 3D Models..."></sl-input>
            <sl-button variant="default" size="medium">Search</sl-button>
            </div>
          </div>
          <hr>
          <div id="modelDisplay">
            ${this.cards.map(card => html`
            <sl-card class="card-overview">
              <img
                slot="image"
                src="${card.image}"
                alt="A spaceman in a suit"
              />
              <strong>${card.title}</strong><br /><br/>
              ${card.description}
              <br />
              <div slot="footer">
                <sl-button variant="default" size="medium">Learn More</sl-button>
                <sl-rating></sl-rating>
              </div>
            </sl-card>
            `)}
          </div>

        </div>
        `
    }

}
customElements.define('mv-display', mvSearchDisplay);