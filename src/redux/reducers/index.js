import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import productReducer from './productReducer';

const combine = combineReducers({
    ...modalReducer,
    ...productReducer
});

const reducers = (state, action) => combine(state, action);

export default reducers;
