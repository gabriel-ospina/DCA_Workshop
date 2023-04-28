import { userDetailAttributes } from "./userDetail/userDetail";
import { userImageAttributes } from "./userImage/userImage";
import { cardButtonAttributes } from "./cardButton/cardButton";

export enum userCardAtt {
    "name" = "name",
    "age" = "age",
    "gender" = "gender",
    "udistance" = "udistance",
    "image" = "image",
    "icon" = "icon"
}

export default class AppUserCard extends HTMLElement {
    
    name?: string = userDetailAttributes.name;
    age?: string = userDetailAttributes.age;
    gender?: string = userDetailAttributes.gender;
    udistance?: string = userDetailAttributes.udistance;
    image?: string = userImageAttributes.image;
    icon?: string = cardButtonAttributes.icon;

    static get observedAttributes(){
        const att: Record <userCardAtt,null> = {
           name: null,
           age: null,
           gender: null,
           udistance: null,
           image: null,
           icon: null,
        };
        return Object.keys(att);
    };

    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    };

    connectedCallback(){
        this.render()
    };

    attributeChangedCallback(propName: userCardAtt, _: unknown, newValue: string){
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

        const userCardSection = this.ownerDocument.createElement("section");

            const userImage = this.ownerDocument.createElement("app-userimage");
            userImage.setAttribute(userImageAttributes.image, this.image??"");
        
            const userDetail = this.ownerDocument.createElement("app-userdetail");
            userDetail.setAttribute(userDetailAttributes.name, this.name??"");
            userDetail.setAttribute(userDetailAttributes.age, this.age??"");
            userDetail.setAttribute(userDetailAttributes.gender, this.gender??"");
            userDetail.setAttribute(userDetailAttributes.udistance, this.udistance??"");

            const cardButton = this.ownerDocument.createElement("app-cardbutton")
            cardButton.setAttribute(cardButtonAttributes.icon, this.icon??"")
            
            userCardSection.appendChild(userImage);
            userCardSection.appendChild(userDetail);
            userCardSection.appendChild(cardButton);
        
        this.shadowRoot?.appendChild(userCardSection)
    }
}

customElements.define("app-ucardsection", AppUserCard)