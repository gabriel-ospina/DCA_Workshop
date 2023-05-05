import "./components/export"
import "./screens/exports"

import { addObserver, appState } from "./store";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML=``;
        switch (appState.screen) {
            case Screens.MAIN:
              const main = this.ownerDocument.createElement("app-main");
              this.shadowRoot?.appendChild(main);
              break;
      
            case Screens.LOGIN:
              const login = this.ownerDocument.createElement("app-login");
              this.shadowRoot?.appendChild(login);
              break;
            
            case Screens.SIGNUP:
              const signup = this.ownerDocument.createElement("app-signup");
              this.shadowRoot?.appendChild(signup);
              break;
      
            case Screens.FEED:
              const feed = this.ownerDocument.createElement("app-feed");
              this.shadowRoot?.appendChild(feed);
              break;
      
            default:
              break;
        }
    }
}

customElements.define('app-container', AppContainer)