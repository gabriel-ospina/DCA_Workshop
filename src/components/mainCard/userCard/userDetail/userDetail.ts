export enum userDetailAttributes{
    "name" = "name",
    "age" = "age",
    "gender" = "gender",
    "udistance" = "udistance"
}

export default class AppUserDetail extends HTMLElement{

    name?: string;
    age?: string;
    gender?: string;
    udistance?: string;

    static get observedAttributes(){
        const Att: Record<userDetailAttributes,null> = {
            name: null,
            age: null,
            gender: null,
            udistance: null
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

    attributeChangedCallback(propName: userDetailAttributes, _: string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mainCard/userCard/userDetail/userDetail.css">
        <section>
            <span>
                <h1>${this.name}</h1>
                <p>${this.age}</p>
            </span>
            <p>${this.gender}</p>
            <span>
                <svg>
                    
                </svg>
                <p>${this.udistance}</p>
            </span>
        </section>
        `
    }
}

customElements.define("app-userdetail", AppUserDetail);