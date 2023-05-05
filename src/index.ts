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
        alert(appState.screen)
        switch (appState.screen) {
            case Screens.MAIN:
              const main = this.ownerDocument.createElement("app-main");
              this.shadowRoot?.appendChild(main);
              break;
      
            case Screens.LOGIN:
              const login = this.ownerDocument.createElement("app-login");
              this.shadowRoot?.appendChild(login);
              break;
      
            default:
              break;
        }
    }
}

customElements.define('app-container', AppContainer)