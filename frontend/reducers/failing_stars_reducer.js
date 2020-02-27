import {RECEIVE_STAR, RECEIVE_ERRORS} from "../actions/failing_stars_actions"
//Theoretically we should have a normalized state shape;
// Considering the simple use case, I did a simplified version of the state shape;
const failingStarsReducer = (state={stars:[]}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_STAR:
            let newState = {...state};
            // consider that it contains a list of star names to show
            let starList = newState.stars.slice();
            // only last three stars are kept in the list
            // As the purpose is to display last three stars retrieved, so I decide that even if stars are duplicated, they will still be displayed
            // In case where we don't want to display duplicated values, we can add a check to see if duplication
            starList.unshift(action.payload.name)
            let length = starList.length;
            if (length > 3) starList.pop();
            newState.stars = starList
            return newState
        case RECEIVE_ERRORS:
            alert("Oops...Something went wrong. Please try it again!")
        default:
            return state;
    }
}

export default failingStarsReducer;