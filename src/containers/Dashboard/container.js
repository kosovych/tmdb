import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMovies as getMoviesAction } from 'Store/trendingMovies/actions'
import {
  moviesSelector,
  moviePagesSelector,
  movieErrorSelector,
  movieLoadingSelector,
  isBlankSelector
} from 'Store/trendingMovies/selectors'
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
      movies, loading, pagination: { currentPage, totalResults }, error, isBlank
    } = this.props
    return (
      <DashboardComponent
        movies={movies}
        currentPage={currentPage}
        totalResults={totalResults}
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
    totalResults: PropTypes.number
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
    totalResults: null
  },
  error: null,
  isBlank: false
}

export { Dashboard as DashboardContainer }

const mapStateToProps = state => ({
  loading: movieLoadingSelector(state),
  pagination: moviePagesSelector(state),
  movies: moviesSelector(state),
  error: movieErrorSelector(state),
  isBlank: isBlankSelector(state)
})

const mapDispatchToProps = {
  getMovies: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
