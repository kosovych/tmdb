import React from 'react'
import {
  Form, Input
} from 'antd'
import PropTypes from 'prop-types'

const FormField = ({
  placeholder, validateStatus, help, field, prefix: PrefixComponent, ...inputProps
}) => (
  <Form.Item
    validateStatus={validateStatus}
    help={help}
  >
    <Input
      {...field}
      {...inputProps}
      prefix={PrefixComponent}
      placeholder={placeholder}
    />
  </Form.Item>
)

FormField.propTypes = {
  placeholder: PropTypes.string,
  validateStatus: PropTypes.string,
  help: PropTypes.string,
  field: PropTypes.shape().isRequired,
  prefix: PropTypes.element
}

FormField.defaultProps = {
  placeholder: null,
  validateStatus: null,
  help: null,
  prefix: null
}

export default FormField
