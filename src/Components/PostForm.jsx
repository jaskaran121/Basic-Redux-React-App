import React, { Component } from "react";
import axios from "axios";
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
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then(response => console.log(response));
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

export default PostForm;
