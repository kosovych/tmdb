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
  sessionID: sessionIdSelector(state)
})

PrivateRoute.propTypes = {
  sessionID: PropTypes.string
}

PrivateRoute.defaultProps = {
  sessionID: null
}

export default connect(mapStateToProps)(PrivateRoute)
