export enum userImageAttributes{
    "image" = "image",
}

export default class AppUserImage extends HTMLElement{

    image?: string;

    static get observedAttributes(){
        const Att: Record<userImageAttributes,null> = {
            image: null
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

    attributeChangedCallback(propName: userImageAttributes, _: string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mainCard/userCard/userImage/userImage.css">
        <div class="user-image" style="background-image: url('${this.image}');">
        </div>
        `
    }
}

customElements.define("app-userimage", AppUserImage);