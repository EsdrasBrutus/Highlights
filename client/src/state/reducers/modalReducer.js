//Modal isOpen state is handled here
export default (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return !state;
        default:
            return state;
    }
};

