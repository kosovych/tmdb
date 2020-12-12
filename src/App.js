import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import StubsRoot from './components/stubs/StubsRoot'
import PrivateRoute from './components/PrivateRoute'

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute
        path="/"
        exact
        component={Dashboard}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/stubs"
        component={StubsRoot}
      />
    </Switch>
  </Router>
)

export default App
