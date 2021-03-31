import React from 'react'
import {
  Row,
  Col,
  Carousel
} from 'antd'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { IMAGES_HOST } from 'Constants'

const MovieImages = ({ movieImages, loading }) => (
  !loading && (
    <Row type="flex">
      <Col span={24}>
        <Carousel>
          {map(movieImages, ({ file_path: filePath }) => (
            <img
              key={filePath}
              className="movie-image"
              src={`${IMAGES_HOST}${filePath}`}
              alt=""
            />
          ))}
        </Carousel>
      </Col>
    </Row>
  )
)

MovieImages.propTypes = {
  loading: PropTypes.bool.isRequired,
  movieImages: PropTypes.arrayOf(
    PropTypes.shape()
  )
}

MovieImages.defaultProps = {
  movieImages: null
}

export default MovieImages
