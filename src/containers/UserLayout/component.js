import React from 'react'
import { Layout, Spin } from 'antd'
import PropTypes from 'prop-types'

import Header from '../Header'

const UserLayout = ({
  children, displayName, username, avatarUrl, userId
}) => (
  userId ? (
    <Layout>
      <Header
        displayName={displayName}
        username={username}
        avatarUrl={avatarUrl}
      />
      <Layout.Content>
        {children}
      </Layout.Content>
    </Layout>
  ) : (
    <div className="main-loader">
      <Spin size="large" />
    </div>
  )
)

UserLayout.propTypes = {
  children: PropTypes.element.isRequired,
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  userId: PropTypes.number
}

UserLayout.defaultProps = {
  displayName: null,
  username: null,
  avatarUrl: null,
  userId: null
}

export default UserLayout
