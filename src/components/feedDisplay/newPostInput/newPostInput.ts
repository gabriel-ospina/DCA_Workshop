import firebase from "../../../service/firebase";
import { Posts } from "../../../types/Posts";

const formData: Omit<Posts, "id"> = {
    message: "",
  };

export enum NewPostInputAtt {
    "userimg" = "userimg"
}

export default class NewPostInput extends HTMLElement {
    userimg: string = NewPostInputAtt.userimg

    static get observedAttributes(){
        const attrs: Record <NewPostInputAtt, null> = {
            userimg: null
        }
        return Object.keys(attrs)
    };

    constructor(){
        super();
        this.attachShadow({ mode: "open"})
    };

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: NewPostInputAtt, _: string, newValue: string){
        switch (propName) {

            default:
                this[propName] = newValue;
            break;
        };
        this.render();
    }

    submitForm() {
        console.log(formData);
        firebase.addPost(formData);
      }

      changeMessage(e: any) {
        formData.message = e?.target?.value;
      }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="../src/components/feedDisplay/newPostInput/newPostInput.css">
            <form>
                <section class="upper-sec">
                    <div class="input-section">
                        <div class="user-image" style="background-image: url('${this.userimg}');"></div>
                        <input placeholder="What's up?">
                    </div>
                    <button>Publish</button>
                </section>
                <section class="lower-sec">  
                <section>
            </form>
        `;

        const form = this.ownerDocument.createElement("form")
            const upperSection = this.ownerDocument.createElement("section0")
            upperSection.setAttribute("class", "upper-sec")

                const inputSection = this.ownerDocument.createElement("div")
                inputSection.setAttribute("class", "input-section")

                    const imgDiv = this.ownerDocument.createElement("div")
                    imgDiv.setAttribute("class", "user-image")
                    imgDiv.style.backgroundImage = (NewPostInputAtt.userimg, this.userimg)
                    inputSection.appendChild(imgDiv)

                    const postInput = this.ownerDocument.createElement("input")
                    postInput.placeholder = "What's up?"
                    postInput.addEventListener("change", this.changeMessage)
                    inputSection.appendChild(postInput)

                upperSection.appendChild(inputSection)

                const pubBttn = this.ownerDocument.createElement("button")
                pubBttn.innerText="Publish"
                pubBttn.addEventListener("click", this.submitForm)
                upperSection.appendChild(pubBttn)

            form.appendChild(upperSection)
        this.shadowRoot?.appendChild(form)
    }
}

customElements.define("post-input", NewPostInput)