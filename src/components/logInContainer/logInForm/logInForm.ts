export default class LogInForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };

    render(){
        if (this.shadowRoot){

            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../src/components/logInContainer/logInForm/logInForm.css">
            `;

            const form = this.ownerDocument.createElement("form")
            
                const email = this.ownerDocument.createElement("input");
                email.placeholder = "E-mail";
                form.appendChild(email);

                const password = this.ownerDocument.createElement("input");
                password.placeholder = "Password";
                form.appendChild(password);
            
            this.shadowRoot.appendChild(form);
        }
    };
};

customElements.define("login-form", LogInForm)