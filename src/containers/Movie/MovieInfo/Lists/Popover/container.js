import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addMovieToNewList as addMovieToNewListAction,
  addMovieToExistList as addMovieToExistListAction
} from 'Store/movie/actions'

import { newListLoadingSelector } from 'Store/movie/selectors'
import { userListsSelector } from 'Store/userMovieLists/selectors'

import PopoverComponent from './component'

class Popover extends Component {
  state = {
    createListModalOpen: false
  }

  addMovieToExistListHandler = (listId) => {
    const { addMovieToExistList, closePopover } = this.props
    closePopover()
    addMovieToExistList(listId)
  }

  onToggleModal = () => {
    this.setState(({ createListModalOpen }) => ({ createListModalOpen: !createListModalOpen }))
  }

  render() {
    const { createListModalOpen } = this.state
    const {
      closePopover,
      userLists,
      addMovieToNewList,
      modalLoading
    } = this.props
    return (
      <PopoverComponent
        closePopover={closePopover}
        userLists={userLists}
        addMovieToExistList={this.addMovieToExistListHandler}
        onToggleModal={this.onToggleModal}
        createListModalOpen={createListModalOpen}
        actionModal={addMovieToNewList}
        modalLoading={modalLoading}
      />
    )
  }
}

Popover.propTypes = {
  closePopover: PropTypes.func.isRequired,
  addMovieToExistList: PropTypes.func.isRequired,
  userLists: PropTypes.arrayOf(PropTypes.shape()),
  addMovieToNewList: PropTypes.func.isRequired,
  modalLoading: PropTypes.bool
}

Popover.defaultProps = {
  userLists: null,
  modalLoading: false
}

const mapStateToProps = state => ({
  modalLoading: newListLoadingSelector(state),
  userLists: userListsSelector(state)
})

const mapDispatchToProps = {
  addMovieToNewList: addMovieToNewListAction,
  addMovieToExistList: addMovieToExistListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Popover)
