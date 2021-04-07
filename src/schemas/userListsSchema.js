import { schema } from 'normalizr'
import camelcaseKeys from 'camelcase-keys'

const listSchema = new schema.Entity('userLists', {}, {
  processStrategy: entity => camelcaseKeys(entity)
})
export const userListsSchema = new schema.Array(listSchema)
