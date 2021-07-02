import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../component'

describe('Dashboard component', () => {
  const props = {
    movies: [
      {
        overview: 'The story of Usnavi, a...',
        backdropPath: '/1.jpg',
        posterPath: '/1.jpg',
        id: 467909,
        title: 'In the Heights',
        mediaType: 'movie'
      }, {
        overview: 'Determined to ...',
        backdropPath: '/1.jpg',
        id: 791373,
        posterPath: '/1.jpg',
        title: 'Justice League',
        mediaType: 'movie'
      }
    ],
    onPageChange: jest.fn(),
    currentPage: 1,
    totalResults: 1
  }

  describe('with movies', () => {
    it('should match snapshot', () => {
      const component = shallow(<Dashboard {...props} />)

      expect(component).toMatchSnapshot()
    })
  })

  describe('with loading', () => {
    const propsWithLoading = {
      movies: [],
      loading: true,
      onPageChange: jest.fn()
    }
    it('should match snapshot', () => {
      const component = shallow(<Dashboard {...propsWithLoading} />)
      expect(component).toMatchSnapshot()
    })
  })

  describe('with isBlank', () => {
    const propsWithIsBlank = {
      movies: [],
      isBlank: true,
      onPageChange: jest.fn()
    }
    it('should match snapshot', () => {
      const component = shallow(<Dashboard {...propsWithIsBlank} />)
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error', () => {
    const propsWithError = {
      movies: [],
      error: 'Error',
      onPageChange: jest.fn()
    }
    it('should match snapshot', () => {
      const component = shallow(<Dashboard {...propsWithError} />)
      expect(component).toMatchSnapshot()
    })
  })
})
