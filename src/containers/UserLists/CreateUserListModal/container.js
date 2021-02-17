import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { createListLoadingSelector } from 'Store/userLists/selectors'
import { createUserLits as createUserLitsAction } from 'Store/userLists/actions'
import CreateUserListModalComponent from './component'

const UserListSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z0-9\s]+$/, { message: 'Should be combination of numbers & alphabets' })
    .required('Required'),
  description: Yup.string()
    .matches(/^[A-Za-z0-9\s]+$/, { message: 'Should be combination of numbers & alphabets' })
    .required('Required')
})

const CreateUserListModal = ({
  createListModalOpen,
  toggleCreateListModalOpen,
  loading,
  ...restProps
}) => (
  <CreateUserListModalComponent
    createListModalOpen={createListModalOpen}
    toggleCreateListModalOpen={toggleCreateListModalOpen}
    loading={loading}
    {...restProps}
  />
)

CreateUserListModal.propTypes = {
  createListModalOpen: PropTypes.bool.isRequired,
  toggleCreateListModalOpen: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

CreateUserListModal.defaultProps = {
  loading: false
}

const mapStateToProps = state => ({
  loading: createListLoadingSelector(state)
})

const mapDispatchToProps = {
  createUserLits: createUserLitsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
  mapPropsToValues: () => ({ name: '', description: '' }),
  handleSubmit: (values, { props, resetForm }) => {
    const { createUserLits, toggleCreateListModalOpen } = props
    createUserLits(values, () => {
      resetForm()
      toggleCreateListModalOpen()
    })
  },
  validationSchema: UserListSchema
})(CreateUserListModal))
