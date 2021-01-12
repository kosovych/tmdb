import React from 'react'
import PropTypes from 'prop-types'
import InputFieldComponent from './component'

const InputField = ({
  field, form: { errors, touched }, ...restProps
}) => (
  <InputFieldComponent
    {...restProps}
    validateStatus={(errors[field.name]) ? 'error' : null}
    help={touched[field.name] && errors[field.name]}
    field={field}
  />
)

InputField.propTypes = {
  validateStatus: PropTypes.string,
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired
}

InputField.defaultProps = {
  validateStatus: null
}

export default InputField
