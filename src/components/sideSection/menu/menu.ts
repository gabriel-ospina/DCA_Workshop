import { MainIconAtt } from "./mainIcon/mainIcon";

export enum MenuAtt {
    "mainicon" = "mainicon"
}

export default class Menu extends HTMLElement {
    
    mainicon?:string = MenuAtt.mainicon

    static get observedAttributes(){
        const attrs: Record <MenuAtt, null> = {
            mainicon: null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    attributeChangedCallback( propName:MenuAtt, _:unknown, newValue:string){
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

        const menuSection = this.ownerDocument.createElement("nav");
        
            const mainIconSection = this.ownerDocument.createElement("main-icon");
            mainIconSection.setAttribute(MainIconAtt.mainicon, this.mainicon??"");

            menuSection.appendChild(mainIconSection);

        this.shadowRoot?.appendChild(menuSection)
    }
}

customElements.define("app-menu", Menu)