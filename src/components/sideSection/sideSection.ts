import { MenuAtt } from "./menu/menu";

export enum SideSectionAtt {
    "mainicon" = "mainicon"
}

export default class SideSection extends HTMLElement {
    
    mainicon?:string = SideSectionAtt.mainicon

    static get observedAttributes(){
        const attrs: Record <SideSectionAtt, null> = {
            mainicon: null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    attributeChangedCallback( propName:SideSectionAtt, _:unknown, newValue:string){
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

        const SideSection = this.ownerDocument.createElement("section");
        
            const menuSection = this.ownerDocument.createElement("app-menu");
            menuSection.setAttribute(MenuAtt.mainicon, this.mainicon??"");

            SideSection.appendChild(menuSection);

        this.shadowRoot?.appendChild(SideSection)
    }
}

customElements.define("side-section", SideSection)