
const initialstate = 10;
const ActionReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "Increment":
            return state = state + 1;

        case "Decrement":
            return state = state - 1;
        default:
            return state;
    }
}

export default ActionReducer