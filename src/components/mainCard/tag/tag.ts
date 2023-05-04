export enum tagAttributes{
    "tag1" = "tag1",
    "tag2" = "tag2",
    "tag3" = "tag3",
    "tag4" = "tag4",
    "tag5" = "tag5"
}

export default class AppTag extends HTMLElement{

    tag1?: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
    tag5?: string;

    static get observedAttributes(){
        const tagAtt: Record<tagAttributes,null> = {
            tag1: null,
            tag2: null,
            tag3: null,
            tag4: null,
            tag5: null,
        }
        return Object.keys(tagAtt);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName: tagAttributes, _: string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mainCard/tag/tag.css">
        <div class="tag-section">
            <div><p>${this.tag1}</p></div>          
        </div>
        <div class="tag-section">     
            <div><p>${this.tag2}</p></div>              
        </div>
        <div class="tag-section">     
            <div><p>${this.tag3}</p></div>          
        </div>
        <div class="tag-section">     
            <div><p>${this.tag4}</p></div>          
        </div>
        <div class="tag-section">    
            <div><p>${this.tag5}</p></div>     
        </div>
        `
    }
}

customElements.define("app-tag", AppTag);