import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout, getUser as getUserAction } from 'Store/auth/actions'
import HeaderComponent from './component'

class Header extends Component {
  componentWillMount() {
    const { username, sessionID, getUser } = this.props
    if (!username) {
      getUser(sessionID)
    }
  }

  render() {
    const {
      onLogout,
      displayName,
      username,
      avatarUrl
    } = this.props
    return (
      <HeaderComponent
        onLogout={onLogout}
        displayName={displayName}
        username={username}
        avatarUrl={avatarUrl}
      />
    )
  }
}

Header.propTypes = {
  sessionID: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string
}

Header.defaultProps = {
  displayName: null,
  username: null,
  avatarUrl: null
}

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID,
  displayName: state.auth.displayName,
  username: state.auth.username,
  avatarUrl: state.auth.avatarUrl
})

const mapDispatchToProps = {
  onLogout: logout,
  getUser: getUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
