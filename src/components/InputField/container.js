import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputFieldComponent from './component'

class InputField extends Component {
  getValidateStatus() {
    const { field, form: { errors } } = this.props
    return (errors[field.name]) ? 'error' : null
  }

  getHelp() {
    const { field, form: { errors, touched } } = this.props
    return touched[field.name] && errors[field.name]
  }

  render() {
    const { field, ...restProps } = this.props
    return (
      <InputFieldComponent
        {...restProps}
        validateStatus={this.getValidateStatus()}
        help={this.getHelp()}
        field={field}
      />
    )
  }
}

InputField.propTypes = {
  validateStatus: PropTypes.string,
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired
}

InputField.defaultProps = {
  validateStatus: null
}

export default InputField
