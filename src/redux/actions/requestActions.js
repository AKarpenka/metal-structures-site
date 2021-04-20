import { SHOW_LOADING_REQUEST, HIDE_LOADING_REQUEST, ERROR_LOADING_REQUEST } from './types';
import api from '../../api/mails';
import { hideCallModal } from './modalAction';

export const sending = () => ({ type: SHOW_LOADING_REQUEST, payload: {} });
export const sended = () => ({ type: HIDE_LOADING_REQUEST, payload: {} });
export const sendingError = data => ({ type: ERROR_LOADING_REQUEST, payload: data });

export const askForRecalling = formData => async dispatch => {
    try {
        dispatch(sending());
        await api.callMe(formData);
        dispatch(sended());
        dispatch(hideCallModal());
    } catch (error) {
        dispatch(sendingError(error));
    }
};
