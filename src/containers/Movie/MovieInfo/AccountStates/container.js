import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  getMovieAccountStates as getMovieAccountStatesAction,
  addMovieToWatchList as addMovieToWatchListAction,
  addMovieToFavorites as addMovieToFavoritesAction
} from 'Store/movie/actions'
import {
  accountStatesLoadingSelector,
  isOnWatchlistSelector,
  isFavoriteSelector,
  currentMovieIdSelector
} from 'Store/movie/selectors'
import AccountStatesComponent from './component'

class AccountStates extends Component {
  componentDidMount() {
    const { getMovieAccountStates, movieId } = this.props
    getMovieAccountStates(movieId)
  }

  handleWatchlist = () => {
    const { movieId, isOnWatchlist, addMovieToWatchList } = this.props
    addMovieToWatchList(movieId, isOnWatchlist)
  }

  handleBookmark = () => {
    const { movieId, isFavorite, addMovieToFavorites } = this.props
    addMovieToFavorites(movieId, isFavorite)
  }

  render() {
    const { loading, isOnWatchlist, isFavorite } = this.props
    return (
      <AccountStatesComponent
        loading={loading}
        isOnWatchlist={isOnWatchlist}
        isFavorite={isFavorite}
        handleWatchlist={this.handleWatchlist}
        handleBookmark={this.handleBookmark}
      />
    )
  }
}

AccountStates.propTypes = {
  loading: PropTypes.bool.isRequired,
  getMovieAccountStates: PropTypes.func.isRequired,
  movieId: PropTypes.string,
  isOnWatchlist: PropTypes.bool,
  addMovieToWatchList: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  addMovieToFavorites: PropTypes.func.isRequired
}

AccountStates.defaultProps = {
  movieId: null,
  isOnWatchlist: null,
  isFavorite: null
}

const mapStateToProps = (state, { movieId }) => ({
  loading: accountStatesLoadingSelector(state),
  isOnWatchlist: isOnWatchlistSelector(state, movieId),
  isFavorite: isFavoriteSelector(state, movieId),
  movieId: currentMovieIdSelector(state)
})

const mapDispatchToProps = ({
  getMovieAccountStates: getMovieAccountStatesAction,
  addMovieToWatchList: addMovieToWatchListAction,
  addMovieToFavorites: addMovieToFavoritesAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountStates)
