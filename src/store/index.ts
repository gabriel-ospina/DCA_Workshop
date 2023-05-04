import { AppState } from "../types/store";
import storage, { PersistanceKeys } from "../utils/storage"

const emptyState: AppState = {
    header: {
        img: "",
        logo: "",
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

};

export let appState = storage.get<AppState>({key: PersistanceKeys.STORE, defaultValue: emptyState});

let observers = [];

const notifyObservers = () = observers.forEach((obs) => obs.render());