import React, { Component } from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { get } from 'lodash'
import PropsTypes from 'prop-types'

import {
  listNameSelector, listMoviesSelector, listLoadingSelector, isBlankSelector
} from 'Store/listDetails/selectors'
import {
  getListDetails as getListDetailsAction,
  removeUserList as removeUserListAction
} from 'Store/listDetails/actions'
import ListDetailsComponent from './component'

class ListDetails extends Component {
  componentDidMount() {
    const { getListDetails } = this.props
    const listId = get(this.props, ['match', 'params', 'id'])
    getListDetails(listId)
  }

  showDeleteListModal = () => {
    const { removeUserList, history } = this.props
    const listId = get(this.props, ['match', 'params', 'id'])

    Modal.confirm({
      title: 'Do you want to delete list?',
      onOk() { removeUserList(listId, history) }
    })
  }

  render() {
    const {
      movies, listName, loading, isBlank
    } = this.props
    return (
      <ListDetailsComponent
        showDeleteListModal={this.showDeleteListModal}
        movies={movies}
        listName={listName}
        loading={loading}
        isBlank={isBlank}
      />
    )
  }
}

ListDetails.propTypes = {
  getListDetails: PropsTypes.func.isRequired,
  removeUserList: PropsTypes.func.isRequired,
  history: PropsTypes.shape().isRequired,
  movies: PropsTypes.arrayOf(PropsTypes.shape()),
  listName: PropsTypes.string,
  loading: PropsTypes.bool,
  isBlank: PropsTypes.bool
}

ListDetails.defaultProps = {
  movies: null,
  listName: null,
  loading: null,
  isBlank: null
}

const mapStateToProps = state => ({
  movies: listMoviesSelector(state),
  listName: listNameSelector(state),
  loading: listLoadingSelector(state),
  isBlank: isBlankSelector(state)
})

const mapDispatchToProps = {
  getListDetails: getListDetailsAction,
  removeUserList: removeUserListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails)
