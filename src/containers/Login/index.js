/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import {
  Button, Col, Form, Input, Layout, Row, Typography, Alert
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOGIN_SUBMIT } from '../../store/auth/actions/types'

class Login extends Component {

  loginSummitHandler (values) {
    const { username, password } = values;
    this.props.login(username, password);
  }
  render() {
    const { error, errorTxt, loading, sessionID } = this.props;
    return (
      <div className="center">
        <Layout>
          <Layout.Content>
            <Row
              type="flex"
              justify="center"
            >
              <Col sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <Form onFinish={(values) => this.loginSummitHandler(values)}>
                  <Typography.Title>The Movie DB</Typography.Title>
                  {error && <Alert type="error" message={errorTxt} />}
                  <Form.Item
                    // validateStatus="error"
                    // help="Should be combination of numbers & alphabets"
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
        {sessionID && <Redirect to='/' />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  errorTxt: state.auth.errorTxt,
  sessionID: state.auth.sessionID,
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch({type: LOGIN_SUBMIT, username, password})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
