import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

export default class LogInContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };

    navtoMain() {
        dispatch(navigate(Screens.MAIN));
    };
   
    navtoSignUp() {
        dispatch(navigate(Screens.SIGNUP));
    };

    render(){
        if (this.shadowRoot){

            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../src/components/logInContainer/logInContainer.css">
            `;

            const loginContainer = this.ownerDocument.createElement("section");
            loginContainer.setAttribute("class","login-card")

                const title = this.ownerDocument.createElement("h1");
                title.innerText = "Log In";
                loginContainer.appendChild(title);

                const loginForm = this.ownerDocument.createElement("login-form");
                loginContainer.appendChild(loginForm);

                const loginBtn = this.ownerDocument.createElement("button");
                loginBtn.innerText = "login";
                loginBtn.addEventListener("click", this.navtoMain);
                loginContainer.appendChild(loginBtn)

                const signUpLink = this.ownerDocument.createElement("p");
                signUpLink.innerText="or Sign Up";
                signUpLink.addEventListener("click", this.navtoSignUp)
                loginContainer.appendChild(signUpLink);

            this.shadowRoot.appendChild(loginContainer);
        };
    }
}

customElements.define("login-container", LogInContainer)