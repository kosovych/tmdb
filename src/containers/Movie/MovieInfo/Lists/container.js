import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { userListsLoadingSelector } from 'Store/userMovieLists/selectors'
import {
  getUserLists as getUserListsAction
} from 'Store/userMovieLists/actions'
import ListsComponent from './component'

class Lists extends Component {
  state = {
    popoverVisible: false
  }

  componentDidMount() {
    const { getUserLists } = this.props
    getUserLists()
  }

  closePopover = () => {
    this.setState({ popoverVisible: false })
  }

  handleVisibleChange = () => {
    this.setState(({ popoverVisible }) => ({ popoverVisible: !popoverVisible }))
  }

  render() {
    const { popoverVisible, loading } = this.state
    return (
      <ListsComponent
        popoverVisible={popoverVisible}
        handleVisibleChange={this.handleVisibleChange}
        loading={loading}
      />
    )
  }
}

Lists.propTypes = {
  getUserLists: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loading: userListsLoadingSelector(state)
})

const mapDispatchToProps = {
  getUserLists: getUserListsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
