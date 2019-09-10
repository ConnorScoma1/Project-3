import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./protectComponents/Nav"


class Protected extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/protected" component={Nav} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Protected;
