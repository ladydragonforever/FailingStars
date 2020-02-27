import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import failingStarsReducer from './failing_stars_reducer';



const rootReducer = combineReducers({
    modal: modalReducer,
    failingStars: failingStarsReducer
});

export default rootReducer;
