
const initialstate = 0;
export const ActionReducer = function (state = initialstate, action) {
    switch (action.type) {
        case Increment:
            return state = state + 1;

        case Decrement:
            return state = state - 1;
        default:
            return state;
    }
}