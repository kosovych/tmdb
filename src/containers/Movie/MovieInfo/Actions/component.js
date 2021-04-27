import React from 'react'
import PropTypes from 'prop-types'
import {
  HeartOutlined, HeartFilled, BookFilled, BookOutlined
} from '@ant-design/icons'
import classnames from 'classnames'

import Icon from 'Components/Icon'

const Actions = ({
  isOnWatchlist,
  handleToggleWatchlist,
  isFavorite,
  handleToggleBookmark,
  loading
}) => (
  <>
    <button
      className="reset-btn"
      type="button"
      onClick={handleToggleBookmark}
      aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <Icon
        as={isFavorite ? HeartFilled : HeartOutlined}
        className={classnames({ 'op-10': loading })}
      />
    </button>
    {' '}
    <button
      className="reset-btn"
      type="button"
      onClick={handleToggleWatchlist}
      aria-label={isOnWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    >
      <Icon
        as={isOnWatchlist ? BookFilled : BookOutlined}
        className={classnames({ 'op-10': loading })}
      />
    </button>
  </>
)

Actions.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleToggleWatchlist: PropTypes.func.isRequired,
  isOnWatchlist: PropTypes.bool,
  handleToggleBookmark: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

Actions.defaultProps = {
  isOnWatchlist: null,
  isFavorite: null
}

export default Actions
