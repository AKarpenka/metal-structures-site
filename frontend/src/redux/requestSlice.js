import { createSlice } from '@reduxjs/toolkit';
import api from '../api/mails';

const initialState = {
    sending: false, error: {}
};

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        sending: (state, action) => {
            state.sending = true;
            state.error = {};
        },
        sended: (state, action) => {
            state.sending = false;
            state.error = {};
        },
        sendingError: (state, action) => {
            state.sending = false;
            state.error = action.payload;
        },
    },
});

export const {
    sending,
    sended,
    sendingError
} = requestSlice.actions;

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

export default requestSlice.reducer;
