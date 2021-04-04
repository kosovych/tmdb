import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { sessionIdSelector } from 'Store/auth/selectors'
import PrivateRouteComponent from './component'

const PrivateRoute = props => (
  <PrivateRouteComponent
    {...props}
  />
)

const mapStateToProps = state => ({
  sessionId: sessionIdSelector(state)
})

PrivateRoute.propTypes = {
  sessionId: PropTypes.string
}

PrivateRoute.defaultProps = {
  sessionId: null
}

export default connect(mapStateToProps)(PrivateRoute)
