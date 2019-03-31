import React from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions/posts";
import Post from "./Post";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    listPosts() {
        return this.props.posts.map(post => {
            return (
                <Post key={post.id} post={post} />
            )
        })
    }

    render() {
        return <div>{this.listPosts()}</div>
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)