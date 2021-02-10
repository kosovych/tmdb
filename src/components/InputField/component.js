import React from 'react'
import { Form, Input as AntInput } from 'antd'
import PropTypes from 'prop-types'

const InputField = ({
  placeholder, validateStatus, inputAs: Component, help, field, prefix, ...inputProps
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={help}
  >
    <Component
      {...field}
      {...inputProps}
      prefix={prefix}
      placeholder={placeholder}
    />
  </Form.Item>
)

InputField.propTypes = {
  placeholder: PropTypes.string,
  validateStatus: PropTypes.string,
  help: PropTypes.string,
  field: PropTypes.shape().isRequired,
  inputAs: PropTypes.elementType,
  prefix: PropTypes.element
}

InputField.defaultProps = {
  placeholder: null,
  validateStatus: null,
  help: null,
  prefix: null,
  inputAs: AntInput
}

export default InputField
