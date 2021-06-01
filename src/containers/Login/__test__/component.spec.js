import { shallow } from 'enzyme'
import React from 'react'
import LoginComponent from '../component'

describe('Login Component', () => {
  const requiredProps = {
    loading: false,
    handleSubmit: () => {}
  }

  it('should render component without errorMessage', () => {
    const container = shallow(<LoginComponent
      {... requiredProps}
    />)
    expect(container).toMatchSnapshot()
  })

  it('should render component with errorMessage', () => {
    const defaultProps = {
      errorMessage: 'Error'
    }
    const container = shallow(<LoginComponent
      {... requiredProps}
      {...defaultProps}
    />)
    expect(container).toMatchSnapshot()
  })
})
