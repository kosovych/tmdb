import React from 'react'
import {
  Row, Col, Input
} from 'antd'
import PropTypes from 'prop-types'
import { Form, Field } from 'formik'
import InputField from 'Components/InputField'
import ClearButton from './ClearButton'


const Search = ({
  handleSubmit, values, onClear, handleBlur
}) => (
  <Row
    justify="center"
    gutter={{
      xs: 8, sm: 16, md: 24, lg: 22
    }}
  >
    <Col
      className="gutter-row"
      xs={{ span: 20 }}
      sm={{ span: 20 }}
      md={{ span: 14 }}
      lg={{ span: 12 }}
      xl={{ span: 10 }}
    >
      <Form onSubmit={handleSubmit}>
        <Field
          component={InputField}
          inputComponent={Input.Search}
          name="search"
          placeholder="Enter movie name"
          size="large"
          enterButton="Search"
          className="top-margin"
          onSearch={handleSubmit}
          onBlur={values.search && handleBlur}
          suffix={(
            <ClearButton
              onClick={onClear}
              isVisible={values.search}
            />
          )}
        />
      </Form>
    </Col>
  </Row>
)

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired,
  onClear: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
}

export default Search
