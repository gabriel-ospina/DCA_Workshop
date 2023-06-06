
export default class NavStateMenu extends HTMLElement {
    

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }


    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/navState/navState.css">

        <nav class="nav-state">
            <span>
                <button class="active-state">Match</button>
                <button>Feed</button>
            </span>
        </nav>
        `;

    }
}

customElements.define("app-statemenu", NavStateMenu)