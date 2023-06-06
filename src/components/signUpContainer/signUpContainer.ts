import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { newUser } from "./siginUpForm/signUpForm";
import Firebase from "../../service/firebase";


export default class SignUpContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };


    async handleSigninButton() {
        await Firebase.registerUser(newUser);
        dispatch(navigate(Screens.MAIN));
        alert("you have registered successfully")
    }

    navtoLogin() {
        dispatch(navigate(Screens.LOGIN));
    };

    render(){
        if (this.shadowRoot){

            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../src/components/signUpContainer/signUpContainer.css">
            `;

            const signupContainer = this.ownerDocument.createElement("section");
            signupContainer.setAttribute("class","signup-card")

                const title = this.ownerDocument.createElement("h1");
                title.innerText = "Sign Up";
                signupContainer.appendChild(title);

                const signupForm = this.ownerDocument.createElement("signup-form");
                signupContainer.appendChild(signupForm);

                const signupBtn = this.ownerDocument.createElement("button");
                signupBtn.innerText = "login";
                signupBtn.addEventListener("click", this.handleSigninButton);
                signupContainer.appendChild(signupBtn)

                const logInLink = this.ownerDocument.createElement("p");
                logInLink.innerText="You already have an account?";
                logInLink.addEventListener("click", this.navtoLogin)
                signupContainer.appendChild(logInLink);

            this.shadowRoot.appendChild(signupContainer);
        };
    }
}

customElements.define("signup-container", SignUpContainer)