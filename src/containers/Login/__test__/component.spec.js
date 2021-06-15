import { shallow } from 'enzyme'
import React from 'react'
import LoginComponent from '../component'

describe('Login Component', () => {
  const requiredProps = {
    loading: false,
    handleSubmit: jest.fn()
  }

  describe('with error', () => {
    it('should matches snapshot', () => {
      const container = shallow(<LoginComponent {... requiredProps} />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('without error', () => {
    it('should matches snapshot', () => {
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
})
