import "./components/export"
import "./screens/main"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-main');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)