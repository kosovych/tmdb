import React from 'react'
import { Button } from 'antd'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import CreateUserListModal from 'Containers/CreateUserListModal'
import ListButton from './ListButton'

const Popover = ({
  userLists,
  onAddToExistingList,
  createListModalOpened,
  onToggleModal,
  action,
  modalLoading,
  onOpenModal
}) => (
  <>
    <div>
      <Button
        type="link"
        onClick={onOpenModal}
      >
        Create new list ...
      </Button>
    </div>
    <div className="popup-user-lists">
      {map(userLists, ({ description, id }) => (
        <ListButton
          key={id}
          listId={id}
          onClick={onAddToExistingList}
          description={description}
        />
      ))}
    </div>
    <CreateUserListModal
      createListModalOpened={createListModalOpened}
      onToggleModal={onToggleModal}
      action={action}
      loading={modalLoading}
    />
  </>
)

Popover.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  userLists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onAddToExistingList: PropTypes.func.isRequired,
  modalLoading: PropTypes.bool.isRequired,
  createListModalOpened: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
}

export default Popover
