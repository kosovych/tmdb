/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-extra-semi */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import StubsRoot from './components/stubs/StubsRoot'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/stubs">
            <StubsRoot />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
