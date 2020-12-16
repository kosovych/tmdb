import React from 'react'
import {
  Button, Col, Form, Input, Layout, Row, Typography, Alert
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const Login = ({
  login, errorTxt, loading
}) => (
  <div className="center">
    <Layout>
      <Layout.Content>
        <Row
          type="flex"
          justify="center"
        >
          <Col
            sm={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
          >
            <Form onFinish={login}>
              <Typography.Title>The Movie DB</Typography.Title>
              {errorTxt && (
              <Alert
                type="error"
                message={errorTxt}
              />
              )}
              <Form.Item
                name="username"
              >
                <Input
                  prefix={(
                    <UserOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  prefix={(
                    <LockOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errorTxt: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

Login.defaultProps = {
  errorTxt: null
}

export default Login
