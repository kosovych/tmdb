import { TRENDING_MOVIES } from 'Constants'
import { trendingMoviesSchema } from './trendingMoviesSchema'

export const getSchemaByEndpoint = (endpoint) => {
  let schema
  switch (endpoint) {
    case TRENDING_MOVIES:
      schema = trendingMoviesSchema
      break
    default:
      break
  }
  return schema
}
