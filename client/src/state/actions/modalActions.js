//show/hide modal window
export const toggleModal = (modalType, modalProps) => {
    return {
        type: 'TOGGLE_MODAL',
        modalType,
        modalProps,
    };
};
