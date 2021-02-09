import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from 'Store/auth/actions'
import HeaderComponent from './component'

const Header = ({ onLogout }) => (
  <HeaderComponent onLogout={onLogout} />
)

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  onLogout: logout
}

export default connect(null, mapDispatchToProps)(Header)
