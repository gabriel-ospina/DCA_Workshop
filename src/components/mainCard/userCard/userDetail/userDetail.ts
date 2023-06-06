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
        <section class="user-detail">
            <span>
                <h1>${this.name}</h1>
                <p class="age">${this.age}</p>
            </span>
            <p>${this.gender}</p>
            <span>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 0.916687C8.57248 0.916687 5.60501 2.14585 3.41709 4.33377C1.22916 6.5217 0 9.48916 0 12.5834C0 20.4584 10.2813 29.3542 10.7188 29.7334C10.9829 29.9593 11.3191 30.0834 11.6667 30.0834C12.0143 30.0834 12.3504 29.9593 12.6146 29.7334C13.125 29.3542 23.3333 20.4584 23.3333 12.5834C23.3333 9.48916 22.1042 6.5217 19.9162 4.33377C17.7283 2.14585 14.7609 0.916687 11.6667 0.916687ZM11.6667 26.6563C8.56042 23.7396 2.91667 17.4542 2.91667 12.5834C2.91667 10.2627 3.83854 8.03711 5.47948 6.39617C7.12043 4.75523 9.34602 3.83335 11.6667 3.83335C13.9873 3.83335 16.2129 4.75523 17.8539 6.39617C19.4948 8.03711 20.4167 10.2627 20.4167 12.5834C20.4167 17.4542 14.7729 23.7542 11.6667 26.6563ZM11.6667 6.75002C10.5129 6.75002 9.38513 7.09214 8.42584 7.73311C7.46656 8.37409 6.71888 9.28513 6.27737 10.351C5.83586 11.4169 5.72034 12.5898 5.94542 13.7214C6.1705 14.8529 6.72607 15.8923 7.54188 16.7081C8.35768 17.5239 9.39709 18.0795 10.5286 18.3046C11.6602 18.5297 12.8331 18.4142 13.899 17.9727C14.9649 17.5311 15.8759 16.7835 16.5169 15.8242C17.1579 14.8649 17.5 13.7371 17.5 12.5834C17.5 11.0363 16.8854 9.55253 15.7915 8.45856C14.6975 7.3646 13.2138 6.75002 11.6667 6.75002ZM11.6667 15.5C11.0898 15.5 10.5259 15.329 10.0463 15.0085C9.56661 14.688 9.19277 14.2325 8.97202 13.6995C8.75126 13.1666 8.6935 12.5801 8.80604 12.0143C8.91858 11.4486 9.19637 10.9289 9.60427 10.521C10.0122 10.1131 10.5319 9.83527 11.0977 9.72273C11.6634 9.61019 12.2499 9.66795 12.7828 9.8887C13.3158 10.1095 13.7713 10.4833 14.0918 10.9629C14.4123 11.4426 14.5833 12.0065 14.5833 12.5834C14.5833 13.3569 14.276 14.0988 13.7291 14.6457C13.1821 15.1927 12.4402 15.5 11.6667 15.5Z" fill="white"/>
                </svg>
                <p>${this.udistance}</p>
            </span>
        </section>
        `
    }
}

customElements.define("app-userdetail", AppUserDetail);