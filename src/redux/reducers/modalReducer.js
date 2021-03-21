import { SHOW_CALL_MODAL, HIDE_CALL_MODAL } from '../actions/types';

const modal = (state = { showCallModal: false }, action) => {
    switch (action.type) {
        case SHOW_CALL_MODAL:
            return {
                ...state,
                showCallModal: true
            };
        case HIDE_CALL_MODAL:
            return {
                ...state,
                showCallModal: false
            };
        default:
            return state;
    }
};

export default {
    modal
};
