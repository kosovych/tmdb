import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { movieImagesSelector, currentMovieIdSelector } from 'Store/movie/selectors'
import { getMovieImages as getMovieImagesAction } from 'Store/movie/actions'
import MovieImagesComponent from './component'

class MovieImages extends Component {
  componentDidMount() {
    const { getMovieImages, movieId } = this.props
    getMovieImages(movieId)
  }

  render() {
    const { movieImages, loading } = this.props
    return (
      <MovieImagesComponent
        loading={loading}
        movieImages={movieImages}
      />
    )
  }
}

MovieImages.propTypes = {
  getMovieImages: PropTypes.func.isRequired,
  movieId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  movieImages: PropTypes.arrayOf(
    PropTypes.shape()
  )
}

MovieImages.defaultProps = {
  movieImages: null,
  movieId: null
}

const mapStateToProps = (state, { movieId }) => ({
  movieId: currentMovieIdSelector(state),
  movieImages: movieImagesSelector(state, movieId)
})

const mapDispatchToProps = {
  getMovieImages: getMovieImagesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieImages)
