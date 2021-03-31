import { schema } from 'normalizr'
import { merge } from 'lodash'

const searchMovieSchema = new schema.Entity('movies', {}, { processStrategy: entity => merge(entity, { media_type: 'movie' }) })
export const searchMoviesSchema = new schema.Array(searchMovieSchema)
