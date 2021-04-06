import React from 'react'
import { Button } from 'antd'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import CreateUserListModal from '../../../../UserLists/CreateUserListModal'

const Popover = ({
  closePopover,
  userLists,
  addMovieToExistList,
  createListModalOpen,
  onToggleModal,
  actionModal,
  modalLoading
}) => (
  <>
    <div>
      <Button
        type="link"
        onClick={() => {
          onToggleModal()
          closePopover()
        }}
      >
        Create new list ...
      </Button>
    </div>
    <div className="popup-user-lists">
      {map(userLists, ({ description, id }) => (
        <div key={id}>
          <Button
            onClick={() => addMovieToExistList(id)}
            type="link"
          >
            {description}
          </Button>
        </div>
      ))}
    </div>
    <CreateUserListModal
      createListModalOpen={createListModalOpen}
      onToggleModal={onToggleModal}
      action={actionModal}
      loading={modalLoading}
    />
  </>
)

Popover.propTypes = {
  closePopover: PropTypes.func.isRequired,
  userLists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addMovieToExistList: PropTypes.func.isRequired,
  modalLoading: PropTypes.bool.isRequired,
  createListModalOpen: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  actionModal: PropTypes.func.isRequired
}

export default Popover
