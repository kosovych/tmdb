import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  getMovieAccountStates as getMovieAccountStatesAction,
  toggleMovieWatchlist,
  addMovieToFavorites
} from 'Store/movie/actions'
import {
  accountStatesLoadingSelector,
  isOnWatchlistSelector,
  isFavoriteSelector
} from 'Store/movie/selectors'
import ActionsComponent from './component'

class Actions extends Component {
  componentDidMount() {
    const { getMovieAccountStates } = this.props
    getMovieAccountStates()
  }

  render() {
    const {
      loading, isOnWatchlist, isFavorite, handleToggleWatchlist, handleToggleBookmark
    } = this.props
    return (
      <ActionsComponent
        loading={loading}
        isOnWatchlist={isOnWatchlist}
        isFavorite={isFavorite}
        handleToggleWatchlist={handleToggleWatchlist}
        handleToggleBookmark={handleToggleBookmark}
      />
    )
  }
}

Actions.propTypes = {
  loading: PropTypes.bool.isRequired,
  getMovieAccountStates: PropTypes.func.isRequired,
  isOnWatchlist: PropTypes.bool,
  handleToggleWatchlist: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  handleToggleBookmark: PropTypes.func.isRequired
}

Actions.defaultProps = {
  isOnWatchlist: null,
  isFavorite: null
}

const mapStateToProps = (state, { movieId }) => ({
  loading: accountStatesLoadingSelector(state),
  isOnWatchlist: isOnWatchlistSelector(state, movieId),
  isFavorite: isFavoriteSelector(state, movieId)
})

const mapDispatchToProps = ({
  getMovieAccountStates: getMovieAccountStatesAction,
  handleToggleWatchlist: toggleMovieWatchlist,
  handleToggleBookmark: addMovieToFavorites
})

export default connect(mapStateToProps, mapDispatchToProps)(Actions)
