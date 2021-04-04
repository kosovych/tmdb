import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import UserLayout from '../../containers/UserLayout'

const PrivateRoute = ({ component: Component, sessionId, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      sessionId ? (
        <UserLayout>
          <Component {...props} />
        </UserLayout>
      ) : <Redirect to="/login" />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  sessionId: PropTypes.string
}

PrivateRoute.defaultProps = {
  sessionId: null
}

export default PrivateRoute
