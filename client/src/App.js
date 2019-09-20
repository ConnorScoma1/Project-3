import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Protected from "./components/Login/component/app.js";
import Landing from "./components/landing/index";
import "./App.css";
import NotFound from "./components/NotFound/index";
// import NotFound from './NotFound.jsx/index';

// User Auth
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* Default Route */}
          <Route exact path="/" component={Landing} />

          {/* User Login Component */}
          <Route exact path="/login" component={Login} />

          {/* Protected Route for user */}
          <Route path="/protected" component={Protected} />

        </Router>
      </Provider>
    );
  }
}

export default App;
