import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./protectComponents/Nav"
import Dashboard from "./protectComponents/Dashbaord";



class Protected extends Component {
  render() {
    return (
      <Router>
        <div>
          
            <Route path="/protected" component={Nav} />
            <Route path="/protected" component={Dashboard} />
          
        </div>
      </Router>
    );
  }
}

export default Protected;
