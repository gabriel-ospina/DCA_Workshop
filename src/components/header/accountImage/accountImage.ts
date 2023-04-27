export enum AccountImgAtt {
    "img" = "img"
}

export default class AccountImg extends HTMLElement {
    
    img?: string;

    static get observedAttributes(){
        const logoatt: Record <AccountImgAtt,null> = {
            img: null
        };
        return Object.keys(logoatt);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName: AccountImgAtt, _: string, newValue: string){
        switch (propName) {

            default:
                this[propName] = newValue;
            break;
        };
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML= `
        <img src="${this.img}">
        `;
    }
}

customElements.define("acc-img", AccountImg)