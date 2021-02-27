import { schema } from 'normalizr'

const listSchema = new schema.Entity('userLists')
export const userListsSchema = new schema.Array(listSchema)
