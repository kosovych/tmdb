import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PrivateRouteComponent from './component'

const PrivateRoute = props => (
  <PrivateRouteComponent
    {...props}
  />
)

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID
})

PrivateRoute.propTypes = {
  sessionID: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(PrivateRoute)
