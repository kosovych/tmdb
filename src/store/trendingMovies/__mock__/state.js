export const state = {
  data: {
    movies: {
      1: {
        title: 'Movie',
        id: 1
      }
    }
  },
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

export const loadingState = {
  trendingMovies: {
    meta: {
      loading: true,
      currentPage: 1,
      totalResults: 2,
      search: 'search',
      error: 'Error'
    },
    entries: [1]
  }
}

export const loadingStateNoEntries = {
  trendingMovies: {
    meta: {
      loading: true,
      currentPage: 1,
      totalResults: 2,
      search: 'search',
      error: 'Error'
    }
  }
}

export const emptyEntriesState = {
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

export const noEntriesState = {
  trendingMovies: {
    meta: {
      loading: false,
      currentPage: 1,
      totalResults: 2,
      search: 'search',
      error: 'Error'
    }
  }
}
