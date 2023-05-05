export const navReducer = (action: any, prevState: any) => {
    switch(action.type) {
        case "NAVIGATE":
            prevState.screen = action.payload
    }

    return prevState
}