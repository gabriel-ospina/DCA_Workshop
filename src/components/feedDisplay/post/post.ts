export enum PostAtt {
    "profimg" = "profimg",
    "name"= "name",
    "text" = "text"
}

export default class Post extends HTMLElement {
    profimg?: string;
    name?: string;
    text?: string;

    static get observedAttributes(){
        const attrs: Record <PostAtt, null> = {
            profimg: null,
            name: null,
            text: null
        }
        return Object.keys(attrs)
    };

    constructor(){
        super();
        this.attachShadow({ mode: "open"})
    };

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: PostAtt, _: string, newValue: string){
        switch (propName) {

            default:
                this[propName] = newValue;
            break;
        };
        this.render();
    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML=`
            <section class="post-container">
                <div class="user-image" style="background-image: url('${this.profimg}');"></div>
                <input placeholder="What's up?">
                <section class="text-sec">
                    <h3>${this.name}</h3>
                    <p>${this.text}</p>
                <section>
            </section>
        `;
    }
}

customElements.define("post", Post)