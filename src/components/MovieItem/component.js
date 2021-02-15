import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const Movie = ({
  poster, overview, title, action: Action, movieId
}) => {
  const actionsArr = Action ? ([<Action
    key={movieId}
    movieId={movieId}
    title={title}
  />]) : null
  return (
    <Card
      hoverable
      actions={actionsArr}
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
        title={title}
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
  movieId: PropTypes.number
}

Movie.defaultProps = {
  action: null,
  movieId: null
}

export default Movie
