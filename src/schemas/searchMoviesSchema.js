import { schema } from 'normalizr'
import { merge } from 'lodash'
import camelcaseKeys from 'camelcase-keys'


const searchMovieSchema = new schema.Entity(
  'movies',
  {},
  {
    processStrategy: entity => merge(camelcaseKeys(entity), { mediaType: 'movie' })
  }
)
export const searchMoviesSchema = new schema.Array(searchMovieSchema)
