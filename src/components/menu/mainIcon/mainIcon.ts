export enum MainIconAtt {
    "mainicon" = "mainicon"
};

export default class MainIcon extends HTMLElement {
    mainicon?: string

    static get observedAttributes(){
        const attrs: Record <MainIconAtt,null> = {
            mainicon: null
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

    attributeChangedCallback(propName: MainIconAtt, _: string, newValue: string){
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
        <link rel="stylesheet" href="../src/components/menu/icon.css">
        <div class="main-selec">
            <svg width="17" height="22" viewBox="0 0 17 22"><path d="${this.mainicon}" fill="#816CAD"></path></svg>
            <span>Main</span>
        </div>
        `;
    }
}

customElements.define("main-icon", MainIcon)