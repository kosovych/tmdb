/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { withFormik } from 'formik'

import { sessionIdSelector, authLoadingSelector, errorMessageSelector } from 'Store/auth/selectors'
import { loginSubmit } from 'Store/auth/actions'
import LoginComponent from './component'

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().min(4, 'Password should contain at least 4 characters').required('Required')
})

class Login extends Component {
  render() {
    return (
      <LoginComponent {...this.props} />
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loading: authLoadingSelector(state),
  errorMessage: errorMessageSelector(state),
  sessionId: sessionIdSelector(state)
})

const mapDispatchToProps = {
  login: loginSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: (values, { props }) => props.login(values),
  validationSchema: LoginSchema
})(Login))
