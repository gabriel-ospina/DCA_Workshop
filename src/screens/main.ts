import { mainCardAttributes } from '../components/mainCard/mainCard';
import '../components/export'
import { dataTag } from '../service/data/dataTag/dataTag';
import { tagAttributes } from '../components/tag/tag';

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
        
        dataTag.forEach((tagA) => {
            const maincard = this.ownerDocument.createElement("app-maincard")
            maincard.setAttribute(mainCardAttributes.tag, tagA.tag)
            this.shadowRoot?.appendChild(maincard)
            })
    }
}

customElements.define("app-main", Main)