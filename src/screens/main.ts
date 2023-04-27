import '../components/export'

import { HeaderAtt } from '../components/header/header';
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

        const header = this.ownerDocument.createElement("app-header")
        header.setAttribute(HeaderAtt.logo, "m30.2944 24.4737c0 .1133 0 .2256-.0074.3379-.1223 3.9223-1.7979 7.6403-4.6661 10.3538-2.8683 2.7134-6.6999 4.2053-10.6701 4.1545-3.9701-.0508-7.7614-1.6403-10.5576-4.4263-2.7962-2.786-4.3738-6.5457-4.3932-10.4698 0-.0322 0-.0644 0-.0967 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6777-1.0962 1.0043 0 1.9675.3943 2.6777 1.0962.7102.7019 1.1091 1.6538 1.1091 2.6464-.0151 1.9852.7685 3.895 2.1781 5.3093 1.4097 1.4143 3.33 2.2172 5.3387 2.2321 2.0086.0149 3.941-.7595 5.3719-2.1527 1.431-1.3932 2.2434-3.2912 2.2584-5.2764-.1115-5.143-7.0013-9.4605-15.1472-9.4605-1.0043 0-1.9675-.3944-2.6776-1.0962-.7102-.7019-1.1091-1.6538-1.1091-2.6464 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6776-1.0962 5.838 0 11.3731 1.6332 15.5858 4.5993 2.1701 1.5293 3.892 3.3382 5.1164 5.3759 1.297 2.1593 1.9754 4.4704 2.0164 6.8667.0022.0405.0022.0894.0022.1383zm-7.5736-16.9884c2.0914 0 3.7868-1.6757 3.7868-3.7426 0-2.067-1.6954-3.7426-3.7868-3.7426-2.0914 0-3.7868 1.6756-3.7868 3.7426 0 2.067 1.6954 3.7426 3.7868 3.7426zm8.6771 20.0543c0-3.1979 1.1472-5.9307 3.4418-8.1985 2.2945-2.2677 5.0449-3.4017 8.251-3.4017 3.2665 0 6.0613 1.1339 8.3846 3.4017 2.3233 2.2677 3.4853 5.0151 3.486 8.2421 0 3.1701-1.1546 5.9034-3.4638 8.1995-2.3093 2.2962-5.082 3.4446-8.3184 3.4453-3.265 0-6.0448-1.1411-8.3394-3.4235-2.2945-2.2823-3.4418-5.0373-3.4418-8.265zm6.4859.0218c-.0018.6867.1341 1.367.3998 2.0016.2657.6345.6561 1.2108 1.1484 1.6954.4924.4846 1.077.868 1.7201 1.1279.6432.26 1.3321.3915 2.0268.3868 1.4411 0 2.6841-.5136 3.729-1.5407 1.0449-1.0272 1.567-2.2508 1.5663-3.6709 0-1.4181-.5294-2.6337-1.5883-3.647-1.0589-1.0133-2.3093-1.5202-3.751-1.521-1.3877.0035-2.718.5485-3.7013 1.5162-.9834.9678-1.5403 2.2802-1.5497 3.6517zm28.727-21.3476v6.3656h-2.6475c-.1768 0-.3682.1015-.5743.3046-.2062.2031-.3093.3763-.3093.5198v2.3547h3.1775v6.455h-3.1775v17.0082h-6.5302v-25.768c0-1.4832.4632-2.8573 1.3896-4.1221.8818-1.2281 2.1207-2.1622 3.5522-2.6781.7938-.2897 1.4705-.4349 2.0301-.4356l3.0894-.0042zm17.287 31.7501c-1.7651.8427-3.5453 1.2641-5.3399 1.2641-3.2368 0-6.0021-1.1453-8.2951-3.4359-2.293-2.2907-3.4405-5.0415-3.4418-8.2525 0-3.2395 1.1547-5.9899 3.4641-8.2515 2.3094-2.2615 5.0963-3.3923 8.3612-3.3923 2.4417 0 4.6862.7049 6.7323 2.1146 2.0461 1.4097 3.4805 3.2488 4.3031 5.5173.4709 1.3085.706 2.3987.706 3.2706v12.4297h-6.49v-1.2641zm-10.5907-10.4243c0 1.4257.522 2.6542 1.566 3.6855 1.0447 1.0313 2.2871 1.5473 3.7293 1.548 1.4409 0 2.684-.516 3.7287-1.548 1.0447-1.032 1.5673-2.2605 1.5667-3.6855 0-1.3952-.5148-2.6081-1.5444-3.6387-1.0296-1.0306-2.2649-1.547-3.7071-1.549-.6949-.0077-1.3846.1212-2.0284.3793-.6445.2581-1.23.6402-1.7239 1.124-.5115.4693-.9176 1.04-1.1907 1.6749-.2738.6349-.4087 1.3196-.3963 2.0096z");
        header.setAttribute(HeaderAtt.img, "https://cdn.discordapp.com/attachments/1010976865424506900/1088783125137604648/image.png");
        this.shadowRoot?.appendChild(header);
        
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