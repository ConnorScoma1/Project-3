import React, { Component } from "react";
import "./app.css"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./protectComponents/Dashbaord/Dashboard";
import Inventory from "./protectComponents/Inventory";
import Manage from "./protectComponents/Manage";
import Account from "./protectComponents/Account";
import Support from "./protectComponents/Support";


class Protected extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="nav-background">
            <ul className="nav-ul">
              <li>
                {/* <a href="/protected">Dashboard</a> */}
                <Link to={'/protected'} className="nav-links"> Dashboard </Link>
              </li>
              <li>
                {/* <a href="/Inventory">Inventory</a> */}
                <Link to={'/protected/inventory'} className="nav-links"> Inventory </Link>
              </li>
              <li>
                {/* <a href="/Manage">Manage</a> */}
                <Link to={'/protected/manage'} className="nav-links"> Manage </Link>
              </li>
              <li>
                {/* <a href="/Account">Account</a> */}
                <Link to={'/protected/account'} className="nav-links"> Account </Link>
              </li>
              <li>
                {/* <a href="/Support">Support</a> */}
                <Link to={'/protected/support'} className="nav-links"> Support </Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/protected" component={Dashboard}/>
            <Route path="/protected/inventory" component={Inventory}/>
            <Route path="/protected/manage" component={Manage}/>
            <Route path="/protected/account" component={Account} />
            <Route path="/protected/support'" component={Support} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Protected;
