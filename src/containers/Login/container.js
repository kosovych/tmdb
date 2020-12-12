/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoginComponent from './component'
import { loginSubmit } from '../../store/auth/actions'

class Login extends Component {
  render() {
    return (
      <LoginComponent
        {...this.props}
      />
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  errorTxt: state.auth.errorTxt,
  sessionID: state.auth.sessionID
})

const mapDispatchToProps = {
  login: loginSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
