import { combineReducers } from 'redux';
import modalReducer from './modalReducer';

const combine = combineReducers({
    ...modalReducer
});

const reducers = (state, action) => combine(state, action);

export default reducers;
