import React from 'react'
import {
  Row, Col, Pagination, Spin, Alert, Empty
} from 'antd'
import PropTypes from 'prop-types'

import MoviesList from 'Components/MoviesList'
import DeleteMovie from './DeleteMovie'

const WatchList = ({
  movies, loading, onPageChange, currentPage, totalPages, error, isBlank
}) => (
  <div className="top-margin">
    <Row
      type="flex"
      gutter={16}
    >
      <Col
        className="gutter-row"
        span={20}
        offset={2}
      >
        <Row
          gutter={{
            xs: 8, sm: 16, md: 24, lg: 32
          }}
          justify={loading ? 'center' : 'start'}
        >
          {loading && (
          <Col>
            <Spin />
          </Col>
          )}
          {!loading && movies && (
          <MoviesList
            movies={movies}
            actions={[
              <DeleteMovie key="delete-movie" />
            ]}
          />
          )}
          {isBlank && (
          <Col span={24}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Col>
          )}
          {error && (
          <Col span={24}>
            <Alert
              message={error}
              type="error"
            />
          </Col>
          )}
        </Row>
      </Col>
    </Row>
    <Row
      type="flex"
      justify="center"
    >
      <Col>
        {movies && !!totalPages && (
        <Pagination
          disabled={loading}
          current={currentPage}
          onChange={onPageChange}
          className="pagination"
          showSizeChanger={false}
          total={totalPages}
        />
        )}
      </Col>
    </Row>
  </div>
)

WatchList.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  error: PropTypes.string,
  movies: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  isBlank: PropTypes.bool
}

WatchList.defaultProps = {
  movies: null,
  loading: null,
  currentPage: null,
  totalPages: null,
  error: null,
  isBlank: false
}

export default WatchList
