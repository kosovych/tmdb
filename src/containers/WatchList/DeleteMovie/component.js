import React from 'react'
import PropTypes from 'prop-types'
import { DeleteOutlined } from '@ant-design/icons'

const DeleteMovie = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="reset-btn"
  >
    <DeleteOutlined />
  </button>
)

DeleteMovie.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteMovie
