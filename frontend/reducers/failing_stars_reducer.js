import {RECEIVE_STAR, RECEIVE_ERRORS} from "../actions/failing_stars_actions"

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
            starList.push(action.payload.name)
            let length = starList.length;
            if (length > 3) starList.shift();
            newState.stars = starList
            return newState
        case RECEIVE_ERRORS:
            alert("Oups...Something is wrong. Please Try it again!")
        default:
            return state;
    }
}

export default failingStarsReducer;