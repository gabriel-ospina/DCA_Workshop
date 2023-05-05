import '../components/export'



export default class SignUp extends HTMLElement{

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

        const SignUpScreen = this.ownerDocument.createElement("div");

            const signupDiv = this.ownerDocument.createElement("signup-container");
            SignUpScreen.appendChild(signupDiv);

         this.shadowRoot?.appendChild(SignUpScreen);
    }
}

customElements.define("app-signup", SignUp)