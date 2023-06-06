export const navReducer = (action: any, prevState: any) => {
    switch(action.type) {
        case "NAVIGATE":
            prevState.screen = action.payload

            case "SETUSER":
                prevState.user = action.payload;
                break;
    }
    

    return prevState
}