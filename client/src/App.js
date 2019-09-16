import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Protected from "./components/Login/component/app.js";
import Landing from "./components/landing/index";
import Welcome from "./components/Welcome/index"; 
import './App.css';
import NotFound from './components/NotFound/index';
// import NotFound from './NotFound.jsx/index';

// User Auth
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  };


  render() {
    return (
      <Router>
        <div>
        <Provider store={store} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/protected" component={Protected} />
            <Route path="/welcome" component={Welcome} />
          
            {/* User Couldnt be found */}
            <Route path="*" component={NotFound} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}
  


export default App;
