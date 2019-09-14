import React, { Component } from "react";
import "./App.css";


class Welcome extends React.Component {
    render() {
        
            if (user) {
              return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger.</h1>;
          }
    }

  
export default Welcome;