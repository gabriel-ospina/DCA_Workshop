export enum NewPostInputAtt {
    "userimg" = "userimg"
}

export default class NewPostInput extends HTMLElement {
    userimg?: string

    static get observedAttributes(){
        const attrs: Record <NewPostInputAtt, null> = {
            userimg: null
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

    attributeChangedCallback(propName: NewPostInputAtt, _: string, newValue: string){
        switch (propName) {

            default:
                this[propName] = newValue;
            break;
        };
        this.render();
    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="../src/components/feedDisplay/newPostInput/newPostInput.css">
            <form>
                <section class="upper-sec">
                    <div class="user-image" style="background-image: url('${this.userimg}');"></div>
                    <input placeholder="What's up?">
                </section>
                <section class="lower-sec">
                    <button>Publish</button>
                <section>
            </form>
        `;
    }
}

customElements.define("post-input", NewPostInput)