import React from 'react'
import { Popover as AntPopover } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

import Popover from './Popover'


const Lists = ({
  popoverVisible,
  handleVisiblePopover
}) => (
  <>
    <AntPopover
      title="Add movie to list"
      trigger="click"
      visible={popoverVisible}
      onVisibleChange={handleVisiblePopover}
      content={(
        <Popover
          closePopover={handleVisiblePopover}
        />
      )}
    >
      <PlusCircleOutlined />
    </AntPopover>
  </>
)

Lists.propTypes = {
  popoverVisible: PropTypes.bool.isRequired,
  handleVisiblePopover: PropTypes.func.isRequired
}

export default Lists
