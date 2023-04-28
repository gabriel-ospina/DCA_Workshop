export enum cardButtonAttributes{
    "icon" = "icon",
}

/*
    "favbtn" = "favbtn",
    "passbtn" = "passbtn"
*/ 

export default class AppCardButton extends HTMLElement{

    icon?: string;

    static get observedAttributes(){
        const Att: Record<cardButtonAttributes,null> = {
            icon: null
        }
        return Object.keys(Att);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName: cardButtonAttributes, _: string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/tag/tag.css">
        <div>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="${this.icon}">
                </path>
            </svg>
        </div>
        `
    }
}

customElements.define("app-cardbutton", AppCardButton);