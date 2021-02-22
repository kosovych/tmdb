import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { createListLoadingSelector } from 'Store/userMovieLists/selectors'
import { createUserLits as createUserLitsAction } from 'Store/userMovieLists/actions'
import CreateUserListModalComponent from './component'

const regexp = /^[A-Za-z0-9\s]+$/

const UserListSchema = Yup.object().shape({
  name: Yup.string()
    .matches(regexp, { message: 'Should be combination of numbers & alphabets' })
    .required('Required'),
  description: Yup.string()
    .matches(regexp, { message: 'Should be combination of numbers & alphabets' })
    .required('Required')
})

const CreateUserListModal = ({
  createListModalOpen,
  handleYourFunctionName,
  loading,
  ...restProps
}) => (
  <CreateUserListModalComponent
    createListModalOpen={createListModalOpen}
    handleYourFunctionName={handleYourFunctionName}
    loading={loading}
    {...restProps}
  />
)

CreateUserListModal.propTypes = {
  createListModalOpen: PropTypes.bool.isRequired,
  handleYourFunctionName: PropTypes.func.isRequired,
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
    const { createUserLits, handleYourFunctionName } = props
    createUserLits(values, () => {
      resetForm()
      handleYourFunctionName()
    })
  },
  validationSchema: UserListSchema
})(CreateUserListModal))
