import {
    SHOW_CALL_MODAL,
    HIDE_CALL_MODAL,
    SHOW_SEND_MODAL,
    HIDE_SEND_MODAL
} from '../actions/types';

const modal = (state = { isShownCallPopup: false, isShownSendPopup: false }, action) => {
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
        case SHOW_SEND_MODAL:
            return {
                ...state,
                isShownSendPopup: true
            };
        case HIDE_SEND_MODAL:
            return {
                ...state,
                isShownSendPopup: false
            };
        default:
            return state;
    }
};

export default {
    modal
};
