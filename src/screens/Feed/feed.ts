import '../../components/export'
import firebase from '../../service/firebase';
import { Posts } from '../../types/Posts';

import { HeaderAtt } from '../../components/header/header';
import { MenuAtt } from '../../components/menu/menu';
import { NewMatchesAtt } from '../../components/newMatches/newMatches';
import { NewPostInputAtt } from '../../components/feedDisplay/newPostInput/newPostInput';
import { PostAtt } from '../../components/feedDisplay/post/post';

import { dataNewMatches } from '../../service/data/dataNewMatches';
import { dataPosts } from '../../service/data/dataPosts';

export default class Feed extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/Feed/feed.css">
        `;

        const feedScreen = this.ownerDocument.createElement("div");

            const header = this.ownerDocument.createElement("app-header");
                header.setAttribute(HeaderAtt.logo, "m30.2944 24.4737c0 .1133 0 .2256-.0074.3379-.1223 3.9223-1.7979 7.6403-4.6661 10.3538-2.8683 2.7134-6.6999 4.2053-10.6701 4.1545-3.9701-.0508-7.7614-1.6403-10.5576-4.4263-2.7962-2.786-4.3738-6.5457-4.3932-10.4698 0-.0322 0-.0644 0-.0967 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6777-1.0962 1.0043 0 1.9675.3943 2.6777 1.0962.7102.7019 1.1091 1.6538 1.1091 2.6464-.0151 1.9852.7685 3.895 2.1781 5.3093 1.4097 1.4143 3.33 2.2172 5.3387 2.2321 2.0086.0149 3.941-.7595 5.3719-2.1527 1.431-1.3932 2.2434-3.2912 2.2584-5.2764-.1115-5.143-7.0013-9.4605-15.1472-9.4605-1.0043 0-1.9675-.3944-2.6776-1.0962-.7102-.7019-1.1091-1.6538-1.1091-2.6464 0-.9927.399-1.9446 1.1091-2.6464.7102-.7019 1.6733-1.0962 2.6776-1.0962 5.838 0 11.3731 1.6332 15.5858 4.5993 2.1701 1.5293 3.892 3.3382 5.1164 5.3759 1.297 2.1593 1.9754 4.4704 2.0164 6.8667.0022.0405.0022.0894.0022.1383zm-7.5736-16.9884c2.0914 0 3.7868-1.6757 3.7868-3.7426 0-2.067-1.6954-3.7426-3.7868-3.7426-2.0914 0-3.7868 1.6756-3.7868 3.7426 0 2.067 1.6954 3.7426 3.7868 3.7426zm8.6771 20.0543c0-3.1979 1.1472-5.9307 3.4418-8.1985 2.2945-2.2677 5.0449-3.4017 8.251-3.4017 3.2665 0 6.0613 1.1339 8.3846 3.4017 2.3233 2.2677 3.4853 5.0151 3.486 8.2421 0 3.1701-1.1546 5.9034-3.4638 8.1995-2.3093 2.2962-5.082 3.4446-8.3184 3.4453-3.265 0-6.0448-1.1411-8.3394-3.4235-2.2945-2.2823-3.4418-5.0373-3.4418-8.265zm6.4859.0218c-.0018.6867.1341 1.367.3998 2.0016.2657.6345.6561 1.2108 1.1484 1.6954.4924.4846 1.077.868 1.7201 1.1279.6432.26 1.3321.3915 2.0268.3868 1.4411 0 2.6841-.5136 3.729-1.5407 1.0449-1.0272 1.567-2.2508 1.5663-3.6709 0-1.4181-.5294-2.6337-1.5883-3.647-1.0589-1.0133-2.3093-1.5202-3.751-1.521-1.3877.0035-2.718.5485-3.7013 1.5162-.9834.9678-1.5403 2.2802-1.5497 3.6517zm28.727-21.3476v6.3656h-2.6475c-.1768 0-.3682.1015-.5743.3046-.2062.2031-.3093.3763-.3093.5198v2.3547h3.1775v6.455h-3.1775v17.0082h-6.5302v-25.768c0-1.4832.4632-2.8573 1.3896-4.1221.8818-1.2281 2.1207-2.1622 3.5522-2.6781.7938-.2897 1.4705-.4349 2.0301-.4356l3.0894-.0042zm17.287 31.7501c-1.7651.8427-3.5453 1.2641-5.3399 1.2641-3.2368 0-6.0021-1.1453-8.2951-3.4359-2.293-2.2907-3.4405-5.0415-3.4418-8.2525 0-3.2395 1.1547-5.9899 3.4641-8.2515 2.3094-2.2615 5.0963-3.3923 8.3612-3.3923 2.4417 0 4.6862.7049 6.7323 2.1146 2.0461 1.4097 3.4805 3.2488 4.3031 5.5173.4709 1.3085.706 2.3987.706 3.2706v12.4297h-6.49v-1.2641zm-10.5907-10.4243c0 1.4257.522 2.6542 1.566 3.6855 1.0447 1.0313 2.2871 1.5473 3.7293 1.548 1.4409 0 2.684-.516 3.7287-1.548 1.0447-1.032 1.5673-2.2605 1.5667-3.6855 0-1.3952-.5148-2.6081-1.5444-3.6387-1.0296-1.0306-2.2649-1.547-3.7071-1.549-.6949-.0077-1.3846.1212-2.0284.3793-.6445.2581-1.23.6402-1.7239 1.124-.5115.4693-.9176 1.04-1.1907 1.6749-.2738.6349-.4087 1.3196-.3963 2.0096z");
                header.setAttribute(HeaderAtt.img, "https://cdn.discordapp.com/attachments/1010976865424506900/1088783125137604648/image.png");
            feedScreen?.appendChild(header);
            
            const lowContainer = this.ownerDocument.createElement("div");
            lowContainer.setAttribute("class","lowContainer")

                const SideSection = this.ownerDocument.createElement("section")
                SideSection.setAttribute("class","sideSection")
                    const menuSection = this.ownerDocument.createElement("app-menu")
                    menuSection.setAttribute(MenuAtt.mainicon, "M11.7187 13.0625C13.1467 12.2375 14.1667 10.4844 14.1667 6.875C14.1667 0.859375 11.3333 0 8.5 0C5.66667 0 2.83333 0.859375 2.83333 6.875C2.83333 10.4844 3.85334 12.2375 5.28134 13.0625C6.23334 13.6125 7.36667 13.75 8.5 13.75C9.63333 13.75 10.7667 13.6125 11.7187 13.0625ZM4.25 15.125C1.90279 15.125 0 16.9718 0 19.25C0 20.7688 1.26853 22 2.83333 22H14.1667C15.7315 22 17 20.7688 17 19.25C17 16.9718 15.0972 15.125 12.75 15.125H4.25Z");
                    menuSection.setAttribute(MenuAtt.chaticon, "M4.32655 2.57004C3.33503 2.57004 2.53125 3.38614 2.53125 4.39285V17.8808C2.53125 18.8875 3.33503 19.7036 4.32655 19.7036H5.59217V24.0375L11.6283 19.7036H22.6735C23.665 19.7036 24.4688 18.8875 24.4688 17.8808V4.39285C24.4688 3.38614 23.665 2.57004 22.6735 2.57004H4.32655ZM0 4.39285C0 1.96675 1.93706 0 4.32655 0H22.6735C25.0629 0 27 1.96675 27 4.39285V17.8808C27 20.3069 25.0629 22.2737 22.6735 22.2737H12.3294L6.13664 26.703C4.78303 27.5276 3.06092 26.5376 3.06092 24.9348L3.06092 22.0828C1.28892 21.5332 0 19.8599 0 17.8808V4.39285Z");
                    menuSection.setAttribute(MenuAtt.safeiconin, "M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5Z");
                    menuSection.setAttribute(MenuAtt.safeiconout, "M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2.91005C8.32291 2.91005 2.91005 8.32291 2.91005 15C2.91005 21.6771 8.32291 27.0899 15 27.0899C21.6771 27.0899 27.0899 21.6771 27.0899 15C27.0899 8.32291 21.6771 2.91005 15 2.91005Z");
                
                SideSection.appendChild(menuSection)

                const newMatchSection = this.ownerDocument.createElement("section")
                newMatchSection.setAttribute("class","newMatchSection")

                const newMatTitle = this.ownerDocument.createElement("h1");
                        const newMatText = this.ownerDocument.createTextNode("New Matches");
                        newMatTitle.appendChild(newMatText)
                    newMatchSection.appendChild(newMatTitle)

                const matchesCardSection = this.ownerDocument.createElement("section")
                matchesCardSection.setAttribute("class","matchesCardSection")
                    dataNewMatches.forEach((newm) => {
                        const newMatches = this.ownerDocument.createElement("new-matches")
                        newMatches.setAttribute(NewMatchesAtt.img, newm.img);
                        newMatches.setAttribute(NewMatchesAtt.age, String(newm.age));
                        newMatches.setAttribute(NewMatchesAtt.name, newm.name);
                        matchesCardSection?.appendChild(newMatches)
                        newMatchSection?.appendChild(matchesCardSection)
                    });
                    
                    SideSection.appendChild(newMatchSection)
                        
                    lowContainer.appendChild(SideSection)
                

                
                const rSideSection = this.ownerDocument.createElement("section")
                        rSideSection.setAttribute("class", "r-side-section")

                    const NavStateMenu = this.ownerDocument.createElement("app-statemenu")
                        NavStateMenu.setAttribute("class","state-menu")
                    rSideSection.appendChild(NavStateMenu)

                    const postsDiv = this.ownerDocument.createElement("div")
                        postsDiv.setAttribute("class","post-section")
                    
                        
                        const newPostSection = this.ownerDocument.createElement("post-input");
                            newPostSection.setAttribute(NewPostInputAtt.userimg, "https://cdn.discordapp.com/attachments/1010976865424506900/1088783125137604648/image.png");
                        postsDiv.appendChild(newPostSection);

                        const posts = await firebase.getPosts();
                        posts.forEach((p: Posts) => {
                          const postCard = this.ownerDocument.createElement("post-card")
                          postCard.setAttribute(PostAtt.text, p.message)
                          postsDiv.appendChild(postCard);
                        })
                    
                         
                    

                        // dataPosts.forEach((posts) => {
                        //     const postCard = this.ownerDocument.createElement("post-card")
                        //     postCard.setAttribute(PostAtt.name, posts.name)
                        //     postCard.setAttribute(PostAtt.profimg, posts.img)
                        //     postCard.setAttribute(PostAtt.text, posts.text)
                        //     postsDiv?.appendChild(postCard)
                        // })
                    rSideSection.appendChild(postsDiv)
                            



                lowContainer?.appendChild(rSideSection)
        feedScreen?.appendChild(lowContainer);

    this.shadowRoot?.appendChild(feedScreen);
        // musicData.forEach((musicC) => {
        //     const maincard = this.ownerDocument.createElement("app-maincard")
        //     maincard.setAttribute(mainCardAttributes.thumbnail, musicC.thumbnail)
        //     maincard.setAttribute(mainCardAttributes.mtitle, musicC.mtitle)
        //     this.shadowRoot?.appendChild(maincard)
        //     })
    }
}

customElements.define("app-feed", Feed)