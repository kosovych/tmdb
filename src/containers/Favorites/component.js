import React from 'react'
import {
  Row, Col, Pagination, Spin, Alert, Empty, Typography
} from 'antd'
import PropTypes from 'prop-types'

import MoviesList from 'Components/MoviesList'
import DeleteMovie from './DeleteMovie'

const WatchList = ({
  movies, loading, onPageChange, currentPage, totalResults, error, isBlank
}) => (
  <>
    <Row
      type="flex"
      gutter={16}
    >
      <Col
        className="gutter-row"
        span={20}
        offset={2}
      >
        <div className="top-margin">
          <Typography.Title>Favorites</Typography.Title>
        </div>
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
              action={DeleteMovie}
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
        {movies.length ? (
          <Pagination
            disabled={loading}
            current={currentPage}
            onChange={onPageChange}
            className="pagination"
            showSizeChanger={false}
            total={totalResults}
            pageSize={20}
          />
        ) : null}
      </Col>
    </Row>
  </>
)

WatchList.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalResults: PropTypes.number,
  error: PropTypes.string,
  movies: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  isBlank: PropTypes.bool
}

WatchList.defaultProps = {
  movies: null,
  loading: null,
  currentPage: null,
  totalResults: null,
  error: null,
  isBlank: false
}

export default WatchList
