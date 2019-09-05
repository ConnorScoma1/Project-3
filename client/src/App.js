import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  
}

export default App;
