import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { genresMovieSelector, movieInfoSelector } from 'Store/movie/selectors'
import { getMovie as getMovieAction } from 'Store/movie/actions'
import MovieInfoComponent from './component'


class MovieInfo extends Component {
  componentDidMount() {
    const { getMovie, movieId } = this.props
    getMovie(movieId)
  }

  render() {
    const { info, genres } = this.props
    return (info ? (
      <MovieInfoComponent
        info={info}
        genres={genres}
      />
    ) : null)
  }
}

MovieInfo.propTypes = {
  info: PropTypes.shape({
    originalTitle: PropTypes.string,
    originalName: PropTypes.string,
    originalLanguage: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    firstAirDate: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
  }),
  getMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  )
}

MovieInfo.defaultProps = {
  info: {
    originalTitle: null,
    originalName: null,
    originalLanguage: null,
    overview: null,
    releaseDate: null,
    firstAirDate: null,
    runtime: null,
    budget: null,
    revenue: null
  },
  genres: null
}

const mapStateToProps = (state, { movieId }) => ({
  info: movieInfoSelector(state, movieId),
  genres: genresMovieSelector(state, movieId)
})

const mapDispatchToProps = {
  getMovie: getMovieAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo)