export const state = {
  trendingMovies: {
    meta: {
      loading: false,
      currentPage: 1,
      totalResults: 2,
      search: 'search',
      error: 'Error'
    },
    entries: [1]
  }
}

export const blankState = {
  trendingMovies: {
    meta: {
      loading: false,
      currentPage: 1,
      totalResults: 2,
      search: 'search',
      error: 'Error'
    },
    entries: []
  }
}
