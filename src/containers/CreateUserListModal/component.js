import React from 'react'
import { Modal } from 'antd'
import { Form, Field } from 'formik'
import PropTypes from 'prop-types'

import InputField from 'Components/InputField'

const CreateUserListModal = ({
  createListModalOpened,
  onToggleModal,
  handleSubmit,
  loading
}) => (
  <Modal
    visible={createListModalOpened}
    onCancel={onToggleModal}
    onOk={handleSubmit}
    confirmLoading={loading}
    okText="Create"
    title="Create list"
  >
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={InputField}
        placeholder="Name"
      />
      <Field
        name="description"
        component={InputField}
        placeholder="Description"
      />
    </Form>
  </Modal>
)

CreateUserListModal.propTypes = {
  createListModalOpened: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

CreateUserListModal.defaultProps = {
  loading: false
}

export default CreateUserListModal
