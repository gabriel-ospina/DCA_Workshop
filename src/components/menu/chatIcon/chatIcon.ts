export enum ChatIconAtt {
    "chaticon" = "chaticon"
};

export default class ChatIcon extends HTMLElement {
    chaticon?: string

    static get observedAttributes(){
        const attrs: Record <ChatIconAtt,null> = {
            chaticon: null
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

    attributeChangedCallback(propName: ChatIconAtt, _: string, newValue: string){
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
        <svg viewBox="0 0 27 27" width="27" heigth="27"><path d="${this.chaticon}" fill="black" fill-opacity="0.36"></path></svg>
        `;
    }
}

customElements.define("chat-icon", ChatIcon)