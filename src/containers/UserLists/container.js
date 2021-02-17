import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUserLists as getUserListsAction } from 'Store/userLists/actions'
import {
  userListsLoadingSelector,
  userListsPageSelector,
  userListsErrorSelector,
  userListsSelector,
  isBlankSelector
} from 'Store/userLists/selectors'
import UserListsComponent from './component'

class UserLists extends Component {
  state = {
    createListModalOpen: false
  }

  componentDidMount() {
    const { getUserLists } = this.props
    getUserLists()
  }

  onPageChange = (page) => {
    const { getUserLists } = this.props
    getUserLists(page)
  }

  toggleCreateListModalOpen = () => {
    this.setState(({ createListModalOpen }) => ({ createListModalOpen: !createListModalOpen }))
  }

  render() {
    const {
      createListModalOpen
    } = this.state
    const {
      loading,
      page,
      error,
      userLists,
      isBlank
    } = this.props
    return (
      <UserListsComponent
        createListModalOpen={createListModalOpen}
        toggleCreateListModalOpen={this.toggleCreateListModalOpen}
        loading={loading}
        page={page}
        error={error}
        userLists={userLists}
        isBlank={isBlank}
        onPageChange={this.onPageChange}
      />
    )
  }
}

UserLists.propTypes = {
  getUserLists: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  page: PropTypes.shape({
    currentPage: PropTypes.number,
    totalResults: PropTypes.number
  }),
  error: PropTypes.string,
  userLists: PropTypes.PropTypes.arrayOf(PropTypes.shape()),
  isBlank: PropTypes.bool
}

UserLists.defaultProps = {
  error: null,
  loading: null,
  userLists: null,
  page: {
    currentPage: null,
    totalResults: null
  },
  isBlank: null
}

const mapStateToProps = state => ({
  loading: userListsLoadingSelector(state),
  page: userListsPageSelector(state),
  error: userListsErrorSelector(state),
  userLists: userListsSelector(state),
  isBlank: isBlankSelector(state)
})

const mapDispatchToProps = {
  getUserLists: getUserListsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLists)
