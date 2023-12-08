import { LitElement, html, css } from "lit";
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/input/input.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/components/card/card.js';
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
    render(){
        return html`
        <mv-display></mv-display> 
     `
    }
}
customElements.define('model-viewer-3d', ModelViewer3D);
