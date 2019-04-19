import React, { Component } from "react";

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

  handleSubmit = () => {
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <h3>Add Posts</h3>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
