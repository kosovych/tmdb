import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { connect } from 'react-redux'

import { removeMovie as removeMovieAction } from 'Store/favorites/actions'
import DeleteMovieComponent from './component'

class DeleteMovie extends Component {
  onDeleteMovie = () => {
    const { removeMovie, movieId, title } = this.props
    Modal.confirm({
      title: 'Do you want to delete this movie from the Favorites?',
      onOk() { removeMovie(movieId, title) }
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

export default connect(null, mapDispatchToProps)(DeleteMovie)
