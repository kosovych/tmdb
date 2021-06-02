import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addMovieToNewList as addMovieToNewListAction,
  onAddToExistingList as onAddToExistingListAction
} from 'Store/movie/actions'

import { newListLoadingSelector } from 'Store/movie/selectors'
import { userListsSelector } from 'Store/userMovieLists/selectors'

import PopoverComponent from './component'

class Popover extends Component {
  state = {
    createListModalOpened: false
  }

  movieToExistingListHandler = (listId) => {
    const { onAddToExistingList, closePopover } = this.props
    closePopover()
    onAddToExistingList(listId)
  }

  onToggleModal = () => {
    this.setState(
      ({ createListModalOpened }) => ({ createListModalOpened: !createListModalOpened })
    )
  }

  onOpenModal = () => {
    const { closePopover } = this.props
    closePopover()
    this.onToggleModal()
  }

  render() {
    const { createListModalOpened } = this.state
    const {
      userLists,
      addMovieToNewList,
      modalLoading
    } = this.props
    return (
      <PopoverComponent
        userLists={userLists}
        onAddToExistingList={this.movieToExistingListHandler}
        onToggleModal={this.onToggleModal}
        createListModalOpened={createListModalOpened}
        action={addMovieToNewList}
        modalLoading={modalLoading}
        onOpenModal={this.onOpenModal}
      />
    )
  }
}

Popover.propTypes = {
  closePopover: PropTypes.func.isRequired,
  onAddToExistingList: PropTypes.func.isRequired,
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
  onAddToExistingList: onAddToExistingListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Popover)
