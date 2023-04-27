import '../components/export'

import { mainCardAttributes } from '../components/mainCard/mainCard';

import { dataMainCard } from '../service/data/dataMainCard';

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
        this.shadowRoot.innerHTML = ``;
        
        dataMainCard.forEach((tagA) => {
            const maincard = this.ownerDocument.createElement("app-maincard")
            maincard.setAttribute(mainCardAttributes.tag1, tagA.inter.tag1)
            maincard.setAttribute(mainCardAttributes.tag2, tagA.inter.tag2)
            maincard.setAttribute(mainCardAttributes.tag3, tagA.inter.tag3)
            maincard.setAttribute(mainCardAttributes.tag4, tagA.inter.tag4)
            maincard.setAttribute(mainCardAttributes.tag5, tagA.inter.tag5)
            maincard.setAttribute(mainCardAttributes.thumbnail1, tagA.music.thumbnail1)
            maincard.setAttribute(mainCardAttributes.mtitle1, tagA.music.artist1)
            maincard.setAttribute(mainCardAttributes.thumbnail2, tagA.music.thumbnail2)
            maincard.setAttribute(mainCardAttributes.mtitle2, tagA.music.artist2)
            maincard.setAttribute(mainCardAttributes.thumbnail3, tagA.music.thumbnail3)
            maincard.setAttribute(mainCardAttributes.mtitle3, tagA.music.artist3)
            this.shadowRoot?.appendChild(maincard)
            })
        
        // musicData.forEach((musicC) => {
        //     const maincard = this.ownerDocument.createElement("app-maincard")
        //     maincard.setAttribute(mainCardAttributes.thumbnail, musicC.thumbnail)
        //     maincard.setAttribute(mainCardAttributes.mtitle, musicC.mtitle)
        //     this.shadowRoot?.appendChild(maincard)
        //     })
    }
}

customElements.define("app-main", Main)