import { normalize, schema } from 'normalizr'

const movieSchema = new schema.Entity('movies')
const moviesListSchema = new schema.Array(movieSchema)

export const trendingMoviesSchema = data => normalize(data, moviesListSchema)
