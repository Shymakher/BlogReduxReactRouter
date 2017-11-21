import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={`posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Main Page</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("posts: ", state.posts);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);