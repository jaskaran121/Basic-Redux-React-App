import React, { Component } from "react";
import "./App.css";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <PostForm />
          <hr />
          <Posts />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
