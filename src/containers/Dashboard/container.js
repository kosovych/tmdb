import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMovies as getMoviesAction } from 'Store/concepts/movies/actions'
import { TRENDING_MOVIES, ALL_TRENDING_DAY } from 'Constants'
import DashboardComponent from './component'

class Dashboard extends Component {
  state = {
    url: ALL_TRENDING_DAY
  }

  componentDidMount = () => {
    this.fetchMovies()
  }

  onPageChange = (page) => {
    const { getMovies } = this.props
    const { url } = this.state
    const symbolForPagerQuery = url !== ALL_TRENDING_DAY ? '&' : '?'
    getMovies(TRENDING_MOVIES, `${url}${symbolForPagerQuery}page=${page}`)
  }

  onSearch = (url) => {
    const { url: stateURL } = this.state
    if (stateURL === ALL_TRENDING_DAY && ALL_TRENDING_DAY === url) {
      return
    }
    this.setState(() => ({ url }), () => this.fetchMovies())
  }

  get isBlank() {
    const { loading, movies } = this.props
    return !loading && movies && !movies.length
  }

  fetchMovies = () => {
    const { getMovies } = this.props
    const { url } = this.state
    getMovies(TRENDING_MOVIES, url)
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
        onSearch={this.onSearch}
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
  loading: state.movies[TRENDING_MOVIES].meta.loading,
  currentPage: state.movies[TRENDING_MOVIES].meta.currentPage,
  totalPages: state.movies[TRENDING_MOVIES].meta.totalPages,
  movies: state.movies[TRENDING_MOVIES].entries,
  error: state.movies[TRENDING_MOVIES].meta.error
})

const mapDispatchToProps = {
  getMovies: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
