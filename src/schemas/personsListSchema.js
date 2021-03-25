import { schema } from 'normalizr'

const personSchema = new schema.Entity('person')
export const personsListSchema = new schema.Array(personSchema)
