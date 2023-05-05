export default class SignUpForm extends HTMLElement {
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
            <link rel="stylesheet" href="../src/components/signUpContainer/siginUpForm/signUpForm.css">
            `;

            const form = this.ownerDocument.createElement("form")
            
                const name = this.ownerDocument.createElement("input");
                name.placeholder = "Name";
                form.appendChild(name);
                
                const lastname = this.ownerDocument.createElement("input");
                lastname.placeholder = "Lastname";
                form.appendChild(lastname);
                
                const age = this.ownerDocument.createElement("input");
                age.placeholder = "Age";
                form.appendChild(age);
                
                const username = this.ownerDocument.createElement("input");
                username.placeholder = "Username";
                form.appendChild(username);

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

customElements.define("signup-form", SignUpForm)