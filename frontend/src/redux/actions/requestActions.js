import { SHOW_LOADING_REQUEST, HIDE_LOADING_REQUEST, ERROR_LOADING_REQUEST } from './types';
import api from '../../api/mails';
import { hideCallModal, hideSendModal } from './modalAction';

export const sending = () => ({ type: SHOW_LOADING_REQUEST, payload: {} });
export const sended = () => ({ type: HIDE_LOADING_REQUEST, payload: {} });
export const sendingError = data => ({ type: ERROR_LOADING_REQUEST, payload: data });

export const askForRecalling = userData => async dispatch => {
    try {
        dispatch(sending());
        await api.callMe(userData);
        dispatch(sended());
        dispatch(hideCallModal());
    } catch (error) {
        dispatch(sendingError(error.response));
    }
};

export const sendDesign = userData => async dispatch => {
    try {
        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('telephone', userData.telephone);
        formData.append('message', userData.message);
        formData.append('file', userData.file);
        dispatch(sending());
        await api.sendDesign(formData);
        dispatch(sended());
        dispatch(hideSendModal());
    } catch (error) {
        dispatch(sendingError(error.response));
    }
};
