import React from 'react'
import { shallow } from 'enzyme'
import ClearButton from '../component'

describe('ClearButton component', () => {
  const props = {
    onClick: jest.fn(),
    isVisible: true
  }
  it('should match snapshot', () => {
    const component = shallow(<ClearButton {...props} />)
    expect(component).toMatchSnapshot()
  })
})
