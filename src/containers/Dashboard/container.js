import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMovies as getMoviesAction } from 'Store/concepts/movieCatalogs/actions'
import { TRENDING_MOVIES } from 'Constants'
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

  get isBlank() {
    const { loading, movies } = this.props
    return !loading && movies && !movies.length
  }

  render() {
    const {
      moviesData, movies, loading, currentPage, totalPages, error
    } = this.props
    return (
      <DashboardComponent
        moviesData={moviesData}
        movies={movies}
        currentPage={currentPage}
        totalPages={totalPages}
        loading={loading}
        onPageChange={this.onPageChange}
        error={error}
        isBlank={this.isBlank}
      />
    )
  }
}

Dashboard.propTypes = {
  getMovies: PropTypes.func.isRequired,
  moviesData: PropTypes.shape(),
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  movies: PropTypes.PropTypes.arrayOf(PropTypes.number),
  error: PropTypes.string
}

Dashboard.defaultProps = {
  moviesData: null,
  movies: null,
  currentPage: null,
  totalPages: null,
  error: null
}

const mapStateToProps = state => ({
  moviesData: state.data.movies,
  loading: state.movieCatalogs[TRENDING_MOVIES].meta.loading,
  currentPage: state.movieCatalogs[TRENDING_MOVIES].meta.currentPage,
  totalPages: state.movieCatalogs[TRENDING_MOVIES].meta.totalPages,
  movies: state.movieCatalogs[TRENDING_MOVIES].entries,
  error: state.movieCatalogs[TRENDING_MOVIES].meta.error
})

const mapDispatchToProps = {
  getMovies: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
