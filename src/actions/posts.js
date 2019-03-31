import _ from 'lodash';
import {FETCH_POST, FETCH_POSTS} from "./actionTypes";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import {fetchUser} from "./users";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('posts');

    dispatch({
        type: FETCH_POSTS,
        payload: response.data
    });
};

export const fetchPost = id => async dispatch => {
    const response = await jsonPlaceholder.get(`posts/${id}`);

    dispatch({
        type: FETCH_POST,
        payload: response.data
    });
};