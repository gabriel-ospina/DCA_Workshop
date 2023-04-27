import { LogoAtt } from "../Logo/logo";
import { AccountImgAtt } from "../accountImage/accountImage";

export enum HeaderAtt {
    "logo" = "logo",
    "img" = "img"
}

export default class Header extends HTMLElement {
    
    logo?: string = HeaderAtt.logo;
    img?: string = HeaderAtt.img;

    static get observedAttributes(){
        const headeratt: Record <HeaderAtt,null> = {
            logo: null,
            img: null,
        };
        return Object.keys(headeratt);
    };

    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    };

    connectedCallback(){
        this.render()
    };

    attributeChangedCallback(propName: HeaderAtt, _: unknown, newValue: string){
        switch (propName) {

            default:
                this[propName] = newValue;
            break;
        }
        this.render();
    };

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`<link rel="stylesheet" href="../src/components/header/header.css">`;

        const headerSection = this.ownerDocument.createElement("header");
        
            const logoSection = this.ownerDocument.createElement("app-logo");
            logoSection.setAttribute(LogoAtt.logo, this.logo??"");
            
            const AccImgSection = this.ownerDocument.createElement("acc-img");
            AccImgSection.setAttribute(AccountImgAtt.img, this.img??"");

            headerSection.appendChild(logoSection);
            headerSection.appendChild(AccImgSection);
        
        this.shadowRoot?.appendChild(headerSection)
    }
}

customElements.define("app-header", Header)