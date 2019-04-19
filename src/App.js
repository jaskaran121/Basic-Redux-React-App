import React, { Component } from "react";
import "./App.css";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PostForm />
        <hr />
        <Posts />
      </React.Fragment>
    );
  }
}

export default App;
