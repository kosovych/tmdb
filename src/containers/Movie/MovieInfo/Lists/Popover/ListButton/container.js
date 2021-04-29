import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListButtonComponent from './component'

class ListButton extends Component {
  listButtonHandler = () => {
    const { listId, onClick } = this.props
    onClick(listId)
  }

  render() {
    const { description } = this.props
    return (
      <ListButtonComponent
        onClick={this.listButtonHandler}
        description={description}
      />
    )
  }
}

ListButton.propTypes = {
  listId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
}

export default ListButton
