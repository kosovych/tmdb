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
import WatchListComponent from './component'

class WatchList extends Component {
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
      <WatchListComponent
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

WatchList.propTypes = {
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

WatchList.defaultProps = {
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
  loading: movieLoadingSelector(state),
  pagination: moviePagesSelector(state),
  movies: moviesSelector(state),
  error: movieErrorSelector(state),
  isBlank: isBlankSelector(state)
})

const mapDispatchToProps = {
  getMovies: getMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList)
