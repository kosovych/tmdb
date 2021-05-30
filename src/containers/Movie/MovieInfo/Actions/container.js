import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  getMovieAccountStates as getMovieAccountStatesAction,
  toggleMovieWatchlist as toggleMovieWatchlistAction,
  addMovieToFavorites as addMovieToFavoritesAction
} from 'Store/movie/actions'
import {
  accountStatesLoadingSelector,
  isOnWatchlistSelector,
  isFavoriteSelector,
  currentMovieIdSelector
} from 'Store/movie/selectors'
import ActionsComponent from './component'

class Actions extends Component {
  componentDidMount() {
    const { getMovieAccountStates, movieId } = this.props
    getMovieAccountStates(movieId)
  }

  handleToggleWatchlist = () => {
    const { toggleMovieWatchlist } = this.props
    toggleMovieWatchlist()
  }

  handleToggleBookmark = () => {
    const { addMovieToFavorites } = this.props
    addMovieToFavorites()
  }

  render() {
    const { loading, isOnWatchlist, isFavorite } = this.props
    return (
      <ActionsComponent
        loading={loading}
        isOnWatchlist={isOnWatchlist}
        isFavorite={isFavorite}
        handleToggleWatchlist={this.handleToggleWatchlist}
        handleToggleBookmark={this.handleToggleBookmark}
      />
    )
  }
}

Actions.propTypes = {
  loading: PropTypes.bool.isRequired,
  getMovieAccountStates: PropTypes.func.isRequired,
  movieId: PropTypes.string,
  isOnWatchlist: PropTypes.bool,
  toggleMovieWatchlist: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  addMovieToFavorites: PropTypes.func.isRequired
}

Actions.defaultProps = {
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
  toggleMovieWatchlist: toggleMovieWatchlistAction,
  addMovieToFavorites: addMovieToFavoritesAction
})

export default connect(mapStateToProps, mapDispatchToProps)(Actions)
