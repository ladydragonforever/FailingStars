import {requestStar} from "../util/failing_stars";

export const RECEIVE_STAR = "RECEIVE_STAR";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveStar = payload => ({
    type: RECEIVE_STAR,
    payload
})

const receiveErrors = payload => ({
    type: RECEIVE_ERRORS,
    payload
})



export const fetchStar = () => dispatch => requestStar()
    .then (response => dispatch(receiveStar(response.data)),
        err => dispatch(receiveErrors(err)))