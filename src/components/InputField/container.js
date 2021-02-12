import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import InputFieldComponent from './component'

class InputField extends Component {
  get validateStatus() {
    const { field, form } = this.props
    return getIn(form.errors, field.name) ? 'error' : null
  }

  get helpMessage() {
    const { field, form } = this.props
    return getIn(form.touched, field.name) && getIn(form.errors, field.name)
  }

  render() {
    const { field, ...restProps } = this.props
    return (
      <InputFieldComponent
        {...restProps}
        validateStatus={this.validateStatus}
        help={this.helpMessage}
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
