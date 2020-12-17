import React from 'react'
import {
  Button, Col, Layout, Row, Typography, Alert
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Form, Field } from 'formik'
import FormField from '../../components/FormField'

const Login = ({
  errorTxt, loading, handleSubmit, errors: { username, password }, touched
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
              {errorTxt && (
                <Alert
                  type="error"
                  message={errorTxt}
                />
              )}
              <Field
                name="username"
                validateStatus={(username && touched.username) ? 'error' : null}
                help={touched.username && username}
                component={FormField}
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
                validateStatus={(password && touched.password) ? 'error' : null}
                help={touched.password && password}
                component={FormField}
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
  errorTxt: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired
}

Login.defaultProps = {
  errorTxt: null
}

export default Login
