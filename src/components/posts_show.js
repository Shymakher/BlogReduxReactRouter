import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeletePost() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => this.props.history.replace('/'));
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeletePost.bind(this)}
                >
                    Delete Post
                </button>
                <Link to="/">{`<`} Home</Link>
                <h3>Title {post.title}</h3>
                <h4>Categories {post.categories}</h4>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    console.log("posts: ", posts);
    return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);