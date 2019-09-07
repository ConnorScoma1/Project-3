import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";

// import store from './store';
// import { loadUser } from './actions/authActions';

import './App.css';

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
