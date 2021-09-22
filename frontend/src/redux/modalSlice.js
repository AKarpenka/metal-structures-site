import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShownCallPopup: false,
    isShownSendPopup: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showCallModal: (state, action) => {
            state.isShownCallPopup = true;
        },
        hideCallModal: (state, action) => {
            state.isShownCallPopup = false;
        },
        showSendModal: (state, action) => {
            state.isShownSendPopup = true;
        },
        hideSendModal: (state, action) => {
            state.isShownSendPopup = false;
        },
    },
});

export const {
    showCallModal,
    hideCallModal,
    showSendModal,
    hideSendModal
} = modalSlice.actions;

export default modalSlice.reducer;
