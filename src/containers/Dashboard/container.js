import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMovies as getMoviesAction } from 'Store/concepts/movieCatalogs/actions'
import { TRENDING_MOVIES } from 'Constants'
import {
  moviesSelector,
  moviePagesSelector,
  movieErrorSelector,
  movieLoadingSelector,
  isBlankSelector
} from 'Store/concepts/movieCatalogs/selectors'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount = () => {
    const { getMovies } = this.props
    getMovies()
  }

  onPageChange = (page) => {
    const { getMovies } = this.props
    getMovies({ page })
  }

  render() {
    const {
      movies, loading, pagination: { currentPage, totalPages }, error, isBlank
    } = this.props
    return (
      <DashboardComponent
        movies={movies}
        currentPage={currentPage}
        totalPages={totalPages}
        loading={loading}
        onPageChange={this.onPageChange}
        error={error}
        isBlank={isBlank}
      />
    )
  }
}

Dashboard.propTypes = {
  getMovies: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    totalPages: PropTypes.number
  }),
  movies: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  error: PropTypes.string,
  isBlank: PropTypes.bool
}

Dashboard.defaultProps = {
  loading: null,
  movies: null,
  pagination: {
    currentPage: null,
    totalPages: null
  },
  error: null,
  isBlank: false
}

const mapStateToProps = state => ({
  loading: movieLoadingSelector(state, TRENDING_MOVIES),
  pagination: moviePagesSelector(state, TRENDING_MOVIES),
  movies: moviesSelector(state, TRENDING_MOVIES),
  error: movieErrorSelector(state, TRENDING_MOVIES),
  isBlank: isBlankSelector(state, TRENDING_MOVIES)
})

const mapDispatchToProps = {
  getMovies: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
