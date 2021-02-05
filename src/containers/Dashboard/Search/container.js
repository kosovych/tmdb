/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { SEARCH_MOVIE, ALL_TRENDING_DAY } from 'Constants'
import SearchComponent from './component'

const SearchSchema = Yup.object().shape({
  search: Yup.string().min(2, 'Search should contain at least 2 characters').required()
})

class Search extends Component {
  onClear = () => {
    const { handleReset, setFieldTouched, onSearch } = this.props
    setFieldTouched('search', false)
    handleReset()
    onSearch(ALL_TRENDING_DAY)
  }

  render() {
    return (
      <SearchComponent
        {...this.props}
        onChange={this.onChange}
        onClear={this.onClear}
      />
    )
  }
}

Search.propTypes = {
  handleReset: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default withFormik({
  mapPropsToValues: () => ({ search: '' }),
  handleSubmit: (values, { props }) => {
    const { onSearch } = props
    const { search } = values
    return search ? onSearch(`${SEARCH_MOVIE}?query=${search}`) : onSearch(ALL_TRENDING_DAY)
  },
  validationSchema: SearchSchema
})(Search)
