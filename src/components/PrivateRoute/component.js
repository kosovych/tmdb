import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, sessionID, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      sessionID ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  sessionID: PropTypes.string
}

PrivateRoute.defaultProps = {
  sessionID: null
}

export default PrivateRoute
