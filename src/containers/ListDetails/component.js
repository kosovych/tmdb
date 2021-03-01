import React from 'react'
import {
  Row, Col, Typography, Spin, Empty
} from 'antd'
import PropsTypes from 'prop-types'

import MoviesList from 'Components/MoviesList'
import { MinusCircleOutlined } from '@ant-design/icons'
import DeleteMovie from './DeleteMovie'

const ListDetails = ({
  showDeleteListModal, movies, listName, loading, isBlank
}) => (
  <>
    <Row>
      <Col
        offset={2}
        span={20}
      >
        {listName && (
          <div className="top-margin">
            <Typography.Title>
              {listName}
              {' '}
              <MinusCircleOutlined onClick={showDeleteListModal} />
            </Typography.Title>
          </div>
        )}
      </Col>
    </Row>
    <Row
      gutter={8}
      type="flex"
    >
      <Col
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
            <Col style={{ marginTop: 32 }}>
              <Spin />
            </Col>
          )}
          {isBlank && (
          <Col span={24}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Col>
          )}
          {!loading && movies && (
          <MoviesList
            movies={movies}
            action={DeleteMovie}
          />
          )}
        </Row>
      </Col>
    </Row>
  </>
)

ListDetails.propTypes = {
  showDeleteListModal: PropsTypes.func.isRequired,
  movies: PropsTypes.arrayOf(PropsTypes.shape()),
  listName: PropsTypes.string,
  loading: PropsTypes.bool,
  isBlank: PropsTypes.bool
}

ListDetails.defaultProps = {
  movies: null,
  listName: null,
  loading: null,
  isBlank: null
}

export default ListDetails
