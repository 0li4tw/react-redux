import {FETCH_POSTS} from "../actions/actionTypes";

export default function (state = [], action) {
    if (action.type === FETCH_POSTS) {
        return action.payload
    }

    return state
};