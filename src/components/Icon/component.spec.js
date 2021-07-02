import { shallow } from 'enzyme'
import React from 'react'
import Icon from './component'

describe('Icon component', () => {
  const TestComponent = () => <div>Test</div>
  const defaultProps = {
    as: TestComponent
  }

  it('matches snapshot', () => {
    const wrapper = shallow(<Icon {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})
