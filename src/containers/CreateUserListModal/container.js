import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import { TEXT_CONTENT_REGEXP } from 'Constants'

import CreateUserListModalComponent from './component'

const UserListSchema = Yup.object().shape({
  name: Yup.string()
    .matches(TEXT_CONTENT_REGEXP, { message: 'Should be combination of numbers & alphabets' })
    .required('Required'),
  description: Yup.string()
    .matches(TEXT_CONTENT_REGEXP, { message: 'Should be combination of numbers & alphabets' })
    .required('Required')
})

const CreateUserListModal = ({
  createListModalOpened,
  onToggleModal,
  loading,
  action,
  ...restProps
}) => (
  <CreateUserListModalComponent
    createListModalOpened={createListModalOpened}
    onToggleModal={onToggleModal}
    loading={loading}
    {...restProps}
  />
)

CreateUserListModal.propTypes = {
  createListModalOpened: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  action: PropTypes.func.isRequired
}

CreateUserListModal.defaultProps = {
  loading: false
}

export default withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),
  handleSubmit: (values, { props, resetForm }) => {
    const { onToggleModal, action } = props
    action(values, () => {
      resetForm()
      onToggleModal()
    })
  },
  validationSchema: UserListSchema
})(CreateUserListModal)
