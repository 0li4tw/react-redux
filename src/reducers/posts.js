import {FETCH_POST, FETCH_POSTS} from "../actions/actionTypes";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case FETCH_POST:
            const newPost = action.payload;
            let replaced = false;

            let posts = state.map(post => {
                if (post.id === newPost.id) {
                    replaced = true;
                    return newPost;
                }

                return post;
            });

            if (!replaced) {
                posts.push(newPost);
            }

            return posts;
        default:
            return state
    }
}