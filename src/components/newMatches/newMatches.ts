export enum NewMatchesAtt{
    "img"="img",
    "name"="name",
    "age"="age",
}

export default class NewMatches extends HTMLElement{
    img?: string;
    name?: string;
    age?: number;

    static get observedAttributes(){
        const menuattrs: Record<NewMatchesAtt, null> = {
            img: null,
            name: null,
            age: null,
        }
        return Object.keys(menuattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: NewMatchesAtt,
        _: string,
        newValue: string
    ){
    
        switch (propName) {
            case NewMatchesAtt.age: 
                this.age = newValue? Number(newValue) : undefined;
                break;
        
            default:
                this[propName] = newValue;
                break;
        }

        

        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/newMatches/newMatches.css">

            <div class="container" style="background-image: url(${this.img});">
                <div class="text">
                    <span>
                        <h3>${this.name}</h3>
                        <p>${this.age}</p>
                    </span>
                </div>
            </div>
            `;
        }
    }
}

customElements.define("new-matches", NewMatches);