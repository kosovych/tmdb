import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUserLists as getUserListsAction } from 'Store/userMovieLists/actions'
import {
  userListsLoadingSelector,
  userListsPageSelector,
  userListsErrorSelector,
  userListsSelector,
  isBlankSelector
} from 'Store/userMovieLists/selectors'
import UserListsComponent from './component'

class UserLists extends Component {
  state = {
    createListModalOpen: false
  }

  componentDidMount() {
    const { getUserLists } = this.props
    getUserLists()
  }

  handleYourFunctionName = () => {
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
      isBlank,
      getUserLists
    } = this.props
    return (
      <UserListsComponent
        createListModalOpen={createListModalOpen}
        handleYourFunctionName={this.handleYourFunctionName}
        loading={loading}
        page={page}
        error={error}
        userLists={userLists}
        isBlank={isBlank}
        onPageChange={getUserLists}
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
