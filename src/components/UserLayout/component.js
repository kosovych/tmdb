import React from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import Header from '../../containers/Header'

const UserLayout = ({ children }) => (
  <Layout>
    <Header />
    <Layout.Content>
      { children }
    </Layout.Content>
  </Layout>
)

UserLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default UserLayout
