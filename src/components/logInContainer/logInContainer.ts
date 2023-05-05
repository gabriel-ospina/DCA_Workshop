
export default class LogInContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };

    render(){
        if (this.shadowRoot){

            this.shadowRoot.innerHTML=``;

            const loginContainer = this.ownerDocument.createElement("section");

                const title = this.ownerDocument.createElement("h1");
                title.innerText = "Log In";
                loginContainer.appendChild(title);

                const loginForm = this.ownerDocument.createElement("login-form");
                loginContainer.appendChild(loginForm);

                const loginBtn = this.ownerDocument.createElement("button");
                loginBtn.innerText = "login";
                loginBtn.addEventListener("click", );
                loginContainer.appendChild(loginBtn)

            this.shadowRoot.appendChild(loginContainer);
        };
    }
}

customElements.define("login-container", LogInContainer)