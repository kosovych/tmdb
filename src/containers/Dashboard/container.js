import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { requestData } from 'Store/data/actions'
import { TRENDING_MOVIES, ALL_TRENDING_DAY } from 'Constants'
import { trendingMoviesSchema } from 'Utils'
import DashboardComponent from './component'

class Dashboard extends Component {
  componentDidMount() {
    const { getMovies } = this.props
    getMovies(ALL_TRENDING_DAY, TRENDING_MOVIES, trendingMoviesSchema)
  }

  onPageChange = (page) => {
    const { getMovies } = this.props
    getMovies(`${ALL_TRENDING_DAY}?page=${page}`, TRENDING_MOVIES, trendingMoviesSchema)
  }

  render() {
    const { moviesData, movies, loading } = this.props
    return (
      <DashboardComponent
        moviesData={moviesData}
        movies={movies}
        loading={loading}
        onPageChange={this.onPageChange}
      />
    )
  }
}

Dashboard.propTypes = {
  getMovies: PropTypes.func.isRequired,
  moviesData: PropTypes.shape(),
  movies: PropTypes.shape({
    currentPage: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.number),
    totalPages: PropTypes.number
  }),
  loading: PropTypes.bool.isRequired
}

Dashboard.defaultProps = {
  moviesData: null,
  movies: null
}

const mapStateToProps = state => ({
  loading: state.data.loading,
  moviesData: state.data.moviesData,
  movies: state.movies[TRENDING_MOVIES]
})

const mapDispatchToProps = {
  getMovies: requestData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
