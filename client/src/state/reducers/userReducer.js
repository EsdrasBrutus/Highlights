import { SIGN_IN, SIGN_UP } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload
            };
        case SIGN_UP:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

