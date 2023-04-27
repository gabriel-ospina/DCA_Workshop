export enum SafeIconAtt {
    "safeiconin" = "safeiconin",
    "safeiconout" = "safeiconout"
};

export default class SafeIcon extends HTMLElement {
    safeiconin?: string
    safeiconout?: string

    static get observedAttributes(){
        const attrs: Record <SafeIconAtt,null> = {
            safeiconin: null,
            safeiconout: null
        };
        return Object.keys(attrs);
    };

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: SafeIconAtt, _: string, newValue: string){
        switch (propName) {
        
            default: 
            this[propName] = newValue
            break;
        };
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${this.safeiconin}" fill="black" fill-opacity="0.36"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="${this.safeiconout}" fill="black" fill-opacity="0.36"/>
        </svg>
        `;
    }
}

customElements.define("safe-icon", SafeIcon)