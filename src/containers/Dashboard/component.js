import React from 'react'
import {
  Row, Col, Pagination, Spin, Alert, Empty
} from 'antd'
import PropTypes from 'prop-types'

import MoviesList from 'Components/MoviesList'
import Search from './Search'

const Dashboard = ({
  movies, loading, onPageChange, currentPage, totalResults, error, isBlank
}) => (
  <>
    <Search />
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
    </div>
  </>
)

Dashboard.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalResults: PropTypes.number,
  error: PropTypes.string,
  movies: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  isBlank: PropTypes.bool
}

Dashboard.defaultProps = {
  movies: null,
  loading: null,
  currentPage: null,
  totalResults: null,
  error: null,
  isBlank: false
}

export default Dashboard
