import React from 'react'
import {
  Button, Col, Layout, Row, Typography, Alert
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Form, Field } from 'formik'

import InputField from 'Components/InputField'

const Login = ({
  errorMessage, loading, handleSubmit
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
            <Form onSubmit={handleSubmit}>
              <Typography.Title>The Movie DB</Typography.Title>
              {errorMessage && (
                <Alert
                  type="error"
                  message={errorMessage}
                />
              )}
              <Field
                name="username"
                component={InputField}
                placeholder="Username"
                prefix={
                  (
                    <UserOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )
                }
              />
              <Field
                name="password"
                component={InputField}
                placeholder="Password"
                type="password"
                prefix={
                  (
                    <LockOutlined
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  )
                }
              />
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </div>
)

Login.propTypes = {
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

Login.defaultProps = {
  errorMessage: null
}

export default Login
