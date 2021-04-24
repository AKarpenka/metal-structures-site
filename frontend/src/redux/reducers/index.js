import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import requestReducer from './requestReducer';

const combine = combineReducers({
    ...modalReducer,
    ...requestReducer
});

const reducers = (state, action) => combine(state, action);

export default reducers;
