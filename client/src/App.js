import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Protected from "./components/Login/component/app.js";
import Landing from "./components/landing/index";
import Welcome from "./components/Welcome/index"; 
import Click from "./components/Click/index"
import './App.css';
import Inventory from './components/Inventory';
import NotFound from './components/NotFound/index';
// import NotFound from './NotFound.jsx/index';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/protected" component={Protected} />
            <Route exact path="/click" component={Click} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/inventory" component={Inventory} />
            
            
            
            <Route path="*" component={NotFound} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
