import React, { Component } from "react";
import "./App.css";

import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <div>This a Dashboard Component</div>;
    } else if (this.state.activeTab === 1) {
      return <div>This is Inventory</div>;
    } else if (this.state.activeTab === 2) {
      return <div>This is Manage</div>;
    } else if (this.state.activeTab === 3) {
      return <div>This is Account</div>;
    } else if (this.state.activeTab === 4) {
      return <div>This is Support</div>;
    } else if (this.state.activeTab === 5) {
      return <div>This is Contact</div>;
    }
  }
  render() {
    return (
      <div className="nav-background">
        <ul className="nav-ul">
          <Tab className="nav-item"> Dashboard </Tab>
          <Tab className="nav-item"> Inventory </Tab>
          <Tab className="nav-item"> Manage </Tab>
          <Tab className="nav-item"> Account </Tab>
          <Tab className="nav-item"> Support </Tab>
          <Tab className="nav-item"> Contact </Tab>
        </ul>
      </div>
    );
  }
}

export default Nav;
