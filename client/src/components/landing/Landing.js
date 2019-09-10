import React, { Component } from "react";
import "./App.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-form">
          <h1 className="landing-title">Project 3</h1>
          <p>Inventory Management System</p>
          <p>We will make an inventory app for small businesses</p>
          <p>
            new messages we will utilize redux/state management, mysql for
            authentication, react and node as well express
          </p>
          <p>
            Click here to <span className="btn-animation"><a href="/login"> Login </a></span>
            or <span className="btn-animation"><a href="/login"> Sign Up </a></span>
          </p>
          <p>
              <span className="btn-animation github">
            <a href="https://github.com/ConnorScoma1/Project-3" target="_blank">
              GitHub
            </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
