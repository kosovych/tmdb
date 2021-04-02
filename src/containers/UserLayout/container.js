import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUser as getUserAction } from 'Store/auth/actions'
import {
  userIdSelector, sessionIdSelector, displayNameSelector, avatarUrlSelector, usernameSelector
} from 'Store/auth/selectors'
import UserLayoutComponent from './component'

class UserLayout extends Component {
  componentDidMount() {
    const { username, sessionID, getUser } = this.props
    if (!username) {
      getUser(sessionID)
    }
  }

  render() {
    const {
      children,
      displayName,
      username,
      avatarUrl,
      userId
    } = this.props
    return (
      <UserLayoutComponent
        displayName={displayName}
        username={username}
        avatarUrl={avatarUrl}
        userId={userId}
      >
        {children}
      </UserLayoutComponent>
    )
  }
}

UserLayout.propTypes = {
  children: PropTypes.element.isRequired,
  sessionID: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  userId: PropTypes.number
}

UserLayout.defaultProps = {
  displayName: null,
  username: null,
  avatarUrl: null,
  userId: null
}

const mapStateToProps = state => ({
  userId: userIdSelector(state),
  sessionID: sessionIdSelector(state),
  displayName: displayNameSelector(state),
  username: usernameSelector(state),
  avatarUrl: avatarUrlSelector(state)
})

const mapDispatchToProps = {
  getUser: getUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout)
