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
        <link rel="stylesheet" href="../src/components/feedDisplay/post/post.css">
            <section class="post-container">
                <div class="user-post-section">
                    <div class="user-image" style="background-image: url('${this.profimg}');"></div>
                    <span class="u-section">
                        <h3>${this.name}</h3>
                        <p class="post-date">• Just now</p>
                    </span>
                </div>
                <section class="text-sec">
                    <p>${this.text}</p>
                <section>
            </section>
        `;
    }
}

customElements.define("post-card", Post)