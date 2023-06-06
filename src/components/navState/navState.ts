import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

export default class NavStateMenu extends HTMLElement {
    

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    navtoMain() {
        dispatch(navigate(Screens.MAIN));
    };

    navtoFeed() {
        dispatch(navigate(Screens.FEED));
    };

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/navState/navState.css">
        `;

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("class", "nav-state");

            const span = this.ownerDocument.createElement("span")
                
                const matchButton = this.ownerDocument.createElement("button")
                matchButton.setAttribute("class", "active-state")
                matchButton.innerText = "Match"
                matchButton.addEventListener("click", this.navtoMain)
                span.appendChild(matchButton)
                
                const feedButton = this.ownerDocument.createElement("button")
                feedButton.innerText = "Feed"
                feedButton.addEventListener("click", this.navtoFeed)
                span.appendChild(feedButton)

            nav.appendChild(span)

        this.shadowRoot?.appendChild(nav);


    }
}

customElements.define("app-statemenu", NavStateMenu)