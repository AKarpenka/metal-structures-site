import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import requestReducer from './requestSlice';
import productReducer from './productSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        request: requestReducer,
        product: productReducer
    }
});