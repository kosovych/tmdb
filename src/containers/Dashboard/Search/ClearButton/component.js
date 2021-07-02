import React from 'react'
import {
  CloseCircleOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ClearButton = ({ onClick, isVisible }) => (
  <button
    type="button"
    onClick={onClick}
    className={classnames('reset-btn', { 'd-none': !isVisible })}
  >
    <CloseCircleOutlined />
  </button>
)

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
}

export default ClearButton
