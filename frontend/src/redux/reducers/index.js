import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import productReducer from './productReducer';
import requestReducer from './requestReducer';

const combine = combineReducers({
    ...modalReducer,
    ...productReducer,
    ...requestReducer
});

const reducers = (state, action) => combine(state, action);

export default reducers;
