import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Spin } from 'antd'
import classnames from 'classnames'

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
    <div className={classnames({ 'd-none': loading })}>
      <MovieImages
        movieId={movieId}
      />
      <div className="top-margin">
        <MovieInfo movieId={movieId} />
        <Credits movieId={movieId} />
      </div>
    </div>
  </>
)

Movie.propTypes = {
  movieId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Movie
