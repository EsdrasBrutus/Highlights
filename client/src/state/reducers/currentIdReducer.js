import { SET_CURRENT_ID } from "../actions/actionTypes";

export default (state = null, action) => {
    switch (action.type) {
        case SET_CURRENT_ID:
            return action.payload;
        default:
            return state;
    }
};
