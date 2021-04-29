import React from 'react'
import { Button } from 'antd'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import CreateUserListModal from 'Containers/CreateUserListModal'
import ListButton from './ListButton'

const Popover = ({
  userLists,
  addMovieToExistingList,
  createListModalOpened,
  onToggleModal,
  actionModal,
  modalLoading,
  openModalHandler
}) => (
  <>
    <div>
      <Button
        type="link"
        onClick={openModalHandler}
      >
        Create new list ...
      </Button>
    </div>
    <div className="popup-user-lists">
      {map(userLists, ({ description, id }) => (
        <ListButton
          key={id}
          listId={id}
          onClick={addMovieToExistingList}
          description={description}
        />
      ))}
    </div>
    <CreateUserListModal
      createListModalOpened={createListModalOpened}
      onToggleModal={onToggleModal}
      action={actionModal}
      loading={modalLoading}
    />
  </>
)

Popover.propTypes = {
  openModalHandler: PropTypes.func.isRequired,
  userLists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addMovieToExistingList: PropTypes.func.isRequired,
  modalLoading: PropTypes.bool.isRequired,
  createListModalOpened: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  actionModal: PropTypes.func.isRequired
}

export default Popover
