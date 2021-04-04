import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUser as getUserAction } from 'Store/auth/actions'
import {
  userIdSelector, sessionIdSelector
} from 'Store/auth/selectors'
import UserLayoutComponent from './component'

class UserLayout extends Component {
  componentDidMount() {
    const { userId, sessionId, getUser } = this.props
    if (!userId) {
      getUser(sessionId)
    }
  }

  render() {
    const {
      children,
      userId
    } = this.props
    return (
      <UserLayoutComponent
        userId={userId}
      >
        {children}
      </UserLayoutComponent>
    )
  }
}

UserLayout.propTypes = {
  children: PropTypes.element.isRequired,
  sessionId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  userId: PropTypes.number
}

UserLayout.defaultProps = {
  userId: null
}

const mapStateToProps = state => ({
  userId: userIdSelector(state),
  sessionId: sessionIdSelector(state)
})

const mapDispatchToProps = {
  getUser: getUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout)
