import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import Modal from './Modal'

const DeleteMovie = () => (
  <DeleteOutlined
    key="open-modal"
    onClick={Modal}
  />
)

export default DeleteMovie
