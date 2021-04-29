import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addMovieToNewList as addMovieToNewListAction,
  addMovieToExistingList as addMovieToExistingListAction
} from 'Store/movie/actions'

import { newListLoadingSelector } from 'Store/movie/selectors'
import { userListsSelector } from 'Store/userMovieLists/selectors'

import PopoverComponent from './component'

class Popover extends Component {
  state = {
    createListModalOpened: false
  }

  movieToExistingListHandler = (listId) => {
    const { addMovieToExistingList, closePopover } = this.props
    closePopover()
    addMovieToExistingList(listId)
  }

  onToggleModal = () => {
    this.setState(
      ({ createListModalOpened }) => ({ createListModalOpened: !createListModalOpened })
    )
  }

  openModalHandler = () => {
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
        addMovieToExistingList={this.movieToExistingListHandler}
        onToggleModal={this.onToggleModal}
        createListModalOpened={createListModalOpened}
        actionModal={addMovieToNewList}
        modalLoading={modalLoading}
        openModalHandler={this.openModalHandler}
      />
    )
  }
}

Popover.propTypes = {
  closePopover: PropTypes.func.isRequired,
  addMovieToExistingList: PropTypes.func.isRequired,
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
  addMovieToExistingList: addMovieToExistingListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Popover)
