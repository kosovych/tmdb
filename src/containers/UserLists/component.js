import React from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col, Typography, Pagination, Empty, Spin, Alert
} from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import CreateUserListModal from 'Containers/CreateUserListModal'
import List from './List'

const UserLists = ({
  createListModalOpened,
  onToggleModal,
  loading,
  page: { currentPage, totalResults },
  error,
  userLists,
  isBlank,
  onPageChange,
  createUserLits,
  modalLoading
}) => (
  <>
    <Row>
      <Col
        offset={2}
        span={20}
      >
        <div className="top-margin">
          <Typography.Title>
            My Lists
            {' '}
            <button
              aria-label="Create List"
              onClick={onToggleModal}
              type="button"
              className="reset-btn"
            >
              <PlusCircleOutlined />
            </button>
          </Typography.Title>
        </div>
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
          {!loading && !isBlank && (
            <List
              userLists={userLists}
            />
          )}
          {loading && (
            <Col>
              <Spin />
            </Col>
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
        {Boolean(userLists.length) && (
          <Pagination
            disabled={loading}
            current={currentPage}
            onChange={onPageChange}
            className="pagination"
            showSizeChanger={false}
            pageSize={20}
            total={totalResults}
          />
        )}
      </Col>
    </Row>
    <CreateUserListModal
      createListModalOpened={createListModalOpened}
      onToggleModal={onToggleModal}
      action={createUserLits}
      loading={modalLoading}
    />
  </>
)


UserLists.propTypes = {
  createListModalOpened: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  createUserLits: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  modalLoading: PropTypes.bool,
  error: PropTypes.string,
  userLists: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  isBlank: PropTypes.bool,
  page: PropTypes.shape({
    currentPage: PropTypes.number,
    totalResults: PropTypes.number
  })
}

UserLists.defaultProps = {
  error: null,
  loading: null,
  userLists: null,
  modalLoading: null,
  page: {
    currentPage: null,
    totalResults: null
  },
  isBlank: null
}

export default UserLists
