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

    getUpdateResults(value = ''){
      const address = `/api/data?search=${value}`; 
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
     #searchBox{
        width: 1190px;
        display: inline-flex;
        padding: 24px;
        flex-direction: row;
        align-items: flex-start;
        gap: 40px;
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.20);
        margin-top: 70px; 
      }
      sl-input{
        margin-top: 8px;
      }
    `
    
    render(){
        return html`
         <div id="searchBox">
          <h2>3D Model Viewer</h2>
            <sl-input placeholder="Search 3D Models..." size="large"></sl-input>
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