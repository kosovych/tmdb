import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropTypes from 'prop-types'

import { movieLoadingSelector } from 'Store/movie/selectors'
import MovieComponent from './component'

class Movie extends Component {
  render() {
    const movieId = get(this.props, ['match', 'params', 'id'])
    const { loading } = this.props
    return (
      <MovieComponent
        loading={loading}
        movieId={movieId}
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: movieLoadingSelector(state)
})

Movie.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Movie)
