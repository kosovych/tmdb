import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal } from 'antd'

import { removeUserList as removeUserListAction } from 'Store/userLists/actions'
import DeleteUserListComponent from './component'

class DeleteUserList extends Component {
  onDeleteList = () => {
    const { listId, removeUserList } = this.props
    Modal.confirm({
      title: 'Do you want to delete list?',
      onOk() { removeUserList(listId) },
      onCancel() {}
    })
  }

  render() {
    return <DeleteUserListComponent onDeleteList={this.onDeleteList} />
  }
}

DeleteUserList.propTypes = {
  listId: PropTypes.number.isRequired,
  removeUserList: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  removeUserList: removeUserListAction
}

export default connect(null, mapDispatchToProps)(DeleteUserList)
