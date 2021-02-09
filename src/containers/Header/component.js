import React from 'react'
import {
  Typography, Row, Col, Avatar, Dropdown, Layout
} from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Menu from './Menu'

const Header = ({ onLogout }) => (
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
            <Avatar icon={<UserOutlined />} />
            <span className="hide-sm-down ml-8 mr-8">Username</span>
            <CaretDownOutlined />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default Header
