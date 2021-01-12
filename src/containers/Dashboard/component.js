import React from 'react'
import {
  Row, Col, Input, Pagination, Spin
} from 'antd'
import PropTypes from 'prop-types'

import MoviesList from 'Components/MoviesList'

const Dashboard = ({
  moviesData, movies, loading, onPageChange
}) => (
  <>
    <Row
      justify="center"
      gutter={{
        xs: 8, sm: 16, md: 24, lg: 22
      }}
    >
      <Col
        className="gutter-row"
        xs={{ span: 20 }}
        sm={{ span: 20 }}
        md={{ span: 14 }}
        lg={{ span: 12 }}
        xl={{ span: 10 }}
      >
        <Input.Search
          placeholder="Enter movie name"
          size="large"
          enterButton="Search"
          className="top-margin"
        />
      </Col>
    </Row>
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
            {!loading && movies ? (
              <MoviesList
                moviesIDs={movies.items}
                moviesData={moviesData}
              />
            ) : <Col><Spin /></Col>
        }
          </Row>
        </Col>
      </Row>
      <Row
        type="flex"
        justify="center"
      >
        <Col>
          {movies && (
          <Pagination
            disabled={loading}
            defaultCurrent={movies.currentPage}
            onChange={onPageChange}
            className="pagination"
            showSizeChanger={false}
            total={movies.totalPages}
          />
          )}
        </Col>
      </Row>
    </div>
  </>
)

Dashboard.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  moviesData: PropTypes.shape(),
  movies: PropTypes.shape({
    currentPage: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.number),
    totalPages: PropTypes.number
  }),
  loading: PropTypes.bool.isRequired
}

Dashboard.defaultProps = {
  moviesData: null,
  movies: null
}

export default Dashboard
