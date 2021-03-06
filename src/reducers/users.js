import {FETCH_USER} from "../actions/actionTypes";

export default function (state = [], action) {
    if (action.type === FETCH_USER) {
        return [...state, action.payload]
    }

    return state
};