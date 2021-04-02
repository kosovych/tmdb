import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from 'Store/auth/actions'
import HeaderComponent from './component'

class Header extends Component {
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
  onLogout: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string
}

Header.defaultProps = {
  displayName: null,
  username: null,
  avatarUrl: null
}

const mapDispatchToProps = {
  onLogout: logout
}

export default connect(null, mapDispatchToProps)(Header)
