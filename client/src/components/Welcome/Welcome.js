// Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
        <div>
        <h2>Welcome</h2>
        <Link to="/inventory">Inventory</Link>
       
        
        
        </div>
    );
  }
}

export default Welcome;