import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const GuestRoute = ({ component: Component, sessionId, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      sessionId ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
)

GuestRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  sessionId: PropTypes.string
}

GuestRoute.defaultProps = {
  sessionId: null
}

export default GuestRoute
