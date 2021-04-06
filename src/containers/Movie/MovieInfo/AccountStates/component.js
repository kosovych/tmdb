import React from 'react'
import PropTypes from 'prop-types'
import {
  HeartOutlined, HeartFilled, BookFilled, BookOutlined
} from '@ant-design/icons'
import classnames from 'classnames'

import Icon from 'Components/Icon'

const AccountStates = ({
  isOnWatchlist,
  handleWatchlist,
  isFavorite,
  handleBookmark,
  loading
}) => (
  <>
    <button
      className="reset-btn"
      type="button"
      onClick={handleWatchlist}
      aria-label={isOnWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    >
      <Icon
        as={isOnWatchlist ? HeartFilled : HeartOutlined}
        className={classnames({ 'op-10': loading })}
      />
    </button>
    {' '}
    <button
      className="reset-btn"
      type="button"
      onClick={handleBookmark}
      aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <Icon
        as={isFavorite ? BookFilled : BookOutlined}
        className={classnames({ 'op-10': loading })}
      />
    </button>
  </>
)

AccountStates.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleWatchlist: PropTypes.func.isRequired,
  isOnWatchlist: PropTypes.bool,
  handleBookmark: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}

AccountStates.defaultProps = {
  isOnWatchlist: null,
  isFavorite: null
}

export default AccountStates
