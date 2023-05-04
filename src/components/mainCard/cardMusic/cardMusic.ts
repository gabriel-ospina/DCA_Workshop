export enum musicCardAtt {
    "thumbnail1" = "thumbnail1",
    "mtitle1" = "mtitle1",
    "thumbnail2" = "thumbnail2",
    "mtitle2" = "mtitle2",
    "thumbnail3" = "thumbnail3",
    "mtitle3" = "mtitle3"
}

export default class AppMusicCard extends HTMLElement{
    thumbnail1?: string;
    mtitle1?: string;
    thumbnail2?: string;
    mtitle2?: string;
    thumbnail3?: string;
    mtitle3?: string;
    
    static get observedAttributes(){
        const musicAtt: Record<musicCardAtt, null> = {
            thumbnail1: null,
            mtitle1: null,
            thumbnail2: null,
            mtitle2: null,
            thumbnail3: null,
            mtitle3: null,
        } 
        return Object.keys(musicAtt)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }
    
    attributeChangedCallback(propName: musicCardAtt, _:string, newValue: string){
        this[propName] = newValue
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mainCard/cardMusic/cardMusic.css">
        <div>
            <div class="music-card" style='background-image: url("${this.thumbnail1}");'></div>
            <p>${this.mtitle1}</p>
        </div>
        <div>
            <div class="music-card" style='background-image: url("${this.thumbnail2}");'></div>
            <p>${this.mtitle2}</p>
        </div>
        <div>
            <div class="music-card" style='background-image: url("${this.thumbnail3}");'></div>
            <p>${this.mtitle3}</p>
        </div>
        `
    }

}

customElements.define("music-card", AppMusicCard)