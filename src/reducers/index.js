import posts from "./posts";
import {combineReducers} from "redux";
import users from "./users";

const rootReducer = combineReducers({
    posts,
    users
});

export default rootReducer