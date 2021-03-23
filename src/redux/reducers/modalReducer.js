import { SHOW_CALL_MODAL, HIDE_CALL_MODAL } from '../actions/types';

const modal = (state = { isShownCallPopup: false }, action) => {
    switch (action.type) {
        case SHOW_CALL_MODAL:
            return {
                ...state,
                isShownCallPopup: true
            };
        case HIDE_CALL_MODAL:
            return {
                ...state,
                isShownCallPopup: false
            };
        default:
            return state;
    }
};

export default {
    modal
};
