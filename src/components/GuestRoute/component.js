import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


const GuestRoute = ({ component: Component, sessionID, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      sessionID ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
)

GuestRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  sessionID: PropTypes.string
}

GuestRoute.defaultProps = {
  sessionID: null
}

export default GuestRoute
