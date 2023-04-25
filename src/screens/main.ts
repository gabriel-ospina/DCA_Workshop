import { mainCardAttributes } from '../components/mainCard/mainCard';
import '../components/export'

class Main extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = ``
    
        const maincard = this.ownerDocument.createElement("app-maincard")
        this.shadowRoot?.appendChild(maincard)
    }
}

customElements.define("app-main", Main)