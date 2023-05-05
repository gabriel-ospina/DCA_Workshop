import '../components/export'



class LogIn extends HTMLElement{

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

            const loginDiv = this.ownerDocument.createElement("login-container")

         this.shadowRoot?.appendChild(LogInScreen);
        // musicData.forEach((musicC) => {
        //     const maincard = this.ownerDocument.createElement("app-maincard")
        //     maincard.setAttribute(mainCardAttributes.thumbnail, musicC.thumbnail)
        //     maincard.setAttribute(mainCardAttributes.mtitle, musicC.mtitle)
        //     this.shadowRoot?.appendChild(maincard)
        //     })
    }
}

customElements.define("app-login", LogIn)