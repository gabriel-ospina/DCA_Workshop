import { tagAttributes } from "./tag/tag";
import { musicCardAtt } from "./cardMusic/cardMusic";
import { userCardAtt } from "./userCard/userCard";

export enum mainCardAttributes{
    "tag1" = "tag1",
    "tag2" = "tag2",
    "tag3" = "tag3",
    "tag4" = "tag4",
    "tag5" = "tag5",
    "thumbnail1" = "thumbnail1",
    "mtitle1" = "mtitle1",
    "thumbnail2" = "thumbnail2",
    "mtitle2" = "mtitle2",
    "thumbnail3" = "thumbnail3",
    "mtitle3" = "mtitle3",
    "name" = "name",
    "age" = "age",
    "gender" = "gender",
    "udistance" = "udistance",
    "image" = "image"
}

export default class MainCard extends HTMLElement{

    tag1: string = mainCardAttributes.tag1;
    tag2: string = mainCardAttributes.tag2;
    tag3: string = mainCardAttributes.tag3;
    tag4: string = mainCardAttributes.tag4;
    tag5: string = mainCardAttributes.tag5;
    thumbnail1: string = mainCardAttributes.thumbnail1;
    mtitle1: string = mainCardAttributes.mtitle1;
    thumbnail2: string = mainCardAttributes.thumbnail2;
    mtitle2: string = mainCardAttributes.mtitle2;
    thumbnail3: string = mainCardAttributes.thumbnail3;
    mtitle3: string = mainCardAttributes.mtitle3;
    name: string = mainCardAttributes.name
    age: string = mainCardAttributes.age
    gender: string = mainCardAttributes.gender
    udistance: string = mainCardAttributes.udistance
    image: string = mainCardAttributes.image

    static get observedAttributes(){
        
        const atts: Record<mainCardAttributes, null> = {
            tag1: null,
            tag2: null,
            tag3: null,
            tag4: null,
            tag5: null,
            thumbnail1: null,
            mtitle1: null,
            thumbnail2: null,
            mtitle2: null,
            thumbnail3: null,
            mtitle3: null,
            name: null,
            age: null,
            gender: null,
            udistance: null,
            image: null,
        }

        return Object.keys(atts)
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    attributeChangedCallback( propName:mainCardAttributes, _:unknown, newValue:string){
        switch (propName) {
            default:
                this[propName] = newValue;
            break;
        }

        this.render()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/mainCard/mainCard.css">
        `;

        const mainCardSection = this.ownerDocument.createElement('section');
        mainCardSection.setAttribute("class","mainCardSection")

        const userCard = this.ownerDocument.createElement("app-ucardsection");
            userCard.setAttribute(userCardAtt.name, this.name);
            userCard.setAttribute(userCardAtt.age, this.age);
            userCard.setAttribute(userCardAtt.gender, this.gender);
            userCard.setAttribute(userCardAtt.udistance, this.udistance);
            userCard.setAttribute(userCardAtt.image, this.image);

        mainCardSection.appendChild(userCard);

        const tagSection = this.ownerDocument.createElement("section");
            const tag = this.ownerDocument.createElement("app-tag");
            tag.setAttribute(tagAttributes.tag1, this.tag1);
            tag.setAttribute(tagAttributes.tag2, this.tag2);
            tag.setAttribute(tagAttributes.tag3, this.tag3);
            tag.setAttribute(tagAttributes.tag4, this.tag4);
            tag.setAttribute(tagAttributes.tag5, this.tag5);
        tagSection.appendChild(tag);

        const musicCardSec = this.ownerDocument.createElement("section");
            const musicCard = this.ownerDocument.createElement("music-card");
            musicCard.setAttribute(musicCardAtt.thumbnail1, this.thumbnail1);
            musicCard.setAttribute(musicCardAtt.mtitle1, this.mtitle1);
            musicCard.setAttribute(musicCardAtt.thumbnail2, this.thumbnail2);
            musicCard.setAttribute(musicCardAtt.mtitle2, this.mtitle2);
            musicCard.setAttribute(musicCardAtt.thumbnail3, this.thumbnail3);
            musicCard.setAttribute(musicCardAtt.mtitle3, this.mtitle3);
        musicCardSec.appendChild(musicCard);
        

        mainCardSection.appendChild(tagSection);
        mainCardSection.appendChild(musicCardSec);


        this.shadowRoot?.appendChild(mainCardSection);
    }
}

customElements.define("app-maincard",MainCard)