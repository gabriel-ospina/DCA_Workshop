export enum LogoAtt {
    "logo" = "logo"
}

export default class Logo extends HTMLElement {
    
    logo?: string;

    static get observedAttributes(){
        const logoatt: Record <LogoAtt,null> = {
            logo: null
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

    attributeChangedCallback(propName: LogoAtt, _: string, newValue: string){
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
        <svg>
            <path d="${this.logo}"></path>
        </svg>
        `;
    }
}

customElements.define("app-logo", Logo)