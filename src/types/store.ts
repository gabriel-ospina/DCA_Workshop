import { Posts } from "./Posts";

export type AppState = {
    
    screen: string,
    
    header: {
        img: string,
    },

    user: {
        email: string,

        image: string,

        username: string,
        age: number,
        gender: string,
        udistance: string,

        description: string,
        interests: {
            tag1: string,
            tag2: string,
            tag3: string,
            tag4: string,
            tag5: string,
        },
        music: {
            artist1:{
                thumbnail: string,
                name: string,
            },
            artist2:{
                thumbnail: string,
                name: string,
            },
            artist3:{
                thumbnail: string,
                name: string,
            }
        }
    },

    feed: {
        message: string,
        img: string,
    },

    posts: Posts[]
};

export type Observer = ({render: () => void} & HTMLElement);

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
    "SIGNUP" = "SIGNUP",
}

export enum PostActions {
    "ADD" = "ADD",
    "GET" = "GET"
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
};

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
};

export interface AddPostAction {
    action: PostActions.ADD,
    payload: Posts
};

export interface GetPostAction {
    action: PostActions.GET,
    payload: Posts[]
};

export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostAction;