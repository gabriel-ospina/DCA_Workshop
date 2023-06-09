import { Screens } from "../types/navigation";
import { AddPostAction, AuthActions, GetPostAction, LogInAction, LogOutAction, PostActions } from "../types/store";

export const logout = ():LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
};

export const login = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return{
        action: AuthActions.LOGIN,
        payload: payload
    }
};

export const setUserCredentials = (user: string) => {
    return {
      type: "SETUSER",
      payload: user,
    };
  };

// export const getPosts = async (): Promise<GetPostAction> => {
//     const posts = await PostService.get();
//     return {
//         action: PostActions.GET,
//         payload: posts
//     }
// };

export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
    return {
        action: PostActions.ADD,
        payload: payload
    }
};

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen
    }
};