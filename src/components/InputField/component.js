import React from 'react'
import { Form, Input } from 'antd'
import PropTypes from 'prop-types'

const InputField = ({
  placeholder, validateStatus, help, field, prefix: Prefix, ...inputProps
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={help}
  >
    <Input
      {...field}
      {...inputProps}
      prefix={Prefix}
      placeholder={placeholder}
    />
  </Form.Item>
)

InputField.propTypes = {
  placeholder: PropTypes.string,
  validateStatus: PropTypes.string,
  help: PropTypes.string,
  field: PropTypes.shape().isRequired,
  prefix: PropTypes.element
}

InputField.defaultProps = {
  placeholder: null,
  validateStatus: null,
  help: null,
  prefix: null
}

export default InputField
