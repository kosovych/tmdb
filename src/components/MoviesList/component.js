import React from 'react'
import { Col } from 'antd'

import MovieItem from 'Components/MovieItem'

const MoviesList = ({ movies, action }) => (
  movies.map((movie) => {
    const {
      id: movieId, poster_path: poster, name, title, overview
    } = movie
    return (
      <Col
        key={movieId}
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
      >
        <MovieItem
          poster={poster}
          overview={overview}
          title={title || name}
          action={action}
          movieId={movieId}
        />
      </Col>
    )
  })
)

export default MoviesList
