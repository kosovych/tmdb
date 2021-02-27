import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { TEXT_CONTENT_REGEXP } from 'Constants'
import { createListLoadingSelector } from 'Store/userMovieLists/selectors'
import { createUserLits as createUserLitsAction } from 'Store/userMovieLists/actions'
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
  createListModalOpen,
  onToggleModal,
  loading,
  ...restProps
}) => (
  <CreateUserListModalComponent
    createListModalOpen={createListModalOpen}
    onToggleModal={onToggleModal}
    loading={loading}
    {...restProps}
  />
)

CreateUserListModal.propTypes = {
  createListModalOpen: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
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
    const { createUserLits, onToggleModal } = props
    createUserLits(values, () => {
      resetForm()
      onToggleModal()
    })
  },
  validationSchema: UserListSchema
})(CreateUserListModal))
