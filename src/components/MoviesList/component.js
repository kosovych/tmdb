import React from 'react'
import MovieItem from 'Components/MovieItem'
import { Col } from 'antd'

const MoviesList = ({ moviesIDs, moviesData }) => (
  moviesIDs && moviesIDs.map((item) => {
    const {
      id, poster_path: poster, name, title, overview
    } = moviesData[item]
    return (
      <Col
        key={id}
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
        />
      </Col>
    )
  })
)

export default MoviesList
