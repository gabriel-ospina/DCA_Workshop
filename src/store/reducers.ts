import { Actions, AppState, AuthActions, PostActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }
            break;

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                header: {
                    img: "",
                },
            
                user: {
                    email: "",
            
                    image: "",
            
                    username: "",
                    age: 0,
                    gender: "",
                    udistance: "",
            
                    description: "",
                    interests: {
                        tag1: "",
                        tag2: "",
                        tag3: "",
                        tag4: "",
                        tag5: "",
                    },
                    music: {
                        artist1:{
                            thumbnail: "",
                            name: "",
                        },
                        artist2:{
                            thumbnail: "",
                            name: "",
                        },
                        artist3:{
                            thumbnail: "",
                            name: "",
                        }
                    }
                },
            
                feed: {
                    message: "",
                    img: "",
                },
            
                screen: "main"
            
            }
            break;

            case PostActions.ADD:
                return {
                    ...currentState,
                    posts: [
                        payload,
                        ...currentState.posts,
                    ]
                    
                }
            break;
            
            case PostActions.GET:
                return {
                    ...currentState,
                    posts: payload
                }
            break;
    
        default:
            return currentState;
            break;
    }
}