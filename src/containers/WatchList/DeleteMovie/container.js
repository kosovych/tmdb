import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { openNotification } from 'Utils'

import { removeMovieErrorsSelector } from 'Store/watchList/selectors'
import {
  removeMovie as removeMovieAction,
  cleanupRemoveMovieErrors as cleanupRemoveMovieErrorsAction
} from 'Store/watchList/actions'
import DeleteMovieComponent from './component'

class DeleteMovie extends Component {
  onDeleteMovie = () => {
    const { removeMovie, movieId, title } = this.props
    return Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() { removeMovie(movieId, title) }
    })
  }

  render() {
    const {
      movieId,
      title,
      removeMovieErrors,
      cleanupRemoveMovieErrors
    } = this.props
    const config = {
      message: 'Error',
      description: `Cant remove "${title}" from Watchlist`,
      type: 'error',
      onClose() { cleanupRemoveMovieErrors(movieId) }
    }
    const error = removeMovieErrors.includes(movieId) && openNotification(config)
    return (
      <DeleteMovieComponent
        onClick={this.onDeleteMovie}
      >
        {error}
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
