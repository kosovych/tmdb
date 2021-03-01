import React from 'react'
import {
  Col, Card, Typography
} from 'antd'
import { Link } from 'react-router-dom'

import DeleteUserList from './DeleteUserList'

const List = ({ userLists }) => (
  userLists.map(({ id, name, description }) => (
    <Col
      key={id}
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      <Card
        hoverable
        className="top-margin"
        actions={[
          <DeleteUserList
            listId={id}
            key="delete"
          />
        ]}
      >
        <Typography.Title level={4}>
          <Link
            to={`list/${id}`}
          >
            {name}
          </Link>
        </Typography.Title>
        {description}
      </Card>
    </Col>
  ))
)

export default List
