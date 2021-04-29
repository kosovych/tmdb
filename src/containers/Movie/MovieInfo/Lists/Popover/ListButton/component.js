import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const ListButton = ({ onClick, description }) => (
  <Button
    onClick={onClick}
    type="link"
    className="d-block"
  >
    {description}
  </Button>
)

ListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
}

export default ListButton
