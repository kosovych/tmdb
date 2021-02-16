import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import WatchList from './containers/WatchList'
import Favorites from './containers/Favorites'
import StubsRoot from './components/stubs/StubsRoot'
import PrivateRoute from './components/PrivateRoute'
import GuestRoute from './components/GuestRoute'

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute
        path="/"
        exact
        component={Dashboard}
      />
      <PrivateRoute
        path="/watchlist"
        exact
        component={WatchList}
      />
      <PrivateRoute
        path="/favorites"
        exact
        component={Favorites}
      />
      <GuestRoute
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
