import React from 'react'
import {
  Row,
  Col,
  Carousel
} from 'antd'
import PropTypes from 'prop-types'

import { IMG_PATH_PREFIX } from 'Constants'

const MovieImages = ({ movieImages }) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel>
        {movieImages.map(({ file_path: filePath }) => (
          <img
            key={filePath}
            className="movie-image"
            src={`${IMG_PATH_PREFIX}${filePath}`}
            alt=""
          />
        ))}
      </Carousel>
    </Col>
  </Row>
)

MovieImages.propTypes = {
  movieImages: PropTypes.arrayOf(
    PropTypes.shape()
  )
}

MovieImages.defaultProps = {
  movieImages: null
}

export default MovieImages
