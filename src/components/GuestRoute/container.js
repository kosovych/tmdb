import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import GuestRouteComponent from './component'

const GuestRoute = props => (
  <GuestRouteComponent
    {...props}
  />
)

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID
})

GuestRoute.propTypes = {
  sessionID: PropTypes.string
}

GuestRoute.defaultProps = {
  sessionID: null
}

export default connect(mapStateToProps)(GuestRoute)
