import { Screens } from "../types/navigation";
import { Actions, AppState, Observer } from "../types/store";
import storage, { PersistanceKeys } from "../utils/storage"
import { reducer } from "./reducers";

const emptyState: AppState = {
    
    screen: Screens.LOGIN,
    
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

    posts: []

};

export let appState = storage.get<AppState>({key: PersistanceKeys.STORE, defaultValue: emptyState});

// Store

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((obs) => obs.render());

//Lanzar acciones

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action,clone);
    appState = newState;

    notifyObservers();
};