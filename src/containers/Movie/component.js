import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Spin } from 'antd'

import MovieImages from './MovieImages'
import MovieInfo from './MovieInfo'
import Credits from './Credits'

const Movie = ({ movieId, loading }) => (
  <>
    {loading && (
      <Row
        className="top-margin"
        justify="center"
      >
        <Col>
          <Spin />
        </Col>
      </Row>
    )}
    <MovieImages
      movieId={movieId}
      loading={loading}
    />
    <div className="top-margin">
      <MovieInfo
        movieId={movieId}
        loading={loading}
      />
      <Credits
        movieId={movieId}
        loading={loading}
      />
    </div>
  </>
)

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Movie
