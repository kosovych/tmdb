import React from 'react'
import { connect } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import diveTo from '../diveToEnzyme'

class MockComponent extends React.Component {
  mockMethod = jest.fn();

  render() {
    return <div>MockComponent</div>
  }
}

class OtherComponent extends React.Component {
  mockMethod = jest.fn();

  render() {
    return <div>OtherComponent</div>
  }
}

const WrappedComponent = connect()(MockComponent)

describe('diveTo()', () => {
  const store = configureStore()({})
  store.dispatch = jest.fn()

  describe('when target component defined as class', () => {
    const wrappedComponent = shallow(<WrappedComponent store={store} />)
    const target = diveTo(wrappedComponent, MockComponent)
    const targetInstance = target.instance()

    it('returns correct value', () => {
      expect(targetInstance).toBeInstanceOf(MockComponent)
    })
  })

  describe('when target component defined as function', () => {
    const wrappedComponent = shallow(<WrappedComponent store={store} />)
    it('throws error if target component is not present', () => {
      expect(() => { diveTo(wrappedComponent, OtherComponent) }).toThrow(Error)
    })
  })

  describe('without target component', () => {
    it('dives to target component defined as function', () => {
      const FunctionalComponent = () => (<div>FunctionalComponent</div>)
      const WrappedFunctionalComponent = connect()(FunctionalComponent)

      const wrappedFunctionalComponent = shallow(<WrappedFunctionalComponent store={store} />)
      const targetFunctional = diveTo(wrappedFunctionalComponent, FunctionalComponent)
      const targetFunctionalInstance = targetFunctional.instance()

      expect(targetFunctional.debug()).toEqual(shallow(<FunctionalComponent />).debug())
      expect(targetFunctionalInstance).toBeNull()
    })
  })
})
