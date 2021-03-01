import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Movie = ({
  poster, overview, title, action: Action, movieId, mediaType
}) => {
  const actions = Action ? ([<Action
    key={movieId}
    movieId={movieId}
    title={title}
  />]) : null
  return (
    <Card
      hoverable
      actions={actions}
      cover={(
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          width="500"
          height="750"
        />
      )}
      className="top-margin"
    >
      <Card.Meta
        title={(
          <Link
            to={`/${mediaType}/${movieId}`}
          >
            {title}
          </Link>
  )}
        description={overview}
      />
    </Card>
  )
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.elementType,
  movieId: PropTypes.number,
  mediaType: PropTypes.string.isRequired
}

Movie.defaultProps = {
  action: null,
  movieId: null
}

export default Movie
