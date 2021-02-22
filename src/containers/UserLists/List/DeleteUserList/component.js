import React from 'react'
import PropTypes from 'prop-types'
import { DeleteOutlined } from '@ant-design/icons'

const DeleteUserList = ({ onDeleteList }) => (
  <button
    type="button"
    aria-label="Remove List"
    className="reset-btn"
    onClick={onDeleteList}
  >
    <DeleteOutlined />
  </button>
)

DeleteUserList.propTypes = {
  onDeleteList: PropTypes.func.isRequired
}

export default DeleteUserList
