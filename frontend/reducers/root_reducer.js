import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    modal: modalReducer,
    // entities: starReducer
});

export default rootReducer;
