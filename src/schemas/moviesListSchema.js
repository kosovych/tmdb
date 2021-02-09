import { schema } from 'normalizr'

export const getMoviesListSchema = () => {
  const movieSchema = new schema.Entity('movies')
  const moviesListSchema = new schema.Array(movieSchema)
  return moviesListSchema
}
