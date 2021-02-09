/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { TRENDING_MOVIES } from 'Constants'
import { getMovies as getMoviesAction, setSearch as setSearchAction } from 'Store/concepts/movieCatalogs/actions'
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
      setSearch(TRENDING_MOVIES, '')
      handleReset()
      return getMovies()
    }
    return handleReset()
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
    setSearch(TRENDING_MOVIES, values.search)
    getMovies()
  },
  validationSchema: SearchSchema
})(Search))
