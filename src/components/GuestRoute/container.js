import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { sessionIdSelector } from 'Store/auth/selectors'
import GuestRouteComponent from './component'

const GuestRoute = props => (
  <GuestRouteComponent
    {...props}
  />
)

const mapStateToProps = state => ({
  sessionId: sessionIdSelector(state)
})

GuestRoute.propTypes = {
  sessionId: PropTypes.string
}

GuestRoute.defaultProps = {
  sessionId: null
}

export default connect(mapStateToProps)(GuestRoute)
