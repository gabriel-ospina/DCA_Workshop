import { MainIconAtt } from "./mainIcon/mainIcon";
import { ChatIconAtt } from "./chatIcon/chatIcon";
import { SafeIconAtt } from "./safeIcon/safeIcon";

export enum MenuAtt {
    "mainicon" = "mainicon",
    "chaticon" = "chaticon",
    "safeiconin" = "safeiconin",
    "safeiconout" = "safeiconout"
}

export default class Menu extends HTMLElement {
    
    mainicon:string = MenuAtt.mainicon;
    chaticon: string = MenuAtt.chaticon;
    safeiconin: string = MenuAtt.safeiconin;
    safeiconout: string = MenuAtt.safeiconout;

    static get observedAttributes(){
        const attrs: Record <MenuAtt, null> = {
            mainicon: null,
            chaticon: null,
            safeiconin: null,
            safeiconout: null
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
            mainIconSection.setAttribute(MainIconAtt.mainicon, this.mainicon);
            menuSection.appendChild(mainIconSection);

            const chatIconSection = this.ownerDocument.createElement("chat-icon")
            chatIconSection.setAttribute(ChatIconAtt.chaticon, this.chaticon)
            menuSection.appendChild(chatIconSection)
            
            const safeIconSection = this.ownerDocument.createElement("safe-icon")
            safeIconSection.setAttribute(SafeIconAtt.safeiconin, this.safeiconin)
            safeIconSection.setAttribute(SafeIconAtt.safeiconout, this.safeiconout)
            menuSection.appendChild(safeIconSection)
            

        this.shadowRoot?.appendChild(menuSection)
    }
}

customElements.define("app-menu", Menu)