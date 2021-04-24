import {
    SHOW_LOADING_REQUEST,
    HIDE_LOADING_REQUEST,
    ERROR_LOADING_REQUEST
} from '../actions/types';

const request = (
    state = {
        sending: false
    },
    action
) => {
    switch (action.type) {
        case SHOW_LOADING_REQUEST:
            return {
                ...state,
                sending: true,
                error: {}
            };
        case HIDE_LOADING_REQUEST:
            return {
                ...state,
                sending: false,
                error: {}
            };
        case ERROR_LOADING_REQUEST:
            return {
                ...state,
                sending: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default {
    request
};
