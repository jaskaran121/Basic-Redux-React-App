import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../Actions/postActions";
import PropTypes from "prop-types";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { title: "", body: "" } };
  }

  handleChange = e => {
    const tempData = { ...this.state.data };
    tempData[e.target.name] = e.target.value;
    this.setState({ data: tempData });
  };

  handleSubmit = e => {
    e.preventDefault();

    const postData = {
      title: this.state.data.title,
      body: this.state.data.body
    };
    this.props.dispatch({type:"New_Post_Action",payload:postData});
  };

  render() {
    return (
      <div>
        <h1>Post</h1>
        <form style={{ padding: "20px" }} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Title">Title </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Body">Body </label>
            <textarea
              className="form-control"
              name="body"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    createPost
  }
}
export default connect(
  null,
  mapDispatchToProps
)(PostForm);
