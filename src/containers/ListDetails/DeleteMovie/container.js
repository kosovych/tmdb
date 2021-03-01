import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { get } from 'lodash'

import { removeMovie as removeMovieAction } from 'Store/listDetails/actions'
import DeleteMovieComponent from './component'

class DeleteMovie extends Component {
  onDeleteMovie = () => {
    const { removeMovie, movieId, title } = this.props
    const listId = get(this.props, ['match', 'params', 'id'])
    Modal.confirm({
      title: `Do you want to delete "${title}" from this list?`,
      onOk() { removeMovie(movieId, listId) }
    })
  }

  render() {
    return (
      <DeleteMovieComponent onClick={this.onDeleteMovie} />
    )
  }
}

DeleteMovie.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeMovie: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  removeMovie: removeMovieAction
}

export default connect(null, mapDispatchToProps)(withRouter(DeleteMovie))
