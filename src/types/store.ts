export type AppState = {
    header: {
        img: string,
        logo: string,
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

    screen: string
}

export type Observer = ({render: () => void} & HTMLElement);