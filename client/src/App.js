import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Protected from "./components/Login/component/app.js"


import './App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/protected" component={Protected} />
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
