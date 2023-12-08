import { LitElement, html, css } from "lit";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/card/card.js';
import './mv-modal.js'; 

export class mvSearchDisplay extends LitElement{
    static get properties(){
        return{
            cards: {type: Array},
            activeTitle: {type: String}, 
            activeDescription : {type: String},
            activeAlt : {type: String},
            activeSrc : {type: String},
            activemodelImage : {type: String},
            activePoster : {type: String},
            activeAbout : {type: String},
            activeEmbed : {type: String},
        }
    }
    constructor(){
        super();
        this.cards = []; 
        this.getUpdateResults();
    }

    getUpdateResults(){
      const address = (new URL('/assets/cards.json', import.meta.url).href); 
      fetch(address).then((response) =>{
        if(response.ok){
          return response.json();
        }
        return [];
        }).then((data) => {
          this.cards = [...data];
        });
        console.log(this.cards);
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
        margin: 16px;
        width: 1125px;
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
              <p>
              Discover a world of 3D models at your fingertips! Our application 
              lets you search effortlessly for a variety of 3D wonders—unlocking a realm of creative possibilities at your command.
              Start your exploration now!
              </p>
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
              <strong>${card.title}</strong><br/><br/>
              ${card.description}
              <br />
              <div slot="footer">
                <sl-button variant="default" size="medium" @click="${e => this.show(e, card)}">Learn More</sl-button>
                <sl-rating></sl-rating>
              </div>
            </sl-card>
            `)}
            <mv-modal 
            title="${this.activeTitle}" 
            text="${this.activeAbout}"
            embed="${this.activeEmbed}"
            alt="${this.activeAlt}"
            src="${this.activeSrc}"
            modelImage="${this.activemodelImage}"
            poster="${this.activePoster}"></mv-modal>
          </div>
        </div>
        `
    }
    show(e, card) {
      this.activeTitle = card.title; 
      this.activeDescription = card.description; 
      this.activeAlt = card.alt; 
      this.activeSrc = card.src; 
      this.activemodelImage = card.modelImage; 
      this.activePoster = card.poster; 
      this.activeAbout = card.about; 
      this.activeEmbed = card.embed; 
      this.shadowRoot.querySelector('mv-modal').show();
  }

}
customElements.define('mv-display', mvSearchDisplay);