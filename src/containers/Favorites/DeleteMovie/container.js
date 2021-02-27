import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { connect } from 'react-redux'

import { openNotification } from 'Utils'
import { removeMovieErrorsSelector } from 'Store/favorites/selectors'
import {
  removeMovie as removeMovieAction,
  cleanupRemoveMovieErrors as cleanupRemoveMovieErrorsAction
} from 'Store/favorites/actions'
import DeleteMovieComponent from './component'

class DeleteMovie extends Component {
  onDeleteMovie = () => {
    const { removeMovie, movieId, title } = this.props
    Modal.confirm({
      title: 'Do you want to delete this movie from the Favorites?',
      onOk() { removeMovie(movieId, title) }
    })
  }

  get error() {
    const {
      movieId, title, cleanupRemoveMovieErrors, removeMovieErrors
    } = this.props
    const config = {
      message: 'Error',
      description: `Can't remove "${title}" the from Favorites`,
      type: 'error',
      onClose: () => cleanupRemoveMovieErrors(movieId)
    }
    const error = removeMovieErrors.includes(movieId) && openNotification(config)
    return error
  }

  render() {
    return (
      <DeleteMovieComponent onClick={this.onDeleteMovie}>
        {this.error}
      </DeleteMovieComponent>
    )
  }
}

DeleteMovie.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeMovie: PropTypes.func.isRequired,
  removeMovieErrors: PropTypes.arrayOf(PropTypes.number),
  cleanupRemoveMovieErrors: PropTypes.func.isRequired
}

DeleteMovie.defaultProps = {
  removeMovieErrors: null
}

const mapStateToProps = state => ({
  removeMovieErrors: removeMovieErrorsSelector(state)
})

const mapDispatchToProps = {
  removeMovie: removeMovieAction,
  cleanupRemoveMovieErrors: cleanupRemoveMovieErrorsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovie)
