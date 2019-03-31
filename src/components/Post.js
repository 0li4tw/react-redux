import React from "react";
import {fetchPost} from "../actions/posts";
import {connect} from "react-redux";

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        const post = this.props.post;

        if(!post) {
            return null;
        }

        return (
            <h1>{post.title}</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const postId = parseInt(ownProps.match.params.id);

    return {post: state.posts.find(post => post.id === postId)}
};

export default connect(mapStateToProps, {fetchPost})(Post);