//Modal isOpen state is handled here
import { SHOW_MODAL } from "../actions/actionTypes";

export default (state = false, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return !state;
        default:
            return state;
    }
};

