import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { castMovieSelector, crewMovieSelector } from 'Store/movie/selectors'
import { getMovieCredits as getMovieCreditsAction } from 'Store/movie/actions'
import CreditsComponent from './component'

class Credits extends Component {
  componentDidMount() {
    const { movieId, getMovieCredits } = this.props
    getMovieCredits(movieId)
  }

  render() {
    const { cast, crew, loading } = this.props
    return (
      <CreditsComponent
        cast={cast}
        crew={crew}
        loading={loading}
      />
    )
  }
}

const mapStateToProps = (state, { movieId }) => ({
  cast: castMovieSelector(state, movieId),
  crew: crewMovieSelector(state, movieId)
})

const mapDispatchToProps = {
  getMovieCredits: getMovieCreditsAction
}

Credits.propTypes = {
  movieId: PropTypes.string.isRequired,
  getMovieCredits: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.PropTypes.arrayOf(PropTypes.shape())
}

Credits.defaultProps = {
  cast: null,
  crew: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Credits)
