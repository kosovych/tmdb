import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ as: Component, ...restProps }) => (
  <Component {...restProps} />
)

Icon.propTypes = {
  as: PropTypes.elementType.isRequired
}

export default Icon
