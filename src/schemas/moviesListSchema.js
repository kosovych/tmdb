import { schema } from 'normalizr'
import { merge } from 'lodash'
import camelcaseKeys from 'camelcase-keys'

const movieSchema = new schema.Entity('movies', {}, {
  processStrategy: entity => merge(camelcaseKeys(entity), { mediaType: 'movie' })
})
export const moviesListSchema = new schema.Array(movieSchema)
