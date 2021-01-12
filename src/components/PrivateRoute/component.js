import React from 'react'
import { Layout } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../../containers/Header'

const PrivateRoute = ({ component: Component, sessionID, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      sessionID ? (
        <>
          <Layout>
            <Header />
            <Layout.Content>
              <Component {...props} />
            </Layout.Content>
          </Layout>
        </>
      ) : <Redirect to="/login" />
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
