import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions/postActions";

class Posts extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch({type:"Fetch_Posts_Action"});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchPosts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
