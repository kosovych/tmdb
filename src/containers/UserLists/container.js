import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  getUserLists as getUserListsAction,
  createUserLits as createUserLitsAction
} from 'Store/userMovieLists/actions'

import {
  userListsLoadingSelector,
  userListsPageSelector,
  userListsErrorSelector,
  userListsSelector,
  isBlankSelector,
  createListLoadingSelector
} from 'Store/userMovieLists/selectors'
import UserListsComponent from './component'

class UserLists extends Component {
  state = {
    createListModalOpened: false
  }

  componentDidMount() {
    const { getUserLists } = this.props
    getUserLists()
  }

  onToggleModal = () => {
    this.setState(
      ({ createListModalOpened }) => ({ createListModalOpened: !createListModalOpened })
    )
  }

  render() {
    const {
      createListModalOpened
    } = this.state
    const {
      loading,
      page,
      error,
      userLists,
      isBlank,
      getUserLists,
      createUserLits,
      modalLoading
    } = this.props
    return (
      <UserListsComponent
        createListModalOpened={createListModalOpened}
        onToggleModal={this.onToggleModal}
        loading={loading}
        page={page}
        error={error}
        userLists={userLists}
        isBlank={isBlank}
        onPageChange={getUserLists}
        createUserLits={createUserLits}
        modalLoading={modalLoading}
      />
    )
  }
}

UserLists.propTypes = {
  getUserLists: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  modalLoading: PropTypes.bool,
  createUserLits: PropTypes.func.isRequired,
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
  modalLoading: null,
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
  isBlank: isBlankSelector(state),
  modalLoading: createListLoadingSelector(state)
})

const mapDispatchToProps = {
  getUserLists: getUserListsAction,
  createUserLits: createUserLitsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLists)
