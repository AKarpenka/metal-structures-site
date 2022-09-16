import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import requestReducer from './requestSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        request: requestReducer
    }
});