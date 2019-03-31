import React from "react";
import {connect} from "react-redux";

class Post extends React.Component {

    displayUserHeader() {
        if(!this.props.user) {
            return null
        }

        return <h4>{this.props.user.name}</h4>
    }

    render() {
        const post = this.props.post;
        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.title}</p>
                {this.displayUserHeader()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.post.userId)}
};

export default connect(mapStateToProps)(Post);