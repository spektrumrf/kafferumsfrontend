import React, { Component } from 'react';
import './App.css';

import Login from './Login';
import EnterPIN from './EnterPIN';
import Home from './Home';
import History from './History';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/pin' component={EnterPIN} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/history' component={History} />
            <Route render={
              function() {
                return <p>Not found</p>
              }
            } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
