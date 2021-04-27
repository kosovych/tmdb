import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'

import { setCurrentMovieId as setCurrentMovieIdAction } from 'Store/movie/actions'
import { movieLoadingSelector, currentMovieIdSelector } from 'Store/movie/selectors'
import MovieComponent from './component'

class Movie extends Component {
  componentDidMount() {
    const movieId = get(this.props, ['match', 'params', 'id'])
    const { setCurrentMovieId } = this.props
    setCurrentMovieId(movieId)
  }

  componentWillUnmount() {
    const { setCurrentMovieId } = this.props
    setCurrentMovieId(null)
  }

  render() {
    const { loading, movieId } = this.props
    return (
      <MovieComponent
        loading={loading}
        movieId={movieId}
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: movieLoadingSelector(state),
  movieId: currentMovieIdSelector(state)
})

const mapDispatchToProps = {
  setCurrentMovieId: setCurrentMovieIdAction
}


Movie.propTypes = {
  movieId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  setCurrentMovieId: PropTypes.func.isRequired
}

Movie.defaultProps = {
  movieId: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
