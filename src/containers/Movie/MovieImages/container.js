import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { movieImagesSelector } from 'Store/movie/selectors'
import { getMovieImages as getMovieImagesAction } from 'Store/movie/actions'
import MovieImagesComponent from './component'

class MovieImages extends Component {
  componentDidMount() {
    const { getMovieImages, movieId } = this.props
    getMovieImages(movieId)
  }

  render() {
    const { movieImages } = this.props
    return (
      movieImages ? <MovieImagesComponent movieImages={movieImages} /> : null
    )
  }
}

MovieImages.propTypes = {
  getMovieImages: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  movieImages: PropTypes.arrayOf(
    PropTypes.shape()
  )
}

MovieImages.defaultProps = {
  movieImages: null
}

const mapStateToProps = (state, { movieId }) => ({
  movieImages: movieImagesSelector(state, movieId)
})

const mapDispatchToProps = {
  getMovieImages: getMovieImagesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieImages)
