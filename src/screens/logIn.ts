import '../components/export'



export default class LogIn extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``;

        const LogInScreen = this.ownerDocument.createElement("div");

            const loginDiv = this.ownerDocument.createElement("login-container");
            LogInScreen.appendChild(loginDiv);

         this.shadowRoot?.appendChild(LogInScreen);
    }
}

customElements.define("app-login", LogIn)