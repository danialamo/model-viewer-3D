import { LitElement, html, css } from "lit";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.13.1/cdn/components/divider/divider.js';
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
      const address = `/api/data`; 
      fetch(address).then((response) =>{
        if(response.ok){
          return response.json();
        }
        return [];
        }).then((data) => {
          this.cards = [...data];
        });
    }

    static styles = css`
      :host{
        width: 70%;
      }
      h2{
        font-family: 'Montserrat', sans-serif;
        font-family: 'Open Sans', sans-serif;
        font-size: 48px;
        text-align: center;
      }
      #topSection{
        width: 100%;
        margin-top: 100px;
        display: flex; 
        justify-content: center;
        align-items: center;
      }
      sl-card{
        width: 400px; 
        height: 500px;
      }
    ` 
    render(){
      return html`
        <div ID='topSection'></div>
           <h2>3D Model Viewer</h2>
           <div ID="searchBar">
           <sl-input placeholder="Search all 3D models" size="large" pill>
           <sl-icon name="search" slot="prefix"></sl-icon>
           </sl-input>
           <sl-divider ID= "divider" style="--spacing: 2rem; --width: 4px;" ></sl-divider>
           </div>
        </div>

        <div ID="modelViewer">
        ${this.cards.map(card => html`
            <sl-card class="card-overview">
              <strong>${card.title}</strong><br/><br/>
              ${card.description}
              <br />
              <div slot="footer">
                <sl-button variant="primary" size="medium" pill @click="${e => this.show(e, card)}">Learn More</sl-button>
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