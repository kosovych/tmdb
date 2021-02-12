/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getMovies as getMoviesAction, setSearch as setSearchAction } from 'Store/trendingMovies/actions'
import SearchComponent from './component'

const SearchSchema = Yup.object().shape({
  search: Yup.string().min(2, 'Search should contain at least 2 characters').required()
})

class Search extends Component {
  onClear = () => {
    const {
      handleReset, setFieldTouched, submitCount, getMovies, setSearch
    } = this.props
    setFieldTouched('search', false)
    if (submitCount > 0) {
      setSearch('')
      getMovies()
    }
    handleReset()
  }

  render() {
    return (
      <SearchComponent
        {...this.props}
        onClear={this.onClear}
      />
    )
  }
}

Search.propTypes = {
  handleReset: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getMovies: getMoviesAction,
  setSearch: setSearchAction
}

export default connect(null, mapDispatchToProps)(withFormik({
  mapPropsToValues: () => ({ search: '' }),
  handleSubmit: (values, { props }) => {
    const { getMovies, setSearch } = props
    setSearch(values.search)
    getMovies()
  },
  validationSchema: SearchSchema
})(Search))
