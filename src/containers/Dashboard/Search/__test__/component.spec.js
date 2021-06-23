import React from 'react'
import { shallow } from 'enzyme'
import Search from '../component'

describe('Search component', () => {
  const props = {
    handleSubmit: jest.fn(),
    values: {
      search: 'Search...'
    },
    onClear: jest.fn(),
    handleBlur: jest.fn()
  }
  it('should match snapshot', () => {
    const component = shallow(<Search {...props} />)
    expect(component).toMatchSnapshot()
  })
})
