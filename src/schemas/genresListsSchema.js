import { schema } from 'normalizr'

const genreSchema = new schema.Entity('genreLists')
export const genresListsSchema = new schema.Array(genreSchema)
