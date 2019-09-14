import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Protected from "./components/Login/component/app.js";
import Landing from "./components/landing/index";
import Click from "./components/Click/index"
import './App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/protected" component={Protected} />
            <Route path ="/click" component ={Click} />
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
