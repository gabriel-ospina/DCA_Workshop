import { tagAttributes } from "../tag/tag";

export enum mainCardAttributes{
    "tag" = "tag"
}

export default class MainCard extends HTMLElement{

    tag?: string;

    static get observedAttributes(){
        
        const atts: Record<mainCardAttributes, null> = {
            tag: null,
        }

        return Object.keys(atts)
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    attributeChangedCallback( propName:mainCardAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue;
            break;
        }

        this.render()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``;

        const mainCardSection = this.ownerDocument.createElement('section');

        const tag = this.ownerDocument.createElement("app-tag");
        tag.setAttribute(tagAttributes.tag, "Funciona");
        

        mainCardSection.appendChild(tag);
        this.shadowRoot?.appendChild(mainCardSection);
    }
}

customElements.define("app-maincard",MainCard)