import React from 'react'
import {
  Typography, Row, Col, Avatar, Dropdown, Layout, Image
} from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Menu from './Menu'

const Header = ({
  onLogout,
  displayName,
  username,
  avatarUrl
}) => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Dropdown
          overlay={<Menu onLogout={onLogout} />}
        >
          <Typography.Text>
            <Avatar
              icon={!avatarUrl && <UserOutlined />}
              src={avatarUrl && <Image src={`https://image.tmdb.org/t/p/w92/${avatarUrl}`} />}
            />
            <span className="hide-sm-down ml-8 mr-8">
              {displayName || username}
            </span>
            <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string
}

Header.defaultProps = {
  displayName: null,
  username: null,
  avatarUrl: null
}

export default Header
