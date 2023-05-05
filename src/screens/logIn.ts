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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/login.css">
        `;

        const LogInScreen = this.ownerDocument.createElement("div");

            const loginDiv = this.ownerDocument.createElement("login-container");
            loginDiv.setAttribute("class", "login-section")
            LogInScreen.appendChild(loginDiv);

         this.shadowRoot?.appendChild(LogInScreen);
    }
}

customElements.define("app-login", LogIn)