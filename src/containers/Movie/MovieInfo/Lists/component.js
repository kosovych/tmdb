import React from 'react'
import { Popover as AntPopover } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Popover from './Popover'

const Lists = ({
  popoverVisible,
  handleVisibleChange
}) => (
  <AntPopover
    title="Add movie to list"
    trigger="click"
    visible={popoverVisible}
    onVisibleChange={handleVisibleChange}
    content={(
      <Popover
        closePopover={handleVisibleChange}
      />
    )}
  >
    <PlusCircleOutlined />
  </AntPopover>
)

Lists.propTypes = {
  popoverVisible: PropTypes.bool.isRequired,
  handleVisibleChange: PropTypes.func.isRequired
}

export default Lists
