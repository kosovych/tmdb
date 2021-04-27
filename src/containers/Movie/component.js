import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Spin } from 'antd'

import MovieImages from './MovieImages'
import MovieInfo from './MovieInfo'
import Credits from './Credits'

const Movie = ({ loading, movieId }) => (
  movieId && (
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
      <MovieImages loading={loading} />
      <div className="top-margin">
        <MovieInfo loading={loading} />
        <Credits loading={loading} />
      </div>
    </>
  )
)

Movie.propTypes = {
  movieId: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

Movie.defaultProps = {
  movieId: null
}

export default Movie
