import { shallow } from 'enzyme'
import React from 'react'
import Icon from './component'

describe('<Icon />', () => {
  const testComponent = () => <div>Test</div>
  const defaultProps = {
    as: testComponent
  }

  it('should render <Icon />', () => {
    const wrapper = shallow(<Icon {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})
