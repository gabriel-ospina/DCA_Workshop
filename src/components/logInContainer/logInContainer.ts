import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { credentials } from "./logInForm/logInForm";
import Firebase from "../../service/firebase";

export default class LogInContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };

    async  handleLoginButton() {
        //alert(credentials.email + "=" + credentials.password);
        //credentials.pageIni= Screens.MAIN;
        const resp: any = await Firebase.loginUser(credentials);
        //alert('respuesta externa');
        //aert(resp);
        // if (resp) {
        //   //alert("You have logged in successfully");
        //   dispatch(navigate(Screens.MAIN));
        // } else {
        //   alert("This is not a registered user");
        // }
        // console.log(resp);
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
                loginBtn.addEventListener("click", this.handleLoginButton);
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