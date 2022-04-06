//show/hide modal window
import { SHOW_MODAL } from './actionTypes';

export const showModal = (modalType, modalProps) => {
    return {
        type: SHOW_MODAL,
        modalType,
        modalProps
    };
}