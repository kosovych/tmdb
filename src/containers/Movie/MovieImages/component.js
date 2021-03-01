import React from 'react'
import {
  Row,
  Col,
  Carousel
} from 'antd'
import PropTypes from 'prop-types'

const MovieImages = ({ movieImages }) => (
  <Row type="flex">
    <Col span={24}>
      <Carousel>
        {movieImages.map(({ file_path: filePath }) => (
          <img
            key={filePath}
            className="movie-image"
            src={`https://image.tmdb.org/t/p/original${filePath}`}
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
